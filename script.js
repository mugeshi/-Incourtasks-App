document.querySelector('#push').onclick = function(){
    // Adding validation for empty input field
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
}
