import { createPool } from "mysql";

let pool;

export const init = (host, user, password, database) => {
  try {
    pool = createPool({
      host: host,
      user: user,
      password: password,
      database: database,
    });
  } catch (error) {
    console.error("[mysql.connector][init][Error]: ", error);
    throw new Error("failed to initialized pool");
  }
};

export const execute = (query, params) => {
  try {
    if (!pool) throw new Error("Pool was not created. Ensure pool is created when running the app.");

    return new Promise((resolve, reject) => {
      pool.query(query, params, (err, results) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(results);
        }
      });
    });
  } catch (error) {
    console.error("[mysql.connector][execute][Error]: ", error);
    throw new Error("failed to execute MySQL query");
  }
};
