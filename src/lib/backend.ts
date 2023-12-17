import { real } from "@prokopschield/complex";
import { createClient } from "@prokopschield/simple-socket-client";
import { defineGlobal } from "ps-std";

export const [client, socket] = createClient("wss://camp.fitvut.cz");

export const backend = new Proxy(client, {
	get(target, key) {
		const real = target[String(key)];

		return async (...args: any[]) => {
			const { success, error, ...rest } = await real(...args);

			if (error) {
				throw error;
			}

			if (!success) {
				throw "FAILURE";
			}

			return rest;
		};
	},
});

defineGlobal("client", client);
defineGlobal("socket", socket);
defineGlobal("backend", backend);

export const login: (
	username: string,
	secret: string
) => Promise<{
	token: string;
	username: string;
	displayname: string;
	legal_name: string;
	legal_guardian: string;
	legal_guardian_contact: string;
	email: string;
}> = backend.login;

export const session: (
	username: string,
	token: string
) => Promise<{
	id: string | number;
	token: string;
	username: string;
	displayname: string;
	legal_name: string;
	legal_guardian: string;
	legal_guardian_contact: string;
	email: string;
}> = backend.session;

export const register: (info: {
	displayname: string;
	legal_name: string;
	legal_guardian: string;
	legal_guardian_contact: string;
	email: string;
	password: string;
	redirect: string;
}) => Promise<
	| { status: "EMAIL_SENT" }
	| {
		error:
		| "DISPLAYNAME_TOO_SHORT"
		| "DISPLAYNAME_TOO_LONG"
		| "INVALID_INFO"
		| "USERNAME_TAKEN"
		| "<<string>>";
	}
> = client.register;

export const change_my_info: (info: {
	displayname?: string;
	legal_name?: string;
	legal_guardian?: string;
	legal_guardian_contact?: string;
	email?: string;
	redirect?: string;
}) => Promise<{
	username: string;
	displayname: string;
	legal_name: string;
	legal_guardian: string;
	legal_guardian_contact: string;
}> = backend.change_my_info;

/** vrací role přihlášeného uživatele */
export const load_roles: () => Promise<{
	data: {
		attendee: {
			id: real;
			attendee_id: real;
			camp_id: real;
		}[];
		camp: {
			id: real;
			organizer_id: real;
			name: string;
			web: string;
		}[];
		leader: {
			id: real;
			camp_id: real;
			user_id: real;
		}[];
	};
}> = backend.load_roles;

//vraci jmena uzivatelu a soucet jejich bodu
export const get_leaderboard: (camp_id: number) => Promise<{
	attendees: {
		id: real;
		displayname: string;
		points: number;
	}[];
}> = backend.get_leaderboard;

export const get_activities: (camp_id: number) => Promise<{
	activities: { id: number; name: string; dateTime: string }[];
}> = backend.get_activities;

export const delete_activity: (camp_id: number, activities_id: number) => {} =
	backend.delete_activity;

export const delete_participant: (
	camp_id: number,
	participant_id: number
) => {} = backend.delete_participant;

export const get_attendees: (camp_id: number) => Promise<{
	attendees: { id: number; name: string }[];
}> = backend.get_attendees;

/** parní mlátička */
export const { leader_camp_info } = backend;

/** permanently deletes an activity */
export const leader_delete_activity: (activity_id: real) => Promise<
	{
		leader: {
			id: bigint;
			camp_id: bigint;
			user_id: bigint;
			timestamp: Date;
		};
	} & {
		id: bigint;
		name: string;
		camp_id: bigint;
		leader_id: bigint;
		description: string;
		points: number;
		timestamp: Date;
	}
> = backend.leader_delete_activity;

/*
	Jsou potřeba funkce (já se v tom typescriptu opravdu nevyznám, a nevím, jak se to ve Svelte dělá)

	Ve Vedoucích:
		OverviewTable - Funkce, která nahraje jména a body. Je tam vždy celá fixní proměnná, a místo ní se prostě musí dát data z databáze
		EditActivity - Formulář, který by měl generovat záznam do DB
		PointTable - Tabulka, zase jsou potřeba data
		EditPerson - Formulář, měl by generovat záznam
		MultiPointTable - Pole s dětmi a akcemi. Z nich se vygenerujě tabulka na body, ty by se při změně mely propisovat do DB
*/

export async function get_leader_points_table(camp_id: real) {
	const result: {
		camp: {
			activity: Array<{
				id: real;
				name: string;
				description: string;
				points: number;
				attended: {
					score: number;
					attendee: { id: real; user: { displayname: string } };
				}[];
			}>;
		};
	} = await backend.leader_camp_info(Number(camp_id));

	const {
		camp: { activity: activities },
	} = result;

	const attended = activities.flatMap((activity) => activity.attended);

	const attendees = new Set<{ id: real; user: { displayname: string } }>();

	for (const { attendee } of attended) {
		let found = false;

		for (const loop_user of attendees) {
			if (attendee.id === loop_user.id) {
				found = true;

				break;
			}
		}

		if (found === false) {
			attendees.add(attendee);
		}
	}

	return {
		attendees: [...attendees].map((attendee) => {
			const score_map = new Map<number, number>();

			const score_mgr = {
				getScore(activity_query: real) {
					const activity = activities.find(
						(activity) =>
							activity.name == activity_query ||
							activity.id == activity_query
					);

					if (!activity) {
						return 0;
					}

					const cached = score_map.get(Number(activity.id));

					if (cached) {
						return cached;
					}

					const attended = activity.attended.find(
						(attended) => attended.attendee.id == attendee.id
					);

					if (!attended) {
						return 0;
					}

					return attended.score;
				},
				async setScore(activity_query: real, new_score: number) {
					const activity = activities.find(
						(activity) =>
							activity.name == activity_query ||
							activity.id == activity_query
					);

					if (!activity) {
						throw new Error("Activity not found");
					}

					score_map.set(Number(activity.id), Number(new_score));

					await backend.leader_set_score(
						Number(activity.id),
						Number(attendee.id),
						Number(new_score)
					);

					return this;
				},
			};

			Object.assign(attendee, {
				score_map,
				...score_mgr,
				score: new Proxy(
					{},
					{
						get(_target, key) {
							return score_mgr.getScore(String(key));
						},
						set(_target, key, value) {
							score_mgr.setScore(String(key), Number(value));

							return true;
						},
					}
				),
			});

			return attendee as typeof attendee & {
				getScore(activity: real): number;
				setScore(activity: real, score: number): Promise<any>;
				score: Record<string, number>;
			};
		}),
		activities,
	};
}
