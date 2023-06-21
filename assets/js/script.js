//image
document.querySelector("#pokemon").addEventListener("click", event => {
    event.target.classList.toggle("caught");
    event.target.src = event.target.classList.contains("caught") ? "assets/img/pokeball.gif" : "assets/img/025.gif";
});

//stickers
let stickersAddToCart = () => {
    let cart  = document.querySelector("#stickers-cart");
    let total = 0, max = 10;

    document.querySelectorAll(".stickers-input").forEach(element => {
        total += Number(element.value);
    });
    
    if (!total) {
        cart.innerHTML = "";
    } else if (total === 1) {
        cart.innerHTML = "You have selected 1 sticker.";
    } else {
        cart.innerHTML = total <= 10 ? "You have selected "+total+" stickers." : "Sorry, you can select a maximum of "+max+" stickers.";
    }
};

document.querySelector("#stickers-addToCart").addEventListener("click", stickersAddToCart);

document.querySelectorAll(".stickers-input").forEach(element => {
    element.addEventListener("change", stickersAddToCart);
});

//password
document.querySelector("#password-check").addEventListener("click", () => {
    let feedbackImg = document.querySelector("#password-feedback-img");
    let feedbackTxt = document.querySelector("#password-feedback-txt");
    let password    = document.querySelector(".password-input:nth-child(1)").value + 
                      document.querySelector(".password-input:nth-child(2)").value + 
                      document.querySelector(".password-input:nth-child(3)").value;

    if (password === "911") {
        feedbackImg.classList.add("released");
        feedbackImg.src       = "assets/img/026.gif";
        feedbackTxt.innerHTML = 'Pokémon #1 found : Raichu released!';
    } else if (password === "714") {
        feedbackImg.classList.add("released");
        feedbackImg.src       = "assets/img/172.gif";
        feedbackTxt.innerHTML = 'Pokémon #2 found : Pichu released!';
    } else {
        feedbackTxt.innerHTML = 'Wrong password. Try again.';
    }    
});

document.querySelectorAll(".password-input").forEach(element => {
    element.addEventListener("change", () => {
        let feedbackImg = document.querySelector("#password-feedback-img");
        let feedbackTxt = document.querySelector("#password-feedback-txt");

        feedbackImg.classList.remove("released");        
        feedbackImg.src       = "assets/img/pokeball.gif";
        feedbackTxt.innerHTML = "";
    });
});
