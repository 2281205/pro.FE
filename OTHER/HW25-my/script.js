const API = `https://62c4bdb47d83a75e39ffee8a.mockapi.io`,
    participantsList= document.querySelector(`#taskParticipants`),
    taskForm = document.querySelector(`#createTask`),
    taskTitleInput = document.querySelector(`#taskTitle`),
    tasksTable = document.querySelector(`#tasksTable`);

//https://62c4bdb47d83a75e39ffee8a.mockapi.io/participants
const controller = async (url, method=`GET`, obj) => {
    let options = { method, headers:{"Content-type": "application/json" } };

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options);
    
    if(request.ok){return request.json(); } 
        else{ throw request.status; }
}

// getParticipants
const getParticipants = async () => await controller(API+`/participants`);

const participantsRender = async () => {
    try{
        let participants = await getParticipants();
        console.log(participants)
        participantsList.innerHTML = participants
            .map(participant => `<option value="${participant.id}" ${participant.task ? `disabled` : ``}>${participant.name}</option>`)
            .join(``);

    } catch(err){
        console.log(err);
    }
}

participantsRender ()

const renderTask = () => {
    let taskBlock = document.createElement(`div`);
    taskBlock.className = `card`;
    taskBlock.innerHTML = `<h3>${this.title}</h3><p>Participants: ${this.participants.map(participant => participant.name).join(`, `)}</p>`;
    return taskBlock;
}


// createTask
taskForm.addEventListener(`submit`, async e=>{
    e.preventDefault();
    
    try{
        let participants = [...participantsList.selectedOptions]
            .map(option => {
                return {name: option.innerHTML, id: option.value};
            });
        console.log(participants)
        let newTask = {
            title: taskTitleInput.value,
            participants,
            status: 0
        };

        let addedPost = await controller(API+`/tasks`, `POST`, newTask);

        //new ToDo(addedPost).render();
        
        let modifiedParticipants = await Promise.all(addedPost.participants.map(participant => controller(API+`/participants/${participant.id}`, `PUT`, {task: true})));
        
        modifiedParticipants.forEach(participants => {
            let option = participantsList.querySelector(`option[value="${participants.id}"]`);
            option.disabled = true;
        
            taskForm.reset();
        })


    } catch(err){
        console.log(err);
    }
})


// createTask

// renderTasks
const renderTasks = async() => {
    try{
        let tasks = await controller(API+`/tasks`);
        tasks.forEach(task => TASK_STATUS[task.status](task).render());
    } catch(err){
        console.log(err);
    }
}
renderTasks();
// renderTasks
