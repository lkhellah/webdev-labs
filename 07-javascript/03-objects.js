let result = {};

const insertItem = (key, value) => {
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  delete result[key];
  return key;
};

const lookupItem = (key) => {
  return key in result ? result[key] : "Item does not exist";
};

const printItems = () => {
  return Object.keys(result).join(", ");
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
