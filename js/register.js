const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function() {

    if (input.value.length < 9) {
        localStorage.setItem("name", input.value)
    window.location.href = "tables.html"
    } else {
        button.innerHTML = "Trop long !";
    }
    
});