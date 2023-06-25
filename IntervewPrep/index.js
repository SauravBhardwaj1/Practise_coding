const obj = {
  property1: 'value1',
  property2: 'value2'
};

if (obj.hasOwnProperty('property1')) {
  // 'property1' exists in obj
  console.log("Object has 'property1'");
} else {
  // 'property1' does not exist in obj
  console.log("Object does not have 'property1'");
}
