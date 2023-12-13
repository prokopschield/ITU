import { createClient } from "@prokopschield/simple-socket-client";

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
	redirect: string;
}) => Promise<
	| { status: "EMAIL_SENT" }
	| {
			error:
				| "DISPLAYNAME_TOO_SHORT"
				| "DISPLAYNAME_TOO_LONG"
				| "INVALID_INFO"
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

/*
	Jsou potřeba funkce (já se v tom typescriptu opravdu nevyznám, a nevím, jak se to ve Svelte dělá)

	Ve Vedoucích:
		OverviewTable - Funkce, která nahraje jména a body. Je tam vždy celá fixní proměnná, a místo ní se prostě musí dát data z databáze
		Actions - Je tam pole actions, místo něho databáze
		EditAction - Formulář, který by měl generovat záznam do DB
		PointTable - Tabulka, zase jsou potřeba data
		EditPerson - Formulář, měl by generovat záznam
		MultiPointTable - Pole s dětmi a akcemi. Z nich se vygenerujě tabulka na body, ty by se při změně mely propisovat do DB
*/