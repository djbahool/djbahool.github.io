console.log("JS is loaded!");
$('button').toggleClass('blue');
let gameStarted = false;
let computerTurns = false;
let counter = 0;
let pcMoved = false;
let winner = false;
function startGame() {
    $('#start').html('Re-Start');
    $('.btTTT').html('.');
    gameStarted = true;
    computerTurns = false;
    counter = 0;
    pcMoved = false;
    winner = false;
    $('#cnt').html('Counter: '+counter);
}
function pc() {    
    counter++;
    $('#cnt').html('Counter: '+counter);    
    check();
    if ((counter===9) && (winner===false)) {
        setTimeout(function(){ alert("Lépés 9, gémóver!"); }, 100);
    } 
    if ((counter<10) && (winner===false)) {        
        computerTurns = true;
        pcMoved = false;
        pcTurns();
        //setTimeout(function(){ pcTurns(); }, counter*50);        
        check();
    }
}
function check() {
    if ((($('#bt0').html()==='X') && ($('#bt1').html()==='X') && ($('#bt2').html()==='X')) ||
        (($('#bt3').html()==='X') && ($('#bt4').html()==='X') && ($('#bt5').html()==='X')) ||
        (($('#bt6').html()==='X') && ($('#bt7').html()==='X') && ($('#bt8').html()==='X')) ||
        (($('#bt0').html()==='X') && ($('#bt3').html()==='X') && ($('#bt6').html()==='X')) ||
        (($('#bt1').html()==='X') && ($('#bt4').html()==='X') && ($('#bt7').html()==='X')) ||
        (($('#bt2').html()==='X') && ($('#bt5').html()==='X') && ($('#bt8').html()==='X')) ||
        (($('#bt0').html()==='X') && ($('#bt4').html()==='X') && ($('#bt8').html()==='X')) ||
        (($('#bt2').html()==='X') && ($('#bt4').html()==='X') && ($('#bt6').html()==='X')))    
    {
        gameStarted=false;
        winner = true;
        setTimeout(function(){ alert("Congratulation! You won the game!"); }, 100);
    }       
    if ((($('#bt0').html()==='O') && ($('#bt1').html()==='O') && ($('#bt2').html()==='O')) ||
        (($('#bt3').html()==='O') && ($('#bt4').html()==='O') && ($('#bt5').html()==='O')) ||
        (($('#bt6').html()==='O') && ($('#bt7').html()==='O') && ($('#bt8').html()==='O')) ||
        (($('#bt0').html()==='O') && ($('#bt3').html()==='O') && ($('#bt6').html()==='O')) ||
        (($('#bt1').html()==='O') && ($('#bt4').html()==='O') && ($('#bt7').html()==='O')) ||
        (($('#bt2').html()==='O') && ($('#bt5').html()==='O') && ($('#bt8').html()==='O')) ||
        (($('#bt0').html()==='O') && ($('#bt4').html()==='O') && ($('#bt8').html()==='O')) ||
        (($('#bt2').html()==='O') && ($('#bt4').html()==='O') && ($('#bt6').html()==='O')))    
    {
        gameStarted=false;
        winner = true;
        setTimeout(function(){ alert("Computer won :-("); }, 100);
    }
}
function putX0() {
    if ($('#bt0').html()==='.' && gameStarted && counter<9) {
        $('#bt0').html('X');
        pc();
    }
}
function putX1() {
    if ($('#bt1').html()==='.' && gameStarted && counter<9) {
        $('#bt1').html('X');
        pc();
    }
}
function putX2() {
    if ($('#bt2').html()==='.' && gameStarted && counter<9) {
        $('#bt2').html('X');
        pc();
    }
}
function putX3() {
    if ($('#bt3').html()==='.' && gameStarted && counter<9) {
        $('#bt3').html('X');
        pc();
    }
}
function putX4() {
    if ($('#bt4').html()==='.' && gameStarted && counter<9) {
        $('#bt4').html('X');
        pc();
    }
}
function putX5() {
    if ($('#bt5').html()==='.' && gameStarted && counter<9) {
        $('#bt5').html('X');
        pc();
    }
}
function putX6() {
    if ($('#bt6').html()==='.' && gameStarted && counter<9) {
        $('#bt6').html('X');
        pc();
    }
}
function putX7() {
    if ($('#bt7').html()==='.' && gameStarted && counter<9) {
        $('#bt7').html('X');
        pc();
    }
}
function putX8() {
    if ($('#bt8').html()==='.' && gameStarted && counter<9) {
        $('#bt8').html('X');
        pc();
    }
}
function pcTurns() {
    if (computerTurns && gameStarted && counter<9) {
        do {
        let rnd = Math.floor(Math.random() * 10);
        switch (rnd) {
            case 0:
                if ($('#bt0').html()==='.') {
                    $('#bt0').html('O');
                    pcMoved=true;
                }
              break;
            case 1:
                if ($('#bt1').html()==='.') {
                    $('#bt1').html('O');
                    pcMoved=true;
                }
              break;
            case 2:
                if ($('#bt2').html()==='.') {
                    $('#bt2').html('O');
                    pcMoved=true;
                }
              break;
            case 3:
                if ($('#bt3').html()==='.') {
                    $('#bt3').html('O');
                    pcMoved=true;
                }
              break;
            case 4:
                if ($('#bt4').html()==='.') {
                    $('#bt4').html('O');
                    pcMoved=true;
                }
              break;
            case 5:
                if ($('#bt5').html()==='.') {
                    $('#bt5').html('O');
                    pcMoved=true;
                }
              break;
            case 6:
                if ($('#bt6').html()==='.') {
                    $('#bt6').html('O');
                    pcMoved=true;
                }
                break;
            case 7:
                if ($('#bt7').html()==='.') {
                    $('#bt7').html('O');
                    pcMoved=true;
                }
                break;
            case 8:
                if ($('#bt8').html()==='.') {
                    $('#bt8').html('O');
                    pcMoved=true;
                }
                break;            
          }
        } while (pcMoved==false);
        counter++;
        $('#cnt').html('Counter: '+counter);
    }
}
$('#start').click(startGame);
$('#bt0').click(putX0);
$('#bt1').click(putX1);
$('#bt2').click(putX2);
$('#bt3').click(putX3);
$('#bt4').click(putX4);
$('#bt5').click(putX5);
$('#bt6').click(putX6);
$('#bt7').click(putX7);
$('#bt8').click(putX8);