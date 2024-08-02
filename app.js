let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".winner");

let moveO = true; 
// To track draw
let count = 0;

let winningPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [0,4,8], [2,4,6], [1,4,7], [2,5,8]];

const resetGame = () => {
    moveO = true;
    count = 0;
    enableBoxes();  
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
            if(moveO=== true) {
                box.innerText = "O";
                moveO = false;   

            } else{
                box.innerText = "X";
                moveO = true;    
            }

            // Ensure that the box doesn't change the move again
            box.disabled = true;
            count++;

            let isWinner =  checkWinner();

            if (count === 9 && !isWinner) {
                gameDraw();
            }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const checkWinner = () => {
    for(let pattern of winningPatterns){

        /*
        //if pattern is [0,1,2], it will log: 0 1 2
        console.log([pattern[0]], [pattern[1]], [pattern[2]]);

        //Log the HTML content of the boxes elements at the indices specified by the pattern array elements.
        console.log(boxes[pattern[0]].innerHTML, boxes[pattern[1]].innerHTML, boxes[pattern[2]].innerHTML);
        */

        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                showWinner(position1);
                return true;
            }

        }

    }

    
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);





    








