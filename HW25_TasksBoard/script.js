import ToDo from "./js/ToDo.js"
import InProgress from "./js/InProgress.js"
import NeedTesting from "./js/NeedTesting.js"
import Testing from "./js/Testing.js"
import Reopened from "./js/Reopened.js"
import Done from "./js/Done.js"

export const API = `https://62c4bdb47d83a75e39ffee8a.mockapi.io`;

export const participantsSelect = document.querySelector(`#taskParticipants`),
    taskForm = document.querySelector(`#createTask`),
    taskTitleInput = document.querySelector(`#taskTitle`),
    tasksTable = document.querySelector(`#tasksTable`);

export const controller = async (url, method=`GET`, obj) => {
    let options = {
        method,
        headers:{ "Content-type": "application/json" }
    };

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options);
    
    if(request.ok){
        return request.json();}
    else{ throw request.status; }
}

const TASK_STATUS = {
    0: task => new ToDo(task),
    1: task => new InProgress(task),
    2: task => new NeedTesting(task),
    3: task => new Testing(task),
    4: task => new Reopened(task),
    5: task => new Done(task)
}

// getParticipants
const getParticipants = async () => await controller(API+`/participants`);

// participantsRender
const participantsRender = async () => {
    try{
        let participants = await getParticipants();
        
        participantsSelect.innerHTML = participants
            .map(participant => `<option value="${participant.id}" ${participant.task ? `disabled` : ``}>${participant.name}</option>`)
            .join(``);

    } catch(err){
        console.log(err);
    }
}
participantsRender();

// createTask
taskForm.addEventListener(`submit`, async e=>{
    e.preventDefault();
    
    try{
        let participants = [...participantsSelect.selectedOptions]
            .map(option => {
                return {name: option.innerHTML, id: option.value};
            });

        let newTask = {
            title: taskTitleInput.value,
            participants,
            status: 0
        };

        let addedPost = await controller(API+`/tasks`, `POST`, newTask);

        new ToDo(addedPost).render();
        
        let modifiedParticipants = await Promise.all(addedPost.participants.map(participant => controller(API+`/participants/${participant.id}`, `PUT`, {task: true})));
        
        modifiedParticipants.forEach(participants => {
            let option = participantsSelect.querySelector(`option[value="${participants.id}"]`);
            option.disabled = true;
        })

        taskForm.reset();

    } catch(err){
        console.log(err);
    }
})

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