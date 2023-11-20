class NewTask {
    #task;
    #input;
    #div;
    #p;
    #button1;
    #button2;
    #mainDiv;
    #buttonDiv;
    #userX;
    #element;
    #userY;
    #settBlock;
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

        this.#p = document.createElement('p');
        this.#p.textContent = this.#task;

        this.#button1 = document.createElement('button');
        this.#button1.innerHTML = '<img src="./assets/img/threeDots.png" alt="threeDots" class="mainImgs">';
        this.#button1.classList.add('buttonsEditMain');
        this.#button1.addEventListener('click', (e) => {this.additionalSettings(e)})
        this.#button2 = document.createElement('button');
        this.#button2.innerHTML = '<img src="./assets/img/bin.png" alt="bin" class="mainImgs" >';
        this.#button2.classList.add('buttonsEditMain');

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
        }else{
            this.#element.style.display = 'none';
        }
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