import { getKeysValues, getWhereCondition } from "../utils.js";

export async function updateById(table, id, params) {
  return await updateBy(table, { id: id }, params);
}

export async function updateByUsername(table, username, params) {
  return await updateBy(table, { username: username }, params);
}

export async function updateBy(table, condition, params) {
  const values = getKeysValues(params);
  if (values.keys.length === 0) {
    return new Error("Não é possível atualizar uma tabela sem parametos");
  } else {
    let setCondition = "";
    const whereValues = getKeysValues(condition);
    const whereCondition = getWhereCondition(whereValues);
    for (let i = 0; i < values.keys.length; i++) {
      setCondition += `${values.keys[i]} = ?`;
      if (i < values.keys.length - 1) setCondition += ",";
    }
    return await execute(`UPDATE ${table} SET ${setCondition} WHERE ${whereCondition}`, [...values.values, ...whereValues.values]);
  }
}
