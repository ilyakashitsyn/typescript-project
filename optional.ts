// 38. Optional Values & TypeScript
// '?' <- optional property

function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();
generateError('An error occurred!');

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
};

// 39. Nullish Coalescing
let input = '';
let input2 = null;

const didProvideInput = input || false;
