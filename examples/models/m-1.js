const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./../../configs/db.config");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING, //varchar
    birthday: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "User",
    // timestamps: true,
    // updatedAt: "update_date",
    // createdAt: false,
  }
);

async function main() {
  await User.sync({ force: true });
  const user = await User.create({
    username: "sina ghaffari",
    birthday: new Date("1998-02-22"),
  });
  console.log(user.dataValues);
}

main().catch((err) => {
  console.error("Error occurred:", err);
});
