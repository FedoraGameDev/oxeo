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
      "dev": "nodemon .",
      "test": "${vars.test || "echo \\\"Error: no test specified\\\" && exit 1"}"
	},
    ${vars.git ? `"git": "${vars.git}",` : ""
				}
    ${vars.keywords ? `"keywords": [
		${vars.keywords.split(" ").map(word => (`"${word}"`))}
	]` : ""}
	"author": "${vars.author}",
	"license": "${vars.license}"
}`.replace("\n    \n", "\n").replace("\n    \n", "\n")
		);
	}
}