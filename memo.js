//tworze tablice kolorów po dwa każdy bo tak ma losować
let cardsColors=['yellow', 'yellow', 'blue', 'blue', 'pink', 'pink','red', 'red','indigo','indigo','violet','violet','black','black', 'green','green'];

let cards = document.querySelectorAll('div')
//zamieniam node list na tablice
cards = [...cards];

//karta która jest odsłonięta
let activeCard="";

//para która jest odsłonięta
let activePair=[];

//ile par jest w sumie
let cardPairs=cards.length/2;
let cardResult = 0;



//definiuje funkcje do add event listenera
const clickCard = function(){
    //umieszczam w active card info co klikneliśmy i zdejmuje klase 
    activeCard=this;
    activeCard.classList.remove('on');
    //pierwsze kliknięcie
    if(activePair.length === 0){
        activePair[0] = activeCard;
        return
    }
   
    //drugie kliknięcie
    else{
        //blokujemy możliwośc kliknięcia
        cards.forEach(function(card){
        card.removeEventListener('click',clickCard)
        activePair[1]= activeCard;
        //wygrana
       setTimeout(function(){
        if (activePair[0].className === activePair[1].className) {
            activePair.forEach(card => card.classList.add("off"))
            //dodaje odgagniętą pare
            cardResult++;
            //sprawdzam koniec gry
            if(cardResult== cardPairs){
                const endTime = new Date().getTime();
                 const gameTime = (endTime - startTime) / 1000
                 alert (`Twój czas to ${gameTime} sekund`)
                location.reload();
            }
            
        }
        //przegrana
        else{
            console.log('przegrana')
            activePair.forEach(card => card.classList.add('on'))
        }
        //resetuje zmienne
        activePair.length=0;
        activeCard='';
        cards.forEach(card => card.addEventListener('click', clickCard))
       }, 1000)
           
            } )
        
        
    }
};


        


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
