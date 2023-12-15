import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

import { cs } from "../lang/cs";
import { en } from "../lang/en";

import { state } from "./state";

export const languages = { cs, en };

export const locale = Object.fromEntries(
	Object.entries(en).map(([key, value]) => {
		return [key, writable<string>(value)];
	}) as [keyof typeof en, Writable<string>][]
) as Record<keyof typeof en, Writable<string>>;

const selected_language = state<keyof typeof languages>("lang");

selected_language.subscribe((new_lang) => {
	const language = languages[new_lang];

	if (typeof language === "object") {
		for (const [key, value] of Object.entries(locale) as [
			keyof typeof locale,
			Writable<string>
		][]) {
			const local_string = language[key];

			if (local_string) {
				value.set(local_string);
			}
		}
	} else {
		selected_language.set("en");
	}
});

export function setLanguage(new_lang: keyof typeof languages) {
	selected_language.set(new_lang);
}

export function getLanguage() {
	return selected_language.value;
}
