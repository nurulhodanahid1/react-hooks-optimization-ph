const wrappedFunction = (func) => {
    return (num) => {
       return func(num) * 2
    }
}

const addOne = (num) => {
    return num + 1;
}

console.log("1=>", addOne(2))
const addOneAndDouble = wrappedFunction(addOne)
console.log(addOneAndDouble(2))
console.log("2=>", addOne(4))