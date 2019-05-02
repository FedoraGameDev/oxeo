module.exports = {
	build: vars => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#000000" />
		<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
		<title>OXEO Template</title>
	</head>

	<body>
		<noscript>You need to enable JavaScript to run this app.</noscript>
		<div id="root"></div>
	</body>

</html>`
}