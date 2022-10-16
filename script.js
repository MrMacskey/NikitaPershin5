function calculate(){
    const checker = /^[0-9][0-9]*$/;
    let form = document.forms.calculate;
    let price = form.elements['price'].value;
    let count = form.elements['count'].value;
    if(!count.match(checker)){
        alert("Неверные значения");
    }
    let result = document.getElementById("result");
    let tot = price * count;
    result.innerHTML = "Общая цена: " + tot;
}
window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("Putter");
    b.addEventListener("click", calculate);
  });