import express from "express";
import cors from "cors";
import { DataTypes, Sequelize } from "sequelize";

const app = express();
const PORT = process.env.PORT || 3030;
app.use(express());
app.use(cors());

// const sequelize = new Sequelize(
//   "postgres://test:DbPCDoVPAy1G2rKI7KqkmDUpjZcO5QSC@dpg-chnq99o2qv207f2q8fog-a.oregon-postgres.render.com/test_bj2r"
// );

const sequelize = new Sequelize('test_bj2r', 'test', 'DbPCDoVPAy1G2rKI7KqkmDUpjZcO5QSC', {
    host: 'dpg-chnq99o2qv207f2q8fog-a',
    dialect: 'postgres' 
})

async function testing() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testing();

app.listen(PORT, () => {
  console.log("Server is running");
});

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: "green",
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
});

app.get("/", async (req, res) => {
  const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
  console.log(jane.id);
  res.json({
    message: jane.id,
  });
});
