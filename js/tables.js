
const tables = document.querySelectorAll('.first, .middle, .second');


for (const element of tables) {
    element.addEventListener('click', event => {

        if (localStorage.getItem("autho") != 'false') {
                axios.post("https://90.105.108.82:3001/table-request", {
                name: localStorage.getItem("name"),
                position: element.id
            }).then(response => {
            
            
                console.log(`Le serveur a repondu a la requete de placer ${localStorage.getItem("name")} a la place numero ${element.id} avec la reponse "${response.data}"`);
                element.children[0].innerHTML = localStorage.getItem("name");
                 if (window.innerWidth < 980) {
                    element.children[0].style.fontSize = "18px";
                 }
                 if (window.innerWidth < 800) {
                    element.children[0].style.fontSize = "13px";
                 }
                

                localStorage.setItem("autho", false)

                element.style.backgroundColor = "#aee660";

                setTimeout(function() {
                element.style.backgroundColor = "";
                }, 500);
            })
            .catch(error => {
                element.style.backgroundColor = "#f56d47";

                setTimeout(function() {
                element.style.backgroundColor = "";
                }, 500);
            })
        } else {
            element.style.backgroundColor = "#f56d47";

                setTimeout(function() {
                element.style.backgroundColor = "";
                }, 500);
        }

        

        
    });
    


}

