let button1 = document.getElementsByClassName("plusLogo");
let button2 = document.getElementsByClassName("minusLogo");
let block = document.getElementsByClassName("hiddenBlock");

for (let i = 0; i < (button1.length); i++) {
    button1[i].addEventListener("click", function() {
        button1[i].style.display = "none";
        button2[i].style.display = "block";
        block[i].style.display = "block";
    });

    button2[i].addEventListener("click", function() {
        button2[i].style.display = "none";
        button1[i].style.display = "block";
        block[i].style.display = "none";
    });
};
