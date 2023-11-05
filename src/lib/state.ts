import { writable } from "svelte/store";

import { session } from "./backend.js";

export const username = writable("");
export const displayname = writable("");
export const token = writable(localStorage.getItem("token") || "");

export const user = writable<{
	token: string;
	username: string;
	displayname: string;
	legal_name: string;
	legal_guardian: string;
	legal_guardian_contact: string;
	email: string;
}>();

export const page = writable("");

username.subscribe((value) => {
	if (value) {
		localStorage.setItem("username", value);
	}
});

let page_value = "";
let redirect_to = "";

page.subscribe((value) => (page_value = value));

token.subscribe((value) => {
	if (value) {
		if (page_value === "Auth") {
			page.set(redirect_to);
		}

		session(localStorage.getItem("username") || "", value)
			.then((data) => {
				displayname.set(data.displayname);
				username.set(data.username);
				user.set(data);
			})
			.catch(() => token.set(""));
	} else {
		if (page_value !== "Auth") {
			redirect_to = page_value;
			page.set("Auth");
		}
	}

	localStorage.setItem("token", value);
});

token.set(localStorage.getItem("token") || "");
