const inquirer = require("inquirer");
const { execSync } = require("child_process")
const fs = require("fs");
const fullDir = process.cwd().split("/");
const proj_dir = fullDir[fullDir.length - 1];

const packageTemplate = require("./template/package");
const serverTemplate = require("./template/server");
const databaseTemplate = require("./template/src/database");
const controllersTemplate = require("./template/src/controllers/helloControllers");
const controllersIndexTemplate = require("./template/src/controllers/index");
const modelsTemplate = require("./template/src/models/helloModel");
const modelsIndexTemplate = require("./template/src/models/index");
const routesTemplate = require("./template/src/routes/helloRoutes");
const routesIndexTemplate = require("./template/src/routes/index");
const seedTemplate = require("./template/seed");
const readmeTemplate = require("./template/readme");

const frontPackageTemplate = require("./template/frontend/package");
const frontPubIndexTemplate = require("./template/frontend/public/index");
const frontManifestTemplate = require("./template/frontend/public/manifest");
const frontAppTemplate = require("./template/frontend/src/App");
const frontIndexTemplate = require("./template/frontend/src/index");
const frontServiceWorkerTemplate = require("./template/frontend/src/serviceWorker");
const frontIndexScssTemplate = require("./template/frontend/src/index_scss");
const frontRoutesTemplate = require("./template/frontend/src/Constants/Routes");
const frontHelloTemplate = require("./template/frontend/src/Components/Hello");
const frontNavigationTemplate = require("./template/frontend/src/Components/Navigation");

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

installDependencies = () =>
{
    console.log("Installing dependencies. This may take a few mintes...");
    execSync("npm i && cd frontend && npm i && cd ..");
    console.log("Project generation complete.");
    console.log("Run MongoDb and `node seed.js` to prepare the database.");
}

writeFile = (file, data) =>
{
    fs.writeFileSync(file, data);
}

writeFiles = (dir, proj_answers, packageJson) =>
{
    writeFile(`${dir}/package.json`, packageJson);
    writeFile(`${dir}/${proj_answers.main}`, serverTemplate.build(proj_answers));
    writeFile(`${dir}/src/database.js`, databaseTemplate.build(proj_answers));
    writeFile(`${dir}/src/controllers/helloControllers.js`, controllersTemplate.build(proj_answers));
    writeFile(`${dir}/src/controllers/index.js`, controllersIndexTemplate.build(proj_answers));
    writeFile(`${dir}/src/models/helloModel.js`, modelsTemplate.build(proj_answers));
    writeFile(`${dir}/src/models/index.js`, modelsIndexTemplate.build(proj_answers));
    writeFile(`${dir}/src/routes/helloRoutes.js`, routesTemplate.build(proj_answers));
    writeFile(`${dir}/src/routes/index.js`, routesIndexTemplate.build(proj_answers));
    writeFile(`${dir}/seed.js`, seedTemplate.build(proj_answers));
    writeFile(`${dir}/readme.md`, readmeTemplate.build(proj_answers));

    writeFile(`${dir}/frontend/package.json`, frontPackageTemplate.build(proj_answers));
    writeFile(`${dir}/frontend/public/index.html`, frontPubIndexTemplate.build(proj_answers));
    writeFile(`${dir}/frontend/public/manifest.json`, frontManifestTemplate.build(proj_answers));
    writeFile(`${dir}/frontend/src/App.js`, frontAppTemplate.build(proj_answers));
    writeFile(`${dir}/frontend/src/index.js`, frontIndexTemplate.build(proj_answers));
    writeFile(`${dir}/frontend/src/serviceWorker.js`, frontServiceWorkerTemplate.build(proj_answers));
    writeFile(`${dir}/frontend/src/index.scss`, frontIndexScssTemplate.build(proj_answers));
    writeFile(`${dir}/frontend/src/Constants/Routes.js`, frontRoutesTemplate.build(proj_answers));
    writeFile(`${dir}/frontend/src/Components/Hello.js`, frontHelloTemplate.build(proj_answers));
    writeFile(`${dir}/frontend/src/Components/Navigation.js`, frontNavigationTemplate.build(proj_answers));

    installDependencies();
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
        proj_answers.db = proj_answers.db || proj_answer_defaults.db;

        const packageJson = packageTemplate.build(proj_answers);

        const proj_confirmation = (
            `About to write to ${fullDir.join("/")}/package.json:

${packageJson}

Is this OK? (yes)`
        );

        inquirer.prompt([{ type: "input", name: "confirmation", message: proj_confirmation }])
            .then(proj_conf_answer =>
            {
                proj_conf_answer.confirmation = proj_conf_answer.confirmation === "" ? "yes" : proj_conf_answer.confirmation;

                if (proj_conf_answer.confirmation === "yes")
                {
                    console.log("Creating file structure...");
                    if (!fs.existsSync("./src")) fs.mkdirSync("./src");
                    if (!fs.existsSync("./src/controllers")) fs.mkdirSync("./src/controllers");
                    if (!fs.existsSync("./src/models")) fs.mkdirSync("./src/models");
                    if (!fs.existsSync("./src/routes")) fs.mkdirSync("./src/routes");
                    if (!fs.existsSync("./frontend")) fs.mkdirSync("./frontend");
                    if (!fs.existsSync("./frontend/public")) fs.mkdirSync("./frontend/public");
                    if (!fs.existsSync("./frontend/src")) fs.mkdirSync("./frontend/src");
                    if (!fs.existsSync("./frontend/src/Components")) fs.mkdirSync("./frontend/src/Components");
                    if (!fs.existsSync("./frontend/src/Constants")) fs.mkdirSync("./frontend/src/Constants");
                    console.log("File structure created.");

                    console.log("Writing files...");
                    try { writeFiles(fullDir.join("/"), proj_answers, packageJson); }
                    catch (error) { console.log(error); }

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