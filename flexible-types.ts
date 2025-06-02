// 17. The "any" Type
let age: any = 36;
// ...
age = '37';
age = false;
age = {};
age = [];

// 18. Understanding Union Types  ← типа or
let newAge: string | number | boolean = 36;

newAge = '37';
newAge = false;
// newAge = {}; // потому что object
// newAge = []; // потому что array
