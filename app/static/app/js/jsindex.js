
var list_ru = ru.split(' ')
var list_en = en.split(' ')

document.getElementById('text').innerHTML = list_ru.pop()

var error = 0
var right = 0

document.getElementById('right').innerHTML = "RIGHT: " + right + ' |'
document.getElementById('error').innerHTML = " ERROR: " + error 

var list_but = stackbut.split(' ')
var last_ten = list_but.splice(-10)

document.getElementById('0').value = last_ten[0]
document.getElementById('1').value = last_ten[1]
document.getElementById('2').value = last_ten[2]
document.getElementById('3').value = last_ten[3]
document.getElementById('4').value = last_ten[4]
document.getElementById('5').value = last_ten[5]
document.getElementById('6').value = last_ten[6]
document.getElementById('7').value = last_ten[7]
document.getElementById('8').value = last_ten[8]
document.getElementById('9').value = last_ten[9]

function addElem(a) {
    var obj = document.getElementById(a).value
    var Onclick = field.input.value += ' ' + obj
    var amount_field = Onclick.split(' ').length
    if (amount_field > 3) {
        document.getElementById("t").disabled = false;
    }
    if (amount_field > 4) {
        document.getElementById("t").disabled = true;
    }
}
//================================================================
// this click on the button named "Go"
function foo() {


    if (field.input.value.length == 0){ // checking on empty input
        pass
    }

    if (typeof list_ru[0] === 'undefined') {
        checking()
        alert('the end')
        location.reload()
    }else{
        document.getElementById('text').innerHTML = list_ru.pop()
        checking()
    }
    dellValueFromField() 
}
// this click on the button named "Go"
//================================================================


//=================================================================
// function to check input(data) user for correctness
function checking() {
    // dellValueFromField()
    toad = field.input.value
    var stringEnThree = list_en.splice(-3).join(' ')
    if (toad.replace(/\s/g, '') == stringEnThree.replace(/\s/g, '')) {
        right += 1
        document.getElementById('right').innerHTML = "RIGHT: " + right + ' |'
    
    }else{
        error += 1
        document.getElementById('error').innerHTML = " ERROR: " + error 
    }
    field.input.value = ''

    var last_ten = list_but.splice(-10)
    document.getElementById('0').value = last_ten[0]
    document.getElementById('1').value = last_ten[1]
    document.getElementById('2').value = last_ten[2]
    document.getElementById('3').value = last_ten[3]
    document.getElementById('4').value = last_ten[4]
    document.getElementById('5').value = last_ten[5]
    document.getElementById('6').value = last_ten[6]
    document.getElementById('7').value = last_ten[7]
    document.getElementById('8').value = last_ten[8]
    document.getElementById('9').value = last_ten[9]
}
// function to check input(data) user for correctness
//==================================================================

var audio = document.getElementById('audio');
document.getElementById("a").addEventListener("click", function(){
if (this.checked) {
    audio.play();
    audio.muted = false;
} else {
    audio.pause();
    audio.muted = true;
    };
});

function sound(){
    document.getElementById('audio').play()
}


var OnclickList = []
function dellValueFromField() {
    var OnClick = field.input.value.split(" ")
    OnClick.pop()
    console.log(OnclickList)
    field.input.value = OnClick.join(" ")
    OnclickList.pop()
    if (OnClick.length < 4) {
        document.getElementById("t").disabled = true;
    }else if (OnClick.length == 4) {
        document.getElementById("t").disabled = false;
    }
}