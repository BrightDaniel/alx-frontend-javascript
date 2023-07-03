export default function appendToEachArrayValue(array, appendString) {
for (let value of array) {
value = appendString + value;
}

return array;
}
