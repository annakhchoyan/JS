let playerSymbol = "X";
let gameEnded = false;

let winPos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

for(let i = 1; i <= 9; ++i) {
    document.getElementById(i.toString()).addEventListener(
        "click",
        function() {
            if(this.innerHTML === "" && !gameEnded) {
                this.innerHTML = playerSymbol;
                this.classList.add(playerSymbol.toLowerCase());
                
                //ստուգում ենք՝ խաղացողը հաղթել է, թե ոչ
                checkWin();

                //փոխել հաջորդ սիմվոլը
                if(playerSymbol === "X") {
                    playerSymbol = "O";
                } else {
                    playerSymbol = "X";
                }

            }
        }
    );
}

function checkWin() {
    for(let i = 0; i < winPos.length; ++i) {
        if( document.getElementById(winPos[i][0]).innerHTML === playerSymbol && 
            document.getElementById(winPos[i][1]).innerHTML === playerSymbol && 
            document.getElementById(winPos[i][2]).innerHTML === playerSymbol) {
                document.getElementById(winPos[i][0]).classList.add("win");
                document.getElementById(winPos[i][1]).classList.add("win");
                document.getElementById(winPos[i][2]).classList.add("win");
                gameEnded = true;

                setTimeout(function() {
                    if(playerSymbol === "X") {
                        alert("O WINS!");
                    } else {
                        alert("X WINS!");
                    }
                }, 500);
            }
    }
}

//յուրաքանչյուր անգամ, երբ խաղացողը սեղմում է cell֊ին
document.getElementById("reset").addEventListener("click", function() {
    for(let i = 1; i <= 9; ++i) {
        document.getElementById(i.toString()).innerHTML = "";
        document.getElementById(i.toString()).classList.remove("X");
        document.getElementById(i.toString()).classList.remove("O");
        document.getElementById(i.toString()).classList.remove("win");
        gameEnded = false;
    }

});

