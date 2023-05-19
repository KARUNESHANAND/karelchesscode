/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    alternateMove();
    doubleLeft();
    alternatesingleMove();
    doubleRight();
    doubleLeft();
    alternatesingleMove();
    doubleRight();
    
  }
  
  function alternatesingleMove(){
     putBeeper();
     move();
     move();
     putBeeper();
     move();
  }
  
  function doubleRight() {
    turnRight();
    move();
    putBeeper();
    turnRight();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
  }
  
  
  function doubleLeft() {
    turnLeft();
    move();
    turnLeft();
    move();
  }
  
  
  function alternateMove() {
     putBeeper();
     move();
     move();
     putBeeper();
     move();
     move();
     putBeeper();
  }
  
  
  function moveTop() {
     move();
     move();
     move();
     move();
     turnLeft();
     move();
     move();
     move();
     move();
  }
  
  function moveDropdiagonal() {
     putBeeper();
     move();
     putBeeper();
     move();
     putBeeper();
     move();
     putBeeper();
     move();
     putBeeper();
  }