// 19. Arrays & Types
let hobbies = ['Sports', 'Cookies'];

// hobbies.push(10);

// 20. Advanced Array Types

// let users: (string | number)[];
// 21. Generic Types - Alternative Array Type Declaration
let users: Array<string | number>;

users = [1, 'Max'];
users = [5, 1];

// 22. Making Sense of Tuples
let possibleResults: [number, number]; //  [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

// 23. Object Types
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cookies'],
  role: {
    description: 'Admin',
    id: 13,
  },
};

// 24. Tricky: The "Must Not Be Null" Type
let val: {} = 'is a value';

const someObj = {
  'name': 'Max',
};

let data: Record<string, number | string>;

data = {
  entry: 1,
  entry2: 'Max',
};
