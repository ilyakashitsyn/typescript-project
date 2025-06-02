// 26. Working with Enums
enum Role {
  Admin,
  Editor,
  Guest,
}

let userRole: Role = Role.Admin; // 0 => Admin, 1 => Guest

// ...

userRole = Role.Editor;

// 27. Being Specific With Literal Types
let newUserRole: 'admin' | 'editor' | 'guest' | 'reader' = 'admin';
newUserRole = 'guest';

// 28. Type Aliases & Custom Types
type MyNumber = number;
type NewRole = 'admin' | 'editor' | 'guest' | 'reader';

type User = {
  name: string;
  age: number;
  role: NewRole;
  permissions: string[];
  greet();
};

function access(role: NewRole) {
  // ...
}
