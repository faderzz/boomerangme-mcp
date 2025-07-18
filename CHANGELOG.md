# Changelog

## 0.1.0-alpha.1 (2025-07-18)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/faderzz/boomerangme-mcp/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **client:** add support for endpoint-specific base URLs ([a238959](https://github.com/faderzz/boomerangme-mcp/commit/a238959d0ea32129c0a87d450b25734a34199442))
* **mcp:** implement support for binary responses ([d9dd344](https://github.com/faderzz/boomerangme-mcp/commit/d9dd3443f6c12097e84c6adbc0a417d2928b06cd))
* **mcp:** include http information in tools ([21afca5](https://github.com/faderzz/boomerangme-mcp/commit/21afca51913d0dcd1d51d3c37aff59b68ac06ca6))
* **mcp:** set X-Stainless-MCP header ([e6841fb](https://github.com/faderzz/boomerangme-mcp/commit/e6841fbf8ce74284f71774b2b915081da9ff6849))
* **mcp:** support filtering tool results by a jq expression ([f8833eb](https://github.com/faderzz/boomerangme-mcp/commit/f8833eb8fb2f4b3ffad18385e481a4786b0c7ae6))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([c49d2da](https://github.com/faderzz/boomerangme-mcp/commit/c49d2da43dff97bec01f8766e9474dd6c1c2ae1b))
* **client:** explicitly copy fetch in withOptions ([64facc2](https://github.com/faderzz/boomerangme-mcp/commit/64facc2e1d89b022b481e19b67c5939ea3d9e2b9))
* **client:** get fetchOptions type more reliably ([ba2ed7a](https://github.com/faderzz/boomerangme-mcp/commit/ba2ed7a623bed3bd03e3e7cce2cedd71c352ffc3))
* compat with more runtimes ([64adbb9](https://github.com/faderzz/boomerangme-mcp/commit/64adbb95e2dde2979ff8a82736bcf339a6f646c5))
* **mcp:** fix cursor schema transformation issue with recursive references ([42fe409](https://github.com/faderzz/boomerangme-mcp/commit/42fe4094178d579c5d5c1f9a218f51e558ec811d))
* **mcp:** include description in dynamic tool search ([4319dd1](https://github.com/faderzz/boomerangme-mcp/commit/4319dd17ef03acb344fb87251cce973b88bd82e8))
* **mcp:** include required section for top-level properties and support naming transformations ([5da24c3](https://github.com/faderzz/boomerangme-mcp/commit/5da24c3ed762154e82cf5f463f07b3fabaf3ff04))
* **mcp:** relax input type for asTextContextResult ([603c878](https://github.com/faderzz/boomerangme-mcp/commit/603c87826be1095c879970ce16c3a2b99301bebf))
* **mcp:** support jq filtering on cloudflare workers ([89e4c78](https://github.com/faderzz/boomerangme-mcp/commit/89e4c78d7d8e88a469c31fb74f2928220047022d))
* publish script — handle NPM errors correctly ([66ef5df](https://github.com/faderzz/boomerangme-mcp/commit/66ef5df750ef587bb376ca03361c478100eb4524))


### Chores

* add docs to RequestOptions type ([4c0aea1](https://github.com/faderzz/boomerangme-mcp/commit/4c0aea157796ba0fe3127d7049e1cc294c0d80f8))
* adjust eslint.config.mjs ignore pattern ([f4c452c](https://github.com/faderzz/boomerangme-mcp/commit/f4c452c9935bb732e1b124ace8340c3ca3955ffc))
* avoid type error in certain environments ([98d9aa4](https://github.com/faderzz/boomerangme-mcp/commit/98d9aa454e09163fc87d8228bb6e0a88b7fd4fff))
* **ci:** enable for pull requests ([410e0ac](https://github.com/faderzz/boomerangme-mcp/commit/410e0acb3102c586c9a8ab63612f28cbd1a5d7b4))
* **ci:** only run for pushes and fork pull requests ([a1b714b](https://github.com/faderzz/boomerangme-mcp/commit/a1b714bcda36084e35abc085563f9dfa15177c44))
* **client:** improve path param validation ([da327c4](https://github.com/faderzz/boomerangme-mcp/commit/da327c45090f71e9a866d96f1192aeb0ecb7522c))
* **client:** refactor imports ([25352e1](https://github.com/faderzz/boomerangme-mcp/commit/25352e11101773e0fb578c680279fb366a60122b))
* configure new SDK language ([a6d5e9b](https://github.com/faderzz/boomerangme-mcp/commit/a6d5e9bd753b3b04105d41e3d64351769d5e0804))
* **deps:** bump eslint-plugin-prettier ([2b49d3d](https://github.com/faderzz/boomerangme-mcp/commit/2b49d3d032932d920ef8fd41ff0dfdae02a9b124))
* **docs:** grammar improvements ([efcb420](https://github.com/faderzz/boomerangme-mcp/commit/efcb4202107f1f13b776e5fdc86670b6ff920690))
* **docs:** use top-level-await in example snippets ([54b9b44](https://github.com/faderzz/boomerangme-mcp/commit/54b9b4411025512c924c6eaa8a45aa0f69e9cd6c))
* improve docs for MCP servers ([4b796b9](https://github.com/faderzz/boomerangme-mcp/commit/4b796b9d99b4eb5d3db06a5fa629017a184f3661))
* improve publish-npm script --latest tag logic ([dfa632e](https://github.com/faderzz/boomerangme-mcp/commit/dfa632e50f5669dfa8f0b834e0a5188c612180fa))
* **internal:** add pure annotations, make base APIResource abstract ([333a0eb](https://github.com/faderzz/boomerangme-mcp/commit/333a0ebf0b3a894f843eb06debb28c62e9da6472))
* **internal:** codegen related update ([4331f2d](https://github.com/faderzz/boomerangme-mcp/commit/4331f2d29bce9af2c17c7363ddacfd5ae64f18da))
* **internal:** fix readablestream types in node 20 ([b2fbaab](https://github.com/faderzz/boomerangme-mcp/commit/b2fbaab9650f030d764bb6377900122b924292d9))
* **internal:** update jest config ([9a9aa12](https://github.com/faderzz/boomerangme-mcp/commit/9a9aa12778dd81af7cbb20be44b157859cb06648))
* make some internal functions async ([3b04da1](https://github.com/faderzz/boomerangme-mcp/commit/3b04da19b0153668db79678352a209818c2ced29))
* **mcp:** formatting ([869351d](https://github.com/faderzz/boomerangme-mcp/commit/869351d7c997bbf8618a56b1b9001a54a49f42b8))
* **mcp:** provides high-level initMcpServer function and exports known clients ([56e5827](https://github.com/faderzz/boomerangme-mcp/commit/56e5827a549964251612c531bf5d470bc10eaabc))
* **mcp:** remove duplicate assignment ([f4f21ae](https://github.com/faderzz/boomerangme-mcp/commit/f4f21ae2b3e3a181bcdca888489aee847162bd95))
* **mcp:** rework imports in tools ([add634b](https://github.com/faderzz/boomerangme-mcp/commit/add634bb5488addd41edd47b04d4f9acfe6a02dd))
* **readme:** update badges ([05b0013](https://github.com/faderzz/boomerangme-mcp/commit/05b0013e6b8838aea8ff9ff22b21d917febfd505))
* **readme:** use better example snippet for undocumented params ([ca0aa78](https://github.com/faderzz/boomerangme-mcp/commit/ca0aa78ce331f835eea0e54960bbe7aebaa6abc4))
* **ts:** reorder package.json imports ([00a76f5](https://github.com/faderzz/boomerangme-mcp/commit/00a76f5535ff3450be9d8a6d24e6b209432b5ecb))
* update SDK settings ([0df985d](https://github.com/faderzz/boomerangme-mcp/commit/0df985de784e2ba0ede37700ae4b48a468fb07f7))
* update SDK settings ([19003db](https://github.com/faderzz/boomerangme-mcp/commit/19003db98b60fe69d64dbe96d7817c5944e231ea))
