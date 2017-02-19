var OnclickList = []
document.getElementById("text").innerHTML = ru 
function dellValueFormField() {
    var OnClick = field.input.value.split(" ")
    OnClick.pop()
    field.input.value = OnClick.join(" ")
    OnclickList.pop()
}

var question = en.split(' ')
var listButtons = but.split(' ')

for (var i = 0; i < listButtons.length; i++) {
    var btn = document.createElement('input');
    var br = document.createElement('br');
    btn.id = 'b' +i;
    btn.value = listButtons[i];
    btn.type = 'button';
    btn.style.width = '160px';
    btn.style.height = '35px';
    btn.style.fontSize = '20px';
    btn.style.color = 'gray';
    btn.style.marginLeft = '10px';
    btn.style.marginTop = '10px';
    btn.onmousedown = (sound)
    if ((i - 4) %4 == 0){
        document.querySelector('body').appendChild(btn);
        document.querySelector('body').appendChild(br);
    }
    btn.addEventListener("click", function (){
        var newOnClick = field.input.value += ' ' + this.value;
        OnclickList.push(this.value)
        if (newOnClick.split(' ').join('') === question.join('')){

            alert('good')

            field.input.value = '';
            location.reload()
        }   else if (OnclickList.length >= question.length){
            alert('no')
            field.input.value = '';
            window.location.reload()

            // ajax================================

            // end ajax==================================

        }
    });
    document.body.appendChild(btn)
}
function sound(){
    document.getElementById('audio').play()
}
{/*<script>
</script>*/}