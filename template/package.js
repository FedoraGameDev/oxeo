module.exports = {
	build: vars =>
	{
		return (
			`{
	"name": "${vars.name}",
	"version": "${vars.version}",
	"description": "${vars.description}",
	"main": "${vars.main}",
	"scripts": {
		"start": "node .",
		"dev": "nodemon ."${vars.test ? `,
		"test": "${vars.test}"` : ""}
	},
    ${vars.git ? `"git": "${vars.git}",` : ""
				}
    ${vars.keywords ? `"keywords": [
		${vars.keywords.split(" ").map(word => (`"${word}"`))}
	]` : ""}
	"author": "${vars.author}",
	"license": "${vars.license}",
	"dependencies": {
		"cors": "^2.8.5",
		"express": "^4.16.4",
		"mongoose": "^5.5.5"
	}
}`.replace("\n    \n", "\n").replace("\n    \n", "\n")
		);
	}
}