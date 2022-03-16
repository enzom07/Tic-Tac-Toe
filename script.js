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


var DisplayController = (function() {
  
  
  const _squares = document.querySelectorAll(".container > div");
  let _div;
  return {
    InitDisplay: function() {

      _squares.forEach((_div) => {

        _div.textContent = "";

      });
    },

    ChangeDisplay: function(div,mark) {
      div.textContent = mark;
      console.log("Le cambio a esta marca:"+mark);
      console.log(div);
    }
  };
})();


var GameBoard = (function() {
  
    let _board = ['-','-','-','-','-','-','-','-','-'];
    
    return {
      VerifyGameboard: function(id) {
          if(_board[id] === '-'){

              return(true);
          }
          else{
            return(false);
          }      
      },
      ModifyGameboard:function(id,mark){
        _board[id] = mark;
        //console.log(_board);
          
    },
    checkWinner:function(mark){

      verif = false;
      if(_board[0] === _board[1] && _board[1] === _board[2] && _board[2] === mark && mark!='-' ){
        verif = true;
      }
      else if(_board[3] === _board[4] && _board[4] === _board[5] && _board[5] === mark && mark!='-' ){
        verif = true;
      }
      else if(_board[6] === _board[7] && _board[7] === _board[8] && _board[8] === mark && mark!='-' ){
        verif = true;
      }
      else if(_board[0] === _board[3] && _board[3] === _board[6] && _board[6] === mark && mark!='-' ){
        verif = true;
      }
      else if(_board[1] === _board[4] && _board[4] === _board[7] && _board[7] === mark && mark!='-' ){
        verif = true;
      }else if(_board[2] === _board[5] && _board[5] === _board[8] && _board[8] === mark && mark!='-' ){
        verif = true;
      }
      else if(_board[0] === _board[4] && _board[4] === _board[8] && _board[8] === mark && mark!='-' ){
        verif = true;
      }
      else if(_board[2] === _board[4] && _board[4] === _board[6] && _board[6] === mark && mark!='-' ){
        verif = true;
      }
      return(verif);
      
        
  },
    ResetGameboard: function(){
        _board = ['-','-','-','-','-','-','-','-','-'];
       // console.log(_board);
    },
    checkDraw: function(){
      let count=0;;
        for(let i=0;i<_board.length;i++){
          if(_board[i] != '-'){
            count++;
          }
        }
        if(count === 9){
          return(true);
        }
        else{
          return(false);
        }
       // console.log(_board);
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
        GameBoard.ResetGameboard();
        DisplayController.InitDisplay();
        GameController.StartGame(player1,player2);
        console.log(player1.getName());
        console.log(player2.getName());
        console.log(player1.getcurrentPLayer());
        console.log(player2.getcurrentPLayer());
      },
      StartGame: function(player1,player2){

        let div;
        const squares = document.querySelectorAll(".container > div");
       // console.log(squares);
        squares.forEach((div) => {

          div.addEventListener("click",function(){
            
            const available = GameBoard.VerifyGameboard(div.id);
            
            //Is the square is available
            if(available){
              //console.log(available);
              //If the current player es the 1
              if(player1.getcurrentPLayer()){
                DisplayController.ChangeDisplay(div,player1.getMark());
                GameBoard.ModifyGameboard(div.id,player1.getMark());
                console.log(player1.getMark());
                player2.setCurrentPLayer();
                player1.setCurrentPLayer();
                if( GameBoard.checkWinner(player1.getMark())){
                  console.log("El ganador es el jugador: "+player1.getName());
                  GameController.InitGame();
                  
                }  
                
              }
              else{
                //If the current player es the 2
                DisplayController.ChangeDisplay(div,player2.getMark());
                GameBoard.ModifyGameboard(div.id,player2.getMark());
                player1.setCurrentPLayer();
                player2.setCurrentPLayer();
                GameBoard.checkWinner(player2.getMark());
                if( GameBoard.checkWinner(player2.getMark())){
                  console.log("El ganador es el jugador: "+player2.getName());
                  GameController.InitGame();
                  
                }
              }
              if(GameBoard.checkDraw()){
                console.log("Es un empate");
                GameController.InitGame();
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

