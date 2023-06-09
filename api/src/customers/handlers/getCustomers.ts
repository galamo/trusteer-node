import pool from "../../connection";

async function getCustomers(company?: string) {
  const companyQuery = company ? `where company = ${company}` : "";
  const sql = `select * from customers ${companyQuery}`;
  const result = await pool.query(sql); //async operation.
  const [data] = result;
  return data;
  // missing handler
  // missing connection
  // missing  try & catch on our entry
  // logger
}

async function getCustomerById(id: number) {
  const sql = `select * from customers where id = ?`;
  const result = await pool.query(sql, [id]); //async operation.
  const [data] = result;
  return data;
  // missing handler
  // missing connection
  // missing  try & catch on our entry
  // logger
}

export { getCustomers, getCustomerById };
