function getCustomers(company?: string) {
  const companyQuery = company ? `where company = ${company}` : "";
  const sql = `select * from customers ${companyQuery}`;
  // missing handler
  // missing connection
  // missing  try & catch on our entry
  // logger
}
