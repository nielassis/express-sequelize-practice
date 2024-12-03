const express = require("express");
const positionsRouter = require("./routes/position");
const employeesRouter = require("./routes/employee");

const app = express();
const port = process.env.PORT || 3000;

app.use("/positions", positionsRouter);
app.use("/employees", employeesRouter);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
