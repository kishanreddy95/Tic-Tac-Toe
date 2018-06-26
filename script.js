var ticTacToe = {
    values: ['-','-','-','-','-','-','-','-','-'],
    userChance: true          
}

var controller = {
    whichUser: function() {
        ticTacToe.userChance = !ticTacToe.userChance;
    },
    userMove: function(id) {
       var arr = ticTacToe.values;
       var item = document.getElementById(id);
       if(item.innerHTML == "") {
            if(ticTacToe.userChance == true) {
                item.innerHTML = "X";
                this.whichUser();
                arr.splice(id, 1, "X");       
            } else {
                item.innerHTML = "O";
                this.whichUser();   
                arr.splice(id, 1, "O"); 
            }    
        }    
    }  
}
