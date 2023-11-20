class NewTask {
    #task;
    #input;
    #div;
    #p;
    #button1;
    #button2;
    #mainDiv;
    #buttonDiv;
    #element;
    #userY;
    constructor(task) {
        this.#task = task;
    }
    get add(){
        this.#mainDiv = document.createElement('div');
        this.#buttonDiv =  document.createElement('div');
        this.#mainDiv.style.maxWidth = '1120px';
        this.#mainDiv.classList.add('task')

        this.#div = document.createElement('div');
        this.#div.style.display = 'flex';
        this.#div.style.paddingLeft = '10px';

        this.#input = document.createElement('input');
        this.#input.type = 'checkbox';
        this.#input.id = 'check';
        this.#input.style.cursor = 'pointer ';
        this.#input.addEventListener('click', (e) => {this.taskCompleted(e)})

        this.#p = document.createElement('p');
        this.#p.textContent = this.#task;

        this.#button1 = document.createElement('button');
        this.#button1.innerHTML = '<img src="./assets/img/threeDots.png" alt="threeDots" class="mainImgs">';
        this.#button1.classList.add('buttonsEditMain');
        this.#button1.addEventListener('click', (e) => {this.additionalSettings(e)})
        this.#button2 = document.createElement('button');
        this.#button2.innerHTML = '<img src="./assets/img/bin.png" alt="bin" class="mainImgs" >';
        this.#button2.classList.add('buttonsEditMain');
        this.#button2.addEventListener('click', (e) => {this.bin(e)})

        this.#div.append(this.#input);
        this.#div.append(this.#p);
        this.#buttonDiv.append(this.#button1);
        this.#buttonDiv.append(this.#button2);
        this.#mainDiv.append(this.#div);
        this.#mainDiv.append(this.#buttonDiv);

        return this.#mainDiv;
    }
    additionalSettings(e){
        this.#userY = e.pageY;
        this.#element = document.querySelector('.addSett')
        if (this.#element.style.display === 'none'){
            this.#element.classList.add('addSett');
            this.#element.style.top = `${this.#userY}px`;
            this.#element.style.display = 'flex';
            this.#element.style.flexDirection = 'column';

            document.querySelector('#complete').addEventListener('click',
                (e) => {this.taskCompleted(e)})
        }else{
            this.#element.style.display = 'none';
        }
    }

    taskCompleted(e){
        if(this.#input.checked){
            this.#mainDiv.classList.add('completed');
            this.#button1.classList.add('completed');
            this.#button2.classList.add('completed');
            document.querySelector('.ready').append(this.#mainDiv)
        }else {
            this.#mainDiv.classList.remove('completed');
            this.#button1.classList.remove('completed');
            this.#button2.classList.remove('completed');
            this.#input.checked = false;
            document.querySelector('.taskList').append(this.#mainDiv)
        }
    }

    bin(e){
        document.querySelector('.bin').append(this.#mainDiv)
        this.#input.checked = true
        if (this.#mainDiv.classList.contains('completed')) {
            this.#button2.style.display = 'none';
            this.#input.style.display = 'none'
        } else{
            this.#mainDiv.classList.add('delete');
            this.#button1.classList.add('delete');
            this.#button2.classList.add('delete');
            this.#button2.style.display = 'none';
            this.#input.style.display = 'none'
        }
    }
}

let night = document.querySelector('.moon');
night.addEventListener('click', function (){
    document.querySelector('body').classList.toggle('nightMode');
    night.classList.toggle('sun')
    night.parentElement.parentElement.classList.toggle('sunSwitcher')
});
document.addEventListener("keypress", function (e) {
    if (e.code === 'Enter'){
        let task = document.querySelector('#newTask')
        if (task.value !== ''){
            let taskAdd = new NewTask(task.value)
            document.querySelector('.taskList').append(taskAdd.add)
            task.value = '';}
    }
})
let form = document.querySelector('form')
form.addEventListener('submit', function (e){
    e.preventDefault()
    let task = document.querySelector('#newTask')
    let taskAdd = new NewTask(task.value)
    document.querySelector('.taskList').append(taskAdd.add)
    task.value = '';
})

let readyTasks = document.querySelector('.compl')
readyTasks.addEventListener('click', function () {
    if (document.querySelector('.taskList').style.display !=='none') {
        document.querySelector('.taskList').style.display ='none'
        document.querySelector('.ready').style.display ='block'
        document.querySelector('.bin').style.display ='none'

    }else{
        document.querySelector('.taskList').style.display ='block'
        document.querySelector('.ready').style.display ='none'
        document.querySelector('.bin').style.display ='none'
    }

})
let unreadyTask = document.querySelector('.uncompl')
unreadyTask.addEventListener('click', function () {
    if (document.querySelector('.taskList').style.display ==='none') {
        document.querySelector('.taskList').style.display ='block'
        document.querySelector('.ready').style.display ='none'
        document.querySelector('.bin').style.display ='none'
    }
})

let bin = document.querySelector('.binIcon');
bin.addEventListener('click', function () {
    if (document.querySelector('.taskList').style.display === 'none') {
        document.querySelector('.taskList').style.display = 'none';
        document.querySelector('.ready').style.display = 'none';
        document.querySelector('.bin').style.display = 'block';
    }
});
