const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("Total time");
console.log(string, number, boolean, obj);
console.error("Error message");
console.table([
  { name: "Jeeyoung Han", birth: 1992 },
  { name: "Candice", birth: 1997 },
]);

console.dir(obj, { colors: true, depth: 2 });
console.dir(obj, { colors: true, depth: 2 });

console.time("time");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("time");

function b() {
  console.trace("Trace where error happened");
}

function a() {
  b();
}
a();

console.timeEnd("Total time");
