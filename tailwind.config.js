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
		extend: {
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
				sans: ["Inter", "sans-serif"],
				manrope: ["Manrope", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				urbanist: ["Urbanist", "sans-serif"],
				caveat: ["Caveat", "cursive"],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["pastel"],
					depth: "0",
					"base-100": "#FFFFFF",
					"accent-content": "oklch(0.45 0.07 257.86)",
					"info-content": "oklch(0.7 0.09 260)",
					"success-content": "oklch(0.7 0.09 150)",
					"success": "oklch(0.96 0.07 151.43)",
					"info": "oklch(0.78 0.11 262.22)",
					"base-200": "oklch(0.97 0.001 247.838)",
					"base-300": "oklch(0.95 0.001 247.838)",
					"neutral": "oklch(0.88 0.001 247.838)",
					"secondary": "#FFFFFF",
				},
			},
			{
				dark: {
					...require("daisyui/src/theming/themes")["dim"],
					"accent-content": "oklch(0.9 0.07 257.86)",
					"info-content": "oklch(0.65 0.09 260)",
					"success-content": "oklch(0.7 0.09 150)",
					"success": "oklch(0.96 0.07 151.43)",
					"info": "oklch(0.78 0.11 262.22)",
					"neutral": "oklch(0.308577 0.023243 264.15)",
					"secondary": "oklch(0.308577 0.023243 264.15)",
					depth: "0",
				},
			},
		],
		darkTheme: "dark",
	},
};
