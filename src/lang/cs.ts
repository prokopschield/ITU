import { en } from "./en";

export const cs: Partial<typeof en> = {
	IS_CAMP: "IS CAMP",

	LOG_IN: "Přihlásit se",
	SIGN_UP: "Potvrdit registraci",

	EMAIL: "E-mail",
	USERNAME: "Přihlašovací jméno",
	PASSWORD: "Heslo",
	DISPLAYNAME: "Přezdívka",
	LEGAL_NAME: "Jméno a příjmení",
	LEGAL_GUARDIAN: "Zákonný zástupce",
	LEGAL_GUARDIAN_CONTACT: "Kontakt na zákonného zástupce",
	IS_MINOR: "Nezletilý/á",
	SIGN_UP_FAIL: "Chyba v metrixu - zkontroluj, prosím, zadané údaje.",
	SIGN_UP_SUCCESS: "Zkontroluj si e-mail! :-)",
	INVALID_EMAIL: "Neplatný e-mail.",
	DISPLAYNAME_TOO_LONG: "Přezdívka příliš je dlouhá.",
	DISPLAYNAME_TOO_SHORT: "Přezdívka příliš je krátká.",
	INVALID_INFO: "Zadané údaje jsou neplatné.",
};

Object.setPrototypeOf(cs, en);