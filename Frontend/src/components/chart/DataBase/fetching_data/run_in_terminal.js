

const { exec } = require("child_process");

exec("curl -O https://www.eia.gov/dnav/pet/hist_xls/MCRFPUS1m.xls", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
