// want to run the code when the api is down or every month
import run from "run_in_terminal"
const cron = require("node-cron");
// let shell = require("shelljs");

cron.schedule("* * 15 * *", function(){
     console.log("scheduler running....");
     run();
});

