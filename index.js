import express from "express";
import cors from "cors";
import { Sequelize } from "sequelize";

const app = express();
const port = process.env.PORT;
app.use(express());
app.use(cors());

const sequelize = new Sequelize(
  "test_bj2r",
  "test",
  "DbPCDoVPAy1G2rKI7KqkmDUpjZcO5QSC",
  {
    host: "postgres://test:DbPCDoVPAy1G2rKI7KqkmDUpjZcO5QSC@dpg-chnq99o2qv207f2q8fog-a.oregon-postgres.render.com/test_bj2r",
    dialect: "postgres",
  }
);

async function testing() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testing();

app.listen(port || 3000, () => {
  console.log("Server is running");
});

app.get("/", async (req, res) => {
  const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
  res.json({
    message:  jane.id,
  });
});
