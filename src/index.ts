import acorn from 'acorn';

const greetingTarget: string = "World";

console.log(`Hello ${greetingTarget}!`);

const code = `\
const msg = "Hello World!";
console.log(msg);
`;
const result = acorn.parse(code, {ecmaVersion: "latest"});
console.log(result);

console.log("Done");