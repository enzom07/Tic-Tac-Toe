const Player = (name,mark) => {
 
  let currentplayer = false;
  const getName  = () => name;
  const getMark  = () => mark;
  const getcurrentPLayer  = () => currentplayer;
  const setCurrentPLayer = () => {
    if(currentplayer)
      currentplayer = false;
    else
      currentplayer = true;
  };

 

  return {getName,getMark,getcurrentPLayer,setCurrentPLayer};
};




var GameBoard = (function() {
  
    let _board = ['-','-','-','-','-','-','-','-','-'];
    let _verif = false;
    return {
      VerifyGameboard: function(id) {
          if(_board[id] === '-'){

              return(true);
          }
          else{
            return(false);
          }           /* let div = document.getElementById(i);
            if(i === Number(div.id)){
                div.textContent = 'X';
               // _board[i]='X';
            
            }*/
        
        //console.log(_board);
      },
      ModifyGameboard:function(id,mark){
        _board[id] = mark;
        //console.log(_board);
          
    },
    checkWinner:function(mark){
      
      if(_board[0] === _board[1] && _board[1] === _board[2] && _board[2] === mark ){
        _verif = true;
      }
      else if(_board[3] === _board[4] && _board[4] === _board[5] && _board[5] === mark){
        _verif = true;
      }
      else if(_board[6] === _board[7] && _board[7] === _board[8] && _board[8] === mark){
        _verif = true;
      }
      else if(_board[0] === _board[3] && _board[3] === _board[6] && _board[6] === mark){
        _verif = true;
      }
      else if(_board[1] === _board[4] && _board[4] === _board[7] && _board[7] === mark){
        _verif = true;
      }else if(_board[2] === _board[5] && _board[5] === _board[8] && _board[8] === mark){
        _verif = true;
      }
      else if(_board[6] === _board[7] && _board[7] === _board[8] && _board[8] === mark){
        _verif = true;
      }
      else if(_board[0] === _board[4] && _board[4] === _board[8] && _board[8] === mark){
        _verif = true;
      }
      else if(_board[2] === _board[4] && _board[4] === _board[6] && _board[6] === mark){
        _verif = true;
      }
      return(_verif);
      
        
  },
    ResetGameboard: function(){
        _board = ['-','-','-','-','-','-','-','-','-'];
        console.log(_board);
    }
    };
  })();


  var GameController = (function() {
   
    
    return {
      InitGame: function(){

        //The input for name and mark you must do with the selections from DOM
        const player1 = Player('Enzo','X');
        const player2 = Player('Valery','O');
        player1.setCurrentPLayer();
        //console.log(player1.getcurrentPLayer());
        GameController.StartGame(player1,player2);
        //console.log(player1.getName());
      },
      StartGame: function(player1,player2){

        let div;
        const squares = document.querySelectorAll(".container > div");
        //console.log(squares);
        squares.forEach((div) => {

          div.addEventListener("click",function(){
            
            const available = GameBoard.VerifyGameboard(div.id);
            //console.log(available);
            if(available){
              if(player1.getcurrentPLayer()){
                div.textContent = player1.getMark();
                GameBoard.ModifyGameboard(div.id,player1.getMark());
                player2.setCurrentPLayer();
                player1.setCurrentPLayer();
                if( GameBoard.checkWinner(player1.getMark())){
                  console.log("El ganador es el jugador: "+player1.getName());
                  GameBoard.ResetGameboard();
                }
                
              }
              else{
                div.textContent = player2.getMark();
                GameBoard.ModifyGameboard(div.id,player2.getMark());
                player1.setCurrentPLayer();
                player2.setCurrentPLayer();
                GameBoard.checkWinner(player2.getMark());
                if( GameBoard.checkWinner(player2.getMark())){
                  console.log("El ganador es el jugador: "+player2.getName());
                  GameBoard.ResetGameboard();
                }
              }
            }
            

          });

        });


      }
      
    };
  })();

  GameController.InitGame();
  //GameBoard.DisplayGameboard();
  //GameBoard.ResetGameboard();

