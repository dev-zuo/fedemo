//number.js

function number() {
  let  div = document.createElement("div");
  div.setAttribute("id", "number");
  div.innerHTML = 100; 
  document.body.appendChild(div);
}
  
export default number;