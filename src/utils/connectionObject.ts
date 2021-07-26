import { ConnectionOptions } from "typeorm";
import Entities from "../entities/entities";

const ConnectionObject: ConnectionOptions = {
  type: "sqlite",
  synchronize: true,
  logging: true,
  database: "db.sqlite3",
  entities: Entities
}

export default ConnectionObject
