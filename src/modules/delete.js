import { getKeysValues, getWhereCondition } from "../utils.js";

export async function deleteById(table, id) {
  return await execute(`DELETE FROM ${table} WHERE id = ?`, [id]);
}

export async function deleteByParam(table, params) {
  const values = getKeysValues(params);
  const whereCondition = getWhereCondition(values);
  return await execute(`DELETE FROM ${table} WHERE ${whereCondition}`, values.values);
}
