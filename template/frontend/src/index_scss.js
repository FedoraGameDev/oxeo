module.exports = {
	build: vars => `body {
	margin: 0;
	padding: 0;
	height: 100%;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}

pre {
	white-space: pre-wrap;			 /* Since CSS 2.1 */
	white-space: -moz-pre-wrap;	/* Mozilla, since 1999 */
	white-space: -pre-wrap;			/* Opera 4-6 */
	white-space: -o-pre-wrap;		/* Opera 7 */
	word-wrap: break-word;			 /* Internet Explorer 5.5+ */
}

#root {
	height: 100%;
	background-color: #c0c0c0;
	height: 100%;
	display: flex;
	align-items: center;
}

.ui.inverted.menu  .active.item {
	background-color: transparent !important;
}`
}