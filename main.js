class NewTask {
    #task;
    #input;
    #div;
    #p;
    #button1;
    #button2;
    #mainDiv;
    constructor(task) {
        this.#task = task;
    }
    get add(){
        this.#mainDiv = document.createElement('div');
        this.#mainDiv.style.maxWidth = '1120px';
        this.#mainDiv.classList.add('task')

        this.#div = document.createElement('div');
        this.#div.style.display = 'flex';
        this.#div.style.paddingLeft = '10px';

        this.#input = document.createElement('input');
        this.#input.type = 'checkbox';
        this.#input.id = 'check';

        this.#p = document.createElement('p');
        this.#p.textContent = this.#task;

        this.#button1 = document.createElement('button');
        this.#button1.style.marginLeft = '1000px'
        this.#button2 = document.createElement('button');

        this.#div.append(this.#input);
        this.#div.append(this.#p);
        this.#mainDiv.append(this.#div);
        this.#mainDiv.append(this.#button1);
        this.#mainDiv.append(this.#button2);

        return this.#mainDiv;
    }

}

let night = document.querySelector('.moon');
night.addEventListener('click', function (){
    document.querySelector('body').classList.toggle('nightMode');
    night.classList.toggle('sun')
    night.parentElement.classList.toggle('switcher_light')
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