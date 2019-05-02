module.exports = {
    build: vars => `const db = require("./src/database"); //Required to initialize connection to DB
const models = require("./src/models");

console.log("Defining seed...");
async function seed()
{
    try
    {
        console.log("Removing all Hellos...");
        await models.hello.deleteMany();

        console.log("Generating Hello Model...");
        let hello = await GenerateHello();

        await Exit();
    }
    catch (error)
    {
        console.log(error);
        process.exit();
    }
}

async function GenerateHello()
{
    const hello = new models.hello({
        message: "Hello World"
    });

    try
    {
        await hello.save();
        return hello;
    }
    catch (err)
    {
        console.log(err);
        process.exit();
    }
}

async function Exit()
{
    console.log("Finished!");
    process.exit();
}

console.log("Starting seed...");
seed();`
}