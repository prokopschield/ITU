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
