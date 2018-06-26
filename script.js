var ticTacToe = {
    values: ['-','-','-','-','-','-','-','-','-'],
    userChance: true          
}

var controller = {
    whichUser: function() {
        ticTacToe.userChance = !ticTacToe.userChance;
    },
    userMove: function(id) {
       var item = document.getElementById(id);
       if(item.innerHTML == "") {
            if(ticTacToe.userChance == true) {
                item.innerHTML = "X";
                this.whichUser();
                             
            } else {
                item.innerHTML = "Y";
                this.whichUser();
                
            }    
        }    
    },
    userWinner: function() {
        var arr = ticTacToe.values;
        for(var i = 0; i < arr; i++) {

        }
    }
}
