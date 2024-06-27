import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/user";

const dataSource = new DataSource({
  type: "mongodb",
  url: process.env.DATABASE_URL,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [User],
  synchronize: true, //change this before pushing into production
  logging: true, //change this before pushing into production
});

export default dataSource;
