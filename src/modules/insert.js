import { getKeysValues } from "../utils.js";

export async function insertOne(table, params) {
  const values = getKeysValues(params);
  return await execute(`INSERT INTO ${table} (${values.keys}) VALUES (${values.keys.map(() => "?").join(", ")})`, values.values);
}

export async function insertMany(table, params) {
  const values = getKeysValues(params[0]);
  const arrayValues = [];
  params.forEach((param) => {
    const values = getKeysValues(param);
    arrayValues.push(values.values);
  });

  return await execute(`INSERT INTO ${table} (${values.keys}) VALUES ?`, [arrayValues]);
}
