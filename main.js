const inquirer = require("inquirer");
const fs = require("fs");
const fullDir = process.cwd().split("/");
const proj_dir = fullDir[fullDir.length - 1];

const packageTemplate = require("./template/package");
const serverTemplate = require("./template/server");

const proj_questions = [
    { type: "input", name: "name", message: `Package name (${proj_dir})` },
    { type: "input", name: "version", message: "Package version (1.0.0)" },
    { type: "input", name: "test", message: "Test command" },
    { type: "input", name: "git", message: "Git repository" },
    { type: "input", name: "keywords", message: "Package keywords" },
    { type: "input", name: "description", message: "Package description" },
    { type: "input", name: "main", message: "Package entry (server.js)" },
    { type: "input", name: "author", message: "Author" },
    { type: "input", name: "license", message: "Package liscense (ISC)" },
    { type: "input", name: "db", message: `Database name (${proj_dir})` },
];

const proj_answer_defaults = {
    name: proj_dir,
    version: "1.0.0",
    test: "",
    git: "",
    keywords: "",
    description: "",
    main: "server.js",
    author: "",
    license: "ISC",
    db: proj_dir
}

inquirer.prompt(proj_questions)
    .then(proj_answers =>
    {
        proj_answers.name = proj_answers.name || proj_answer_defaults.name;
        proj_answers.version = proj_answers.version || proj_answer_defaults.version;
        proj_answers.test = proj_answers.test || proj_answer_defaults.test;
        proj_answers.git = proj_answers.git || proj_answer_defaults.git;
        proj_answers.keywords = proj_answers.keywords || proj_answer_defaults.keywords;
        proj_answers.description = proj_answers.description || proj_answer_defaults.description;
        proj_answers.main = proj_answers.main || proj_answer_defaults.main;
        proj_answers.author = proj_answers.author || proj_answer_defaults.author;
        proj_answers.license = proj_answers.license || proj_answer_defaults.license;

        const packageJson = packageTemplate.build(proj_answers);

        const proj_confirmation = (
            `About to write to ${fullDir.join("/")}/package.json:

${packageJson}

Is this OK? (yes)`
        );

        inquirer.prompt([{ type: "input", name: "confirmation", message: proj_confirmation }])
            .then(proj_conf_answer =>
            {
                proj_conf_answer = proj_conf_answer === "" ? "yes" : proj_conf_answer;

                if (proj_conf_answer === "yes")
                {
                    fs.writeFile("./package.json", packageJson, error => console.log(error || "package.json created."));
                }
            })
            .catch(error =>
            {
                console.log(error);
            });
    })
    .catch(error =>
    {
        console.log(error);
    });