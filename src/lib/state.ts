import { writable } from "svelte/store";

export const username = writable("");
export const displayname = writable("");
export const token = writable(localStorage.getItem("token") || "");

export const page = writable("");

let page_value = "";
let redirect_to = "";

page.subscribe((value) => (page_value = value));

token.subscribe((value) => {
	if (value) {
		if (page_value === "Auth") {
			page.set(redirect_to);
		}
	} else {
		if (page_value !== "Auth") {
			redirect_to = page_value;
			page.set("Auth");
		}
	}

	localStorage.setItem("token", value);
});
