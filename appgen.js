import fs from "fs";
import _ from "lodash";
import path from "path";
import std from "ps-std";

const get_relative = std.cacheFn(
	(page) => "./" + path.relative("./src/", page)
);

const get_page_component_name = std.cacheFn((page) => {
	page = get_relative(page);

	const match = page.match(/([^\/]+)\.svelte/);

	if (match) {
		if (
			page.indexOf(match[1]) <
			page.length - ".svelte".length - match[1].length
		) {
			page = page.replace(match[1], "");
		}
	}

	return _.startCase(page.slice(8, -7)).replace(/[^a-z]/gi, "");
});

function* get_pages(directory = "./src/pages") {
	const readdir = fs.readdirSync(directory);

	for (const child of readdir) {
		const filename = path.resolve(directory, child);
		const stats = fs.statSync(filename);

		if (stats.isDirectory()) {
			for (const page of get_pages(filename)) {
				yield page;
			}
		} else if (filename.endsWith(".svelte")) {
			yield filename;
		}
	}
}

function* appgen() {
	yield '<script lang="ts">';

	const pages = [...get_pages()];

	for (const page of pages) {
		const relative = get_relative(page);
		const component_name = get_page_component_name(page);

		yield `\timport ${component_name} from "${relative}";`;
	}

	yield `\timport NavBar from "./components/NavBar.svelte";`

	yield `\timport { page } from "./lib/state";`;

	yield "</script>";

	yield "";

	yield `{#if $page === ""}\n\t<Home />`;

	for (const page of pages) {
		const component_name = get_page_component_name(page);

		yield `{:else if $page === "${component_name}"}\n\t<${component_name} />`;
	}

	yield `{:else}`;
	yield `\t<h1>Page not found: {$page}</h1>`;
	yield `\t<button on:click={() => page.set("Home")}>Na hlavní stránku</button>`;
	yield `{/if}`;

	yield ``;
	yield `<NavBar />`;

	yield ""; // EOF
}

fs.writeFileSync("./src/App.svelte", [...appgen()].join("\n"));
