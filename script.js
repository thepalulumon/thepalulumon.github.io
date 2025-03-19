const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");
button.addEventListener("click", function(){
    if(!input.value) return;
    const li = document.createElement("li");
    list.appendChild(li);
    li.innerText = input.value;
    input.value = "";
})