import mongoose from "mongoose";
import "dotenv/config";
// import { stationModel } from "../models/stations.model.js";

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
//     // return dbt.collection("go-station-points").rename("station-points");

//     // const collection = dbt.collection("go-station-points");

//     // const query = { directors: "Barbra Streisand" };

//     // const distinctValues = collection.distinct("stationType");

//     // distinctValues.then(() => {
//     //     console.log(distinctValues);
//     // });

//     // console.log(distinctValues);

//     stationModel.find().distinct("serviceType", function (error, ids) {
//         // console.log(ids);
//         let arr = [];
//         ids.forEach((distinctVal) => {
//             let fullsplitstring = distinctVal.split(", ");

//             fullsplitstring.forEach((indiv) => {
//                 if (!arr.includes(indiv)) arr.push(indiv);
//             });
//         });

//         console.log(arr.sort((a, b) => a.localeCompare(b)));
//         // ids is an array of all ObjectIds
//     });
// })
// .then(() => {
//     console.log("successful");
// })
// .catch((e) => {
//     console.log("failed:", e.message);
// });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error:"));
db.once("open", function () {
    console.log(`You are now connected to: ${DATABASE_NAME}`);
});
