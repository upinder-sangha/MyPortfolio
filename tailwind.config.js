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
				light: {
					...require("daisyui/src/theming/themes")["pastel"],
					depth: "0",
				},
			},
			{
				dark: {
					...require("daisyui/src/theming/themes")["dim"],
					depth: "0",
				},
			},
		],
		darkTheme: "dark",
	},
};
