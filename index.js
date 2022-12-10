import { init } from "./src/execution.js";
import { select, selectOne } from "./src/modules/select.js";
import { updateBy, updateById, updateByUsername } from "./src/modules/update.js";
import { insertMany, insertOne } from "./src/modules/insert.js";
import { deleteById, deleteByParam } from "./src/modules/delete.js";

function initConnection(host, user, password, database) {
  init(host, user, password, database);
}

export default {
  initConnection,
  select,
  selectOne,
  updateBy,
  updateById,
  updateByUsername,
  insertMany,
  insertOne,
  deleteById,
  deleteByParam,
};
