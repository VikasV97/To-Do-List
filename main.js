const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

    list.innerHTML+= html;
};

addForm.addEventListener('submit', e =>{
    e.preventDefault();

    const todo = addForm.add.value.trim();// does not allow spaces to be entered
    
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }

    
});

// delete todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    //console.log(term);
    const createdArray = Array.from(list.children)
    createdArray.filter((todo) => {
        !todo.textContent.includes(term);
    });
    createdArray.forEach((todo) => {
        todo.classList.add('filtered');
    });


    
    createdArray.filter((todo) => {
        todo.textContent.includes(term);
    });
    createdArray.forEach((todo) => {
        todo.classList.remove('filtered');
    });
    
};

// keyup event
search.addEventListener('keyup', ()=>{
    const term = search.value.trim();
    filterTodos(term);
});

