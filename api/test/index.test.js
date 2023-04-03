const { expect } = require("chai");
const mysql = require("mysql2/promise");
// const faker = require("faker");

require("dotenv").config();
const { HOST, PORT, DATABASE, DBUSER, PASSWORD } = process.env;

describe("Api - Northwind", function () {
  this.timeout(5000);
  let pool = null;
  let insertedId = null;
  before(() => {
    pool = mysql.createPool({
      host: HOST,
      port: +PORT,
      user: DBUSER,
      password: PASSWORD,
      connectionLimit: 20,
      database: DATABASE,
    });
  });
  it("Unit Test Example", function () {
    const result = sum(1, 2);
    expect(result).equal(3);
  });
  it("GET /customers/:id", async function () {
    const customer = getCustomer();

    const query = `INSERT INTO northwind.customers (company, last_name, first_name) VALUES (?,?,?);`;

    const result = await pool.query(query, [
      customer.company,
      customer.lastName,
      customer.firstName,
    ]);
    insertedId = result[0].insertId;
    const customerResultApi = await fetch(
      `http://localhost:3200/customers/${insertedId}?token=1234`
    );
    const [customerResult] = await customerResultApi.json();
    expect(customerResult.first_name).equal(customer.firstName);
    expect(customerResult.last_name).equal(customer.lastName);
    expect(customerResult.company).equal(customer.company1);
  });

  after(async () => {
    await pool.query(`DELETE from customers where id = ?`, insertedId);
  });
});

function sum(a, b) {
  return a + b;
}

function getCustomer() {
  return {
    firstName: `firstName${Math.ceil(Math.random() * 999999)}`,
    lastName: `lastName${Math.ceil(Math.random() * 999999)}`,
    company: `company${Math.ceil(Math.random() * 999999)}`,
  };
}
