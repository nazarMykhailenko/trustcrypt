/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html'],
	theme: {
		extend: {
			backgroundImage: {
				bgCover: 'url(../src/assets/img/bg.jpg)',
			},
		},
	},
	plugins: [],
}
