//tworze tablice kolorów po dwa każdy bo tak ma losować
let cardsColors=['yellow', 'yellow', 'blue', 'blue', 'pink', 'pink','red', 'red','indigo','indigo','violet','violet','black','black', 'green','green'];

let cards = document.querySelectorAll('div')
//zamieniam node list na tablice
cards = [...cards];



//funkcja losująca kolory
const changeColor = function(){
    //tworze funkcje dla każdego elementu tablicy
    cards.forEach(function(card){
    //losuje randomowy kolor z tablicy, florr żeby zaokrąglić
        const positionColor = Math.floor(Math.random()*
        cardsColors.length);
    //dodaje każdemu elementowi klase dzięki której będzie miał kolor
        card.classList.add(cardsColors[positionColor]);
    //usuwam dany kolor który został już wykorzystany 
        cardsColors.splice(positionColor,1);
    })

    //ukrywam elementy które losujemy 
    setTimeout(function(){
        cards.forEach(function(card){
            card.classList.add('on')
        //funkcja nasluchująca klikanie w karty
        card.addEventListener('click', clickCard)
        })
    },2000)

}
 changeColor()
