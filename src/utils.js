export function getKeysValues(params) {
  const keys = Object.keys(params);
  const values = Object.values(params);
  return { keys, values };
}

export function getWhereCondition(values) {
  let whereCondition = "";
  for (let i = 0; i < values.keys.length; i++) {
    whereCondition += `${values.keys[i]} = ?`;
    if (i < values.keys.length - 1) whereCondition += " AND ";
  }
  return whereCondition;
}
