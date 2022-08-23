/* eslint-disable indent */
/* eslint-disable no-tabs */
module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
	},
	extends: ["eslint:recommended", "google"],
	rules: {
		quotes: ["error", "double"],
	},
	parserOptions: {
		parser: "@babel/eslint-parser",
		requireConfigFile: false,
	},
};
