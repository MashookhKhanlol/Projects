let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector('input');

console.log("code is working");

btn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = inp.value;
    let delBtn = document.createElement("button");

    delBtn.innerText = "delete";
    ul.classList.add("delete");
    li.appendChild(delBtn);
    ul.appendChild(li);
    inp.value = "";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
})

