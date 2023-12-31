import { store } from "@prokopschield/localstorage-state";
import { startCase } from "lodash";
import { writable } from "svelte/store";

import { login, session } from "./backend.js";

export const username = store<string>("username");
export const displayname = store<string>("displayname");
export const token = store<string>("token");
export const state = <T>(key: string) => store<T>(key);

export const user = store<{
	id: number | string;
	token: string;
	username: string;
	displayname: string;
	legal_name: string;
	legal_guardian: string;
	legal_guardian_contact: string;
	email: string;
}>("user");

export const redir = store<string>("redir");
export const page = store<string>("page");

for (const [key, value] of new URL(location.href).searchParams) {
	store(key).set(value);
}

page.subscribe((value) => {
	const canonical = startCase(value).replace(/[^a-z]/gi, "");

	if (value !== canonical) {
		return page.set(canonical);
	}

	if (value !== "Auth") {
		const url = new URL(location.href);

		if (!token.value && !value.includes("Auth")) {
			redir.set(value);
			page.set("Auth");
		} else if (url.searchParams.get("page") !== value) {
			url.searchParams.set("page", value);
			history.pushState(undefined, "", url.search);
		}
	}
});

export function restore_session(new_token?: string) {
	if (new_token) {
		if (page.value.startsWith("Auth")) {
			page.set(redir.value);
			redir.value = "";
		}

		session(username.value, new_token)
			.then((data) => {
				displayname.set(data.displayname);
				username.set(data.username);
				user.set(data);
			})
			.catch(() => token.set(""));
	} else {
		if (!page.value.startsWith("Auth")) {
			redir.value = page.value;
			page.set("Auth");
		}
	}
}

token.subscribe(restore_session);

window.addEventListener("popstate", () =>
	setTimeout(() => {
		const new_page = new URL(location.href).searchParams.get("page") || "";

		if (new_page && new_page !== page.value && new_page !== "Auth") {
			page.set(new_page);
		}
	})
);

if (!page.value) {
	page.set(location.pathname);
}

export const selected_camp = store<bigint | number>("selected_camp");

export function logout() {
	username.set("");
	displayname.set("");
	token.set("");
	user.set({
		displayname: "",
		email: "",
		id: 0,
		legal_guardian: "",
		legal_guardian_contact: "",
		legal_name: "",
		token: "",
		username: "",
	});
}

export const password = writable<string>();

state<string>("emtoken").subscribe(async (emtoken) => {
	if (!emtoken) {
		return;
	}

	try {
		const response = await login(username.value, emtoken);

		username.set(response.username);
		displayname.set(response.displayname);
		token.set(response.token);
	} catch {
		// ignore problems
	}
});
