//number.js

function number() {
  let  div = document.createElement("div");
  div.setAttribute("id", "number");
  div.innerHTML = 1000; 
  document.body.appendChild(div);
}
  
export default number;