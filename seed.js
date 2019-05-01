const db = require("./src/database"); //Required to initialize connection to DB
const models = require("./src/models");

console.log("Defining seed.");
async function seed()
{
    console.log("Removing all Hellos...");
    await models.Hello.deleteMany({});

    console.log("Generating Hello Model...");
    let hello = await GenerateHello();

    await Exit();
}

async function GenerateHello()
{
    const hello = new models.Hello({
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
    process.exit();
}

console.log("Starting seed...");
seed();