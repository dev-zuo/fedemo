
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label)
}

let myObj = { 
  size: 10, 
  label: "Size 10 Object" 
}

printLabel(myObj);
