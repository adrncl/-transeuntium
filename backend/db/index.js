import mongoose from "mongoose";
import "dotenv/config";

const { DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
    process.env;

mongoose.connect(
    `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URL}/${DATABASE_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
// .then(() => {
//     // Promise block that can be used to rename collections
//     console.log("connected");

//     // Access the underlying database object provided by the MongoDB driver.
//     let dbt = mongoose.connection.db;

//     // Rename the `test` collection to `foobar`
//     return dbt
//         .collection("go-lakeshore-east-line")
//         .rename("go-lakeshore-east-lines");
// })
// .then(() => {
//     console.log("rename successful");
// })
// .catch((e) => {
//     console.log("rename failed:", e.message);
// });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error:"));
db.once("open", function () {
    console.log(`You are now connected to: ${DATABASE_NAME}`);
});