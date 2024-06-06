document.querySelector('#push').onclick = function(){
    // Adding validation for empty input field
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task");
    } else {
        // Adding a new task
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        
        // Adding delete functionality to newly added tasks
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        // Adding functionality to cross off a completed task
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        //clearing the input field after each entry
        document.querySelector("#newtask input").value = "";
    }
}
