// 13. Working with Types & Exploring Built-in Types
let userName: string;
// .....
userName = 'Max';

// 15. Type Inference vs Type Assignment
let lastName: string;
let userAge = 38;
// .....
lastName = 'Miller';
// userAge = '34';

// 16. Assigning Types To Function Parameters
function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add('8');
