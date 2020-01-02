class Greeter {
  greeting: string;

  constructor(message: string) {
      this.greeting = message;
  }

  // @validate
  greet(@required name: string) {
      return "Hello " + name + ", " + this.greeting;
  }
}

function required(...args) {
  console.log(args) // [ Greeter { greet: [Function] }, 'greet', 0 ]
  
}