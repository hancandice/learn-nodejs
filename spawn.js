const spawn = require("child_process").spawn;

const process = spawn("python3", ["test.py"], { shell: true });

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.stderr.on("data", function (data) {
  console.error(data.toString());
});
