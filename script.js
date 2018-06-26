var ticTacToe = {
    values: ['-','-','-','-','-','-','-','-','-'], // array to keep track of userMoves
    userChance: true       // To track current user's turn   
}

var View = {
    userWinner: function() {
      var arr = ticTacToe.values;
      var firstRow = arr[0] == "X" && arr[1] == "X" && arr[2] == "X";
      if(arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X' || 
         arr[4] == 'X' && arr[5] == 'X' && arr[6] == 'X' || 
         arr[7] == 'X' && arr[8] == 'X' && arr[9] == 'X' || 
         arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X' || 
         arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X' ||
         arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X' || 
         arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X' || 
         arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X')  {
            var displayWinner = document.getElementById("winner");
            displayWinner.innerHTML = "User 1 wins";
      } else if(arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O' || 
                arr[4] == 'O' && arr[5] == 'O' && arr[6] == 'O' || 
                arr[7] == 'O' && arr[8] == 'O' && arr[9] == 'O' || 
                arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O' || 
                arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O' ||
                arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O' || 
                arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O' || 
                arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O') {
                    var displayWinner = document.getElementById("winner");
                    displayWinner.innerHTML = "User 2 wins";
      } 
    }
}





var controller = {
    whichUser: function() { //Change user Turns
        ticTacToe.userChance = !ticTacToe.userChance;
    },
    userMove: function(id) { //To update DOM with user Clicks/Moves
       var arr = ticTacToe.values;
       var item = document.getElementById(id);
       if(item.innerHTML == "") { //To prevent change if a move is made at that position
            if(ticTacToe.userChance == true) {
                item.innerHTML = "X";
                this.whichUser();
                arr.splice(id, 1, 'X');
                View.userWinner();       
            } else {
                item.innerHTML = "O";
                this.whichUser();   
                arr.splice(id, 1, 'O'); 
                View.userWinner();
            }    
        }    
    }
}
