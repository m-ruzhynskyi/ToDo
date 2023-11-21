class NewTask {
    static idCounter = 0;

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
    #nav;
    #button3;
    #taskId;

    constructor(task) {
        NewTask.idCounter += 1;
        this.#taskId = NewTask.idCounter;
        this.#task = task;
    }

    get add() {
        this.#mainDiv = document.createElement('div');
        this.#buttonDiv = document.createElement('div');

        this.#mainDiv.style.maxWidth = '1120px';
        this.#mainDiv.classList.add('task')

        this.#nav = document.createElement('nav');
        this.#nav.classList.add('addSett')

        this.#div = document.createElement('div');
        this.#div.style.display = 'flex';
        this.#div.style.paddingLeft = '10px';
        this.#div.id = this.#taskId

        this.#input = document.createElement('input');
        this.#input.type = 'checkbox';
        this.#input.id = 'check';
        this.#input.style.cursor = 'pointer ';
        this.#input.addEventListener('click', (e) => {
            this.taskCompleted(e)
        })

        this.#p = document.createElement('p');
        this.#p.textContent = this.#task;
        this.#p.id = this.#taskId

        this.#button1 = document.createElement('button');
        this.#button1.innerHTML = '<img src="./assets/img/threeDots.png" alt="threeDots" class="mainImgs">';
        this.#button1.classList.add('buttonsEditMain');
        this.#button1.addEventListener('click', (e) => {
            this.edit(this.#p)
        })

        this.#button2 = document.createElement('button');
        this.#button2.innerHTML = '<img src="./assets/img/bin.png" alt="bin" class="mainImgs" >';
        this.#button2.classList.add('buttonsEditMain');
        this.#button2.addEventListener('click', (e) => {
            this.bin(e)
        })


        this.#div.append(this.#input);
        this.#div.append(this.#p);

        this.#buttonDiv.append(this.#button1);
        this.#buttonDiv.append(this.#button2);

        this.#mainDiv.append(this.#div);
        this.#mainDiv.append(this.#buttonDiv);
        this.#mainDiv.append(this.#nav);

        return this.#mainDiv;
    }

    taskCompleted(e) {
        if (this.#input.checked) {
            this.#mainDiv.classList.add('completed');
            this.#button1.classList.add('completed');
            this.#button2.classList.add('completed');
            document.querySelector('.ready').append(this.#mainDiv)
        } else {
            this.#mainDiv.classList.remove('completed');
            this.#button1.classList.remove('completed');
            this.#button2.classList.remove('completed');
            this.#input.checked = false;
            document.querySelector('.taskList').append(this.#mainDiv)
        }
        this.#element.style.display = 'none';
    }

    bin(e) {
        document.querySelector('.bin').append(this.#mainDiv)
        this.#input.checked = true
        if (this.#mainDiv.classList.contains('completed')) {
            this.#button2.style.display = 'none';
            this.#input.style.display = 'none'
        } else {
            this.#mainDiv.classList.add('delete');
            this.#button1.classList.add('delete');
            this.#button2.classList.add('delete');
            this.#button2.style.display = 'none';
            this.#input.style.display = 'none'
        }
        this.#element.style.display = 'none';
    }

    edit(el) {
        let enter = document.createElement('input');
        let help = document.createElement('p');

        this.#div.append(enter);
        this.#div.append(help);
        help.textContent = 'Press Enter to submit a  changes'
        help.style.marginLeft = '15px'

        enter.value = this.#task;
        enter.style.border = 'solid 1px green'
        enter.style.borderRadius= '12px'
        el.style.display = 'none';
        enter.addEventListener('keypress', (e) => {
            if (e.code === 'Enter') {
                enter.style.display = 'none';
                help.style.display = 'none'
                el.textContent = enter.value;
                el.style.display = '';
            }
        });
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
