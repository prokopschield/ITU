import { assert } from "ps-std";

import { backend, socket } from "./backend";
import { user } from "./state";

export interface DM<T extends Record<string, any>> {
	id: number;
	sender_id: number;
	recipient_id: number;
	data: Partial<T>;
}

export const DM_set = new Set<DM<any>>();
export const DM_map = new Map<number, DM<any>>();

export const interlocutor_set = new Set<number>();
export const interlocutor_callbacks = new Map<number, Function>();

user.subscribe(async () => {
	try {
		const { interlocutors } = await backend.get_dm_interlocutors();

		for (const { interlocutor_id } of interlocutors) {
			const id = Number(interlocutor_id);

			assert(id);

			interlocutor_set.add(id);
		}
	} catch (error) {
		console.error("DM interlocutor update failed:", error);
	}
});

export async function getInterlocutors() {
	return [...interlocutor_set];
}

function loadDM(_interlocutor: any, data: DM<any>) {
	try {
		const id = Number(data.id);
		const sender_id = Number(data.sender_id);
		const recipient_id = Number(data.recipient_id);

		assert(id && sender_id && recipient_id);

		if (!DM_map.has(id)) {
			const dm = { id, sender_id, recipient_id, data };

			DM_map.set(id, dm);
			DM_set.add(dm);

			const callback = interlocutor_callbacks.get(
				user.value?.id === sender_id ? recipient_id : sender_id
			);

			if (typeof callback === "function") {
				setTimeout(async () => {
					try {
						await callback(dm);
					} catch (error) {
						console.error("DM callback error", dm, error, callback);
					}
				});
			}

			return dm;
		} else {
			return DM_map.get(id);
		}
	} catch (error) {
		console.error("Error loading DM", data, error);
	}
}

socket.on("DM", loadDM);

export async function sendDM<T extends Record<string, any>>(
	recipient: number | string,
	message: T
) {
	await backend.send_dm(recipient, message);
}

export async function getDMs(interlocutor: number, min_count = 20) {
	const cached = [...DM_set].filter(({ sender_id, recipient_id }) => {
		return sender_id === interlocutor || recipient_id === interlocutor;
	});

	cached.sort((a, b) => a.id - b.id);

	if (cached.length >= min_count) {
		return cached;
	}

	const { messages } = await backend.query_dms(
		interlocutor,
		min_count - cached.length,
		cached[0]?.id
	);

	return [
		...messages.map((dm: DM<any>) => loadDM(interlocutor, dm)),
		...cached,
	];
}

export function registerInterlocutorCallback(
	interlocutor: number,
	callback: Function
) {
	interlocutor_callbacks.set(interlocutor, callback);
}
