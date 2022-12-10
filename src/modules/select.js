import { getKeysValues, getWhereCondition } from "../utils.js";

export async function select(table, params = {}, columns = "*", additional = "") {
  const values = getKeysValues(params);
  if (values.keys.length === 0) {
    return await execute(`SELECT ${columns} FROM ${table} ${additional}`, []);
  } else {
    const whereCondition = getWhereCondition(values);
    return await execute(`SELECT ${columns} FROM ${table} WHERE ${whereCondition} ${additional}`, values.values);
  }
}

export async function selectOne(table, params = {}, columns = "*") {
  const response = await select(table, params, columns, "LIMIT 1");
  return response[0];
}
