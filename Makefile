preview: dist/index.html
	yarn preview

dev: node_modules/.yarn-integrity
	yarn dev

build: dist/index.html

dist/index.html: src/App.svelte node_modules/.yarn-integrity
	yarn build

node_modules/.yarn-integrity:
	yarn

src/App.svelte: $(wildcard src/**)
	node appgen.js
