// 29. Function Return Value Types
function add(a: number, b: number) {
  return a + b;
}

// 30. The "void" Type
function log(message: string) {
  console.log(message);
}

// 31. The "never" Type
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logged = logAndThrow('Hi, dude');

// 32. Functions As Types
const logMsg = (msg: string) => {
  console.log(msg);
};

function performJob(cb: (msg: string) => void) {
  // ...
  cb('Job done!');
}

performJob(log);

type NewUser = {
  name: string;
  age: number;
  greet: () => string;
};

let newuser: NewUser = {
  name: 'Max',
  age: 39,
  greet() {
    console.log('Hello there!');
    return this.name;
  },
};

newuser.greet();
