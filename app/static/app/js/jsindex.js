
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
    var onClick = document.getElementById(a).value
    field.input.value += ' ' + onClick
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
}
// this click on the button named "Go"
//================================================================


//=================================================================
// function to check input(data) user for correctness
function checking() {
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
