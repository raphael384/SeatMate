axios.get('https://90.105.108.82:3001/data')
  .then(response => {
    // console.log(response.data);

    
    for (i = 0; i < response.data.length; i++) {
        values = response.data;
        document.getElementById(`${i+1}`).children[0].innerHTML = values[i].owner;
        if (values[i].owner.length > 5 || window.innerWidth < 980) {
          document.getElementById(`${i+1}`).children[0].style.fontSize = "18px";
        } 
        else if (values[i].owner.length > 5 || window.innerWidth < 800) {
          document.getElementById(`${i+1}`).children[0].style.fontSize = "13px";
        } else {
          document.getElementById(`${i+1}`).children[0].style.fontSize = "";
        }
    }
})
  .catch(error => {
    console.log(error);
});