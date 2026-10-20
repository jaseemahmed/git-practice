const greet = (name = "Guest") => {
  return `Hello, ${name}!`;
};

const label = "World";
console.log(greet(label));
console.log(greet());
