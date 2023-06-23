function greet() {
    console.log("Hello, " + this.name);
  }
  
  const person = {
    name: "Alice",
    greet: greet
  };
  
  const anotherPerson = {
    name: "Bob"
  };
  
  person.greet(); // Output: Hello, Alice
  greet(); // Output: Hello, undefined
  person.greet.call(anotherPerson); // Output: Hello, Bob
  