
var list_ru = ru.split(' ')
var list_en = en.split(' ')
console.log(list_en)
document.getElementById('text').innerHTML = list_ru.pop()
// var stringEnThree = list_en.splice(-3).join(' ')

var error = 0
var right = 0

document.getElementById('right').innerHTML = "RIGHT: " + right + ' |'
document.getElementById('error').innerHTML = " ERROR: " + error 


//================================================================
// this click on the button named "Go"
function foo() {
    if (field.input.value.length == 0){ // checking on empty input
        pass
    }

    if (typeof list_ru[0] === 'undefined') {
        checking()
        alert('the end')
    }else{
        document.getElementById('text').innerHTML = list_ru.pop()
        checking()
    }
}
// this click on the button named "Go"
//================================================================


//=================================================================
// function to check input(data) user for correctness
function checking() {
    toad = field.input.value
    var stringEnThree = list_en.splice(-3).join(' ')
    if (toad == stringEnThree) {
        right += 1
        document.getElementById('right').innerHTML = "RIGHT: " + right + ' |'
    
    }else{
        error += 1
        document.getElementById('error').innerHTML = " ERROR: " + error 
    }
    field.input.value = ''
}
// function to check input(data) user for correctness
//==================================================================