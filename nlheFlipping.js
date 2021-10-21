function dealCards(){
    let cards = [2,3,4,5,6,7,8,9,"T","J","Q","K","A"];
    let suits = ["of Clubs","of Hearts","of Spades","of Diamonds"];
    let player = cards[Math.floor(Math.random() * cards.length)] + " "+suits[Math.floor(Math.random() * suits.length)]
    
    return player;
}

function dealBoard(){
    let cards = [2,3,4,5,6,7,8,9,"T","J","Q","K","A"];
    let suits = ["of Clubs","of Hearts","of Spades","of Diamonds"];
    let board = "";
    for(let i = 0; i<=3; i++){
        board = board + dealCards() + " | "
    }
    board = board + dealCards();
    return board;
}
// console.log(dealCards());
// console.log(dealBoard());

function play(){
    let playerCard1 = "";
    let playerCard2 = "";
    let board = "";
    while(true){
        playerCard1 = dealCards();
        playerCard2 = dealCards();
        if(playerCard1 != playerCard2){
            break;
        }
    }
    while(true){
        board = dealBoard();
        if(!board.includes(playerCard1) && !board.includes(playerCard2)){
            break;
        }
    }
    console.log(playerCard1+" | "+playerCard2);
    console.log("-----------");
    console.log(board);
    
}

console.log(play());