export function slideRight():void{
    let firstCard = document.querySelectorAll('.card')[0];
    const slideContainer:HTMLElement = document.querySelector(".slide")!;
    slideContainer.classList.add("slide-right");

    setTimeout(()=>{
        slideContainer.classList.remove("slide-right");
        slideContainer.insertAdjacentElement('beforeend', firstCard);
    },300);
}

export function slideLeft():void{
    const slideContainer:HTMLElement = document.querySelector(".slide")!;
    const cards:NodeListOf<Element> = document.querySelectorAll(".card");
    const lastCard:Element = cards[cards.length - 1];
    
    slideContainer.classList.add("slide-left");

    setTimeout(()=>{
        slideContainer.classList.remove("slide-left");
        slideContainer.insertAdjacentElement('afterbegin', lastCard);
    },300)
}