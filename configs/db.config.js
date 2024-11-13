const {Sequelize} = require("sequelize")

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "reactjs",
    logging: false
});


sequelize.authenticate().then(async () => {
    await sequelize.sync({alter: true});
    console.log("connected to MySQL");
}).catch(err => {
    console.log("Cannot connect to MySQL, error: ", err?.message);
});


module.exports = {sequelize}