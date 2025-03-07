// tailwind.config.js
const daisyui = require("daisyui");

module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
	],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				myLight: {
					...require("daisyui/src/theming/themes")["fantasy"],
					depth: "0",
				},
			},
			{
				myDark: {
					...require("daisyui/src/theming/themes")["dim"],
					depth: "0",
				},
			},
		],
		darkTheme: "myDark",
	},
};
