import pool from "../../connection";

async function getEmployees() {
  const sql = `select * from employees`;
  const result = await pool.query(sql); //async operation.
  console.log(result);
  const [data] = result;
  return data;
}

export { getEmployees };
