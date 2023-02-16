/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/homepage.html', './public/products-page.html'],
	theme: {
		extend: {
			backgroundImage: {
				bgCover: 'url(../src/assets/img/bg.jpg)',
			},
			screens: {
				big: '1280px',
				avg: '525px',
				tiny: '405px',
			},
		},
	},
	plugins: [],
}
