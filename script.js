

var GameBoard = (function() {
  
    let _board = ['-','-','-','-','-','-','-','-','-'];
    return {
      DisplayGameboard: function() {
        for(let i=0;i<_board.length;i++){

            let div = document.getElementById(i);
            if(i === Number(div.id)){
                div.textContent = 'X';
               // _board[i]='X';
            
            }
        }
        console.log(_board);
      },
      ModifyGameboard:function(index){ //Index?
          
    },
    ResetGameboard: function(){
            _board = ['x','-','-','-','-','-','-','-','-'];
            console.log(_board)
    }
    };
  })();


  var DisplayController = (function() {
   
  
    return {
      DisplayGameboard: function() {
        
        
      }
    };
  })();


  GameBoard.DisplayGameboard();
  GameBoard.ResetGameboard();

