const { spawn } = require ('child_process');

const childPython = spawn("python3", ["./ProducedCrudeOilGraph.py"]);

childPython.stdout.on('data', (data) =>{
    console.log(data);
});

childPython.on('close', (code) =>{
    console.log(`Child process exited with code ${code}`);
});
