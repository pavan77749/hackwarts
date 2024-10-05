const cards= document.querySelectorAll(".container");
cards.forEach((card) => {
    card.addEventListener('click',()=>{
        card.classList.toggle('flipped');
    });
});