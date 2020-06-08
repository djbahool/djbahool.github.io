console.log("JS is loaded!");
$('button').toggleClass('blue');
function startGame() {
    $('#start').html('Re-Start');
    $('.btTTT').html('');
}
function putX() {
    if ($('.btTTT').html=='') {
        $('.btTTT').html="X";
    }
}
$('#start').click(startGame);
$('.btTTT').click(putX);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}