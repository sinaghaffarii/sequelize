const { DataTypes, Op } = require("sequelize");
const { sequelize } = require("../../configs/db.config");

const userList = [
  {
    firstName: "sina",
    lastName: "ghaffari",
    userName: "sina.dev",
    age: "27",
    birthday: new Date("1997-11-18"),
    bio: "software developer",
  },
  {
    firstName: "ali",
    lastName: "karami",
    userName: "ali.k",
    age: "30",
    birthday: new Date("1994-02-15"),
    bio: "web designer",
  },
  {
    firstName: "fatemeh",
    lastName: "mohammadi",
    userName: "fatemeh.dev",
    age: "25",
    birthday: new Date("1999-05-22"),
    bio: "data analyst",
  },
  {
    firstName: "mohammad",
    lastName: "rezaei",
    userName: "mohammad.r",
    age: "32",
    birthday: new Date("1992-07-30"),
    bio: "project manager",
  },
  {
    firstName: "zahra",
    lastName: "hashemi",
    userName: "zahra.h",
    age: "28",
    birthday: new Date("1996-12-01"),
    bio: "UX researcher",
  },
  {
    firstName: "hassan",
    lastName: "jafari",
    userName: "hassan.j",
    age: "29",
    birthday: new Date("1995-03-10"),
    bio: "mobile developer",
  },
  {
    firstName: "niloofar",
    lastName: "gholami",
    userName: "niloofar.g",
    age: "26",
    birthday: new Date("1998-08-20"),
    bio: "system analyst",
  },
  {
    firstName: "kamran",
    lastName: "mohseni",
    userName: "kamran.m",
    age: "31",
    birthday: new Date("1993-11-11"),
    bio: "software architect",
  },
  {
    firstName: "sara",
    lastName: "pouran",
    userName: "sara.p",
    age: "24",
    birthday: new Date("1999-09-09"),
    bio: "content writer",
  },
  {
    firstName: "arash",
    lastName: "zare",
    userName: "arash.z",
    age: "33",
    birthday: new Date("1991-04-14"),
    bio: "database administrator",
  },
  {
    firstName: "mahnaz",
    lastName: "sharifi",
    userName: "mahnaz.s",
    age: "27",
    birthday: new Date("1997-06-25"),
    bio: "network engineer",
  },
  {
    firstName: "amir",
    lastName: "sadeghi",
    userName: "amir.s",
    age: "29",
    birthday: new Date("1995-01-05"),
    bio: "AI researcher",
  },
  {
    firstName: "leila",
    lastName: "abedi",
    userName: "leila.a",
    age: "26",
    birthday: new Date("1998-03-30"),
    bio: "game developer",
  },
  {
    firstName: "pouya",
    lastName: "fathi",
    userName: "pouya.f",
    age: "30",
    birthday: new Date("1994-10-10"),
    bio: "DevOps engineer",
  },
  {
    firstName: "shirin",
    lastName: "khalili",
    userName: "shirin.k",
    age: "28",
    birthday: new Date("1996-02-02"),
    bio: "digital marketer",
  },
  {
    firstName: "yasin",
    lastName: "mohammadi",
    userName: "yasin.m",
    age: "32",
    birthday: new Date("1992-07-07"),
    bio: "SEO specialist",
  },
  {
    firstName: "nafas",
    lastName: "zand",
    userName: "nafas.z",
    age: "25",
    birthday: new Date("1999-08-18"),
    bio: "graphic designer",
  },
  {
    firstName: "soroush",
    lastName: "ghorbanian",
    userName: "soroush.g",
    age: "31",
    birthday: new Date("1993-12-12"),
    bio: "full-stack developer",
  },
  {
    firstName: "hoda",
    lastName: "rahimi",
    userName: "hoda.r",
    age: "29",
    birthday: new Date("1995-04-04"),
    bio: "business analyst",
  },
  {
    firstName: "farhad",
    lastName: "safavi",
    userName: "farhad.s",
    age: "34",
    birthday: new Date("1990-11-30"),
    bio: "cloud engineer",
  },
];

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

async function main() {
  await User.sync({ force: true }).then(() => {
    console.log("Synced User");
  });
  await User.bulkCreate(userList);
  //   const users = await User.findAll();
  //   for (const user of users) {
  //       console.log(user.dataValues);
  //   }
  //   //   --------------------------------------------
  //   const users = await User.findAll({
  //     where: {
  //       age: {
  //         // “Operator Greater Than” بزرگتر
  //         // [Op.gt]: 27,
  //         // بزرگتر مساوی
  //         [Op.gte]: 27,
  //       },
  //     },
  //     raw: true,
  //   });
  //   --------------------------------------------
  //   const users = await User.findAll({
  //     where: {
  //       id: {
  //         [Op.gte]: 5,
  //       },
  //     },
  //     limit: 3, // یعنی 3 تاشو بیار
  //     offset: 3, // یعنی 3 تا توی لیست برو جلو
  //     raw: true,
  //   });
  //   console.log(users);
  //   //   -------------------------------------------- pagination
  //   const users = await User.findAll({
  //     limit: 5,
  //     offset: (4 - 1) * 5,
  //     raw: true,
  //   });
  //   console.log(users);
  //   //   --------------------------------------------
  //   const users = await User.findOne({
  //     where: {
  //       userName: "sina.devv",
  //     },
  //     raw: true,
  //   });
  //   if (!users) {
  //     console.log("Not Found");
  //   } else {
  //     console.log(users);
  //   }
  // //   -------------------------------------------- find by primary key
  // const users = await User.findByPk(5, { raw: true });
  // if (!users) {
  //   console.log("Not Found");
  // } else {
  //   console.log(users);
  // }
  //   -------------------------------------------- find and count all
  // const { rows, count } = await User.findAndCountAll({
  //   where: {
  //     age: {
  //       [Op.gte]: 33,
  //     },
  //   },
  //   raw: true,
  // });
  // console.log("rows:::::::", rows);
  // console.log("count:::::::", count);
  // -----------------------------------------------------------
  // const count = await User.count({
  //   where: {},
  // });
  // console.log("count ::", count);

  // const min = await User.min("age");
  // console.log("min::", min);

  // const max = await User.max("age");
  // console.log("max::", max);

  // const sumOfAge = await User.sum("age");
  // console.log("sumOfAge::", sumOfAge);
  // -----------------------------------------------------------
  // const users = await User.findAll({
  //   where: {
  //     age: {
  //       [Op.lt]: 30,
  //     },
  //   },
  //   attributes: ["firstName" , "lastName" , "age"],
  //   raw: true
  // });
  // console.log(users)
  // // -----------------------------------------------------------

  // const users = await User.findAll({
  //   where: {
  //     age: {
  //       [Op.lt]: 30,
  //     },
  //   },
  //   attributes:{
  //     exclude: ["id", "age", "bio"]
  //   },
  //   raw: true,
  // });
  // console.log(users);
  // // -----------------------------------------------------------
  // const users = await User.findAll({
  //   where: {

  //   },
  //   attributes: ["id", "firstName", "lastName"],
  //   order: [["id", "DESC"]],
  //   raw: true,
  // });
  // console.log(users);
  // -----------------------------------------------------------

  // const users = await User.findAll({
  //   where: {
  //     // firstName: {
  //     //   [Op.regexp]: "a$",
  //     //   [Op.regexp]: "^a",
  //     //   [Op.notRegexp]: "n$",
  //     //   [Op.like]: "%hn",
  //     //   [Op.notLike]: "%a%",
  //     //   [Op.in]: ["john", "lily"],
  //     // },
  //     age: {
  //       // [Op.in]: [35, 25, 34],
  //       // [Op.notIn]: [35, 25, 34, 30, 22, 28],
  //       // [Op.is]: null,
  //       // [Op.not]: null,
  //       [Op.ne]: 30, // مخالف 34 باشه
  //     },
  //   },
  //   attributes: ["id", "firstName", "lastName", "age"],
  //   raw: true,
  //   logging: console.log,
  // });
  // console.log(users);
  // ----------------------------------------------------------- OR
  const users = await User.findAll({
    where: {
      [Op.or]: {
        firstName: {
          [Op.like]: "%si%",
        },
        id: {
          [Op.lte]: 6,
        },
      },
    },
    attributes: ["id", "firstName", "lastName", "age"],
    raw: true,
    logging: console.log,
  });
  console.log(users);
}

main();
