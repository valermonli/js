const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function(arrOfTasks) {
  //Начинаем проект с самовызыващейся функции, что бы избежать конфликта переменных и для безопасности
  //console.log(arrOfTasks);
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    //Переводим массив объектов -> в объект объектов
    acc[task._id] = task;
    // ^ получаем объекты такого вида
    // {
    //   d5ddjfeyjffgf73hfk: {name: 'John', age:35 },
    //   f77dfjfyjftyf73hfk: {name: 'Sara', age: 55 },
    // }
    return acc;
  }, {});

  //START Работа с темой
  const theme = {
    default: {
        '--base-text-color': '#212529',
        '--header-bg': '#007bff',
        '--header-text-color': '#fff',
        '--default-btn-bg': '#007bff',
        '--default-btn-text-color': '#fff',
        '--default-btn-hover-bg': '#0069d9',
        '--default-btn-border-color': '#0069d9',
        '--danger-btn-bg': '#dc3545',
        '--danger-btn-text-color': '#fff',
        '--danger-btn-hover-bg': '#bd2130',
        '--danger-btn-border-color': '#dc3545',
        '--input-border-color': '#ced4da',
        '--input-bg-color': '#fff',
        '--input-text-color': '#495057',
        '--input-focus-bg-color': '#fff',
        '--input-focus-text-color': '#495057',
        '--input-focus-border-color': '#80bdff',
        '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
        '--base-text-color': '#212529',
        '--header-bg': '#343a40',
        '--header-text-color': '#fff',
        '--default-btn-bg': '#58616b',
        '--default-btn-text-color': '#fff',
        '--default-btn-hover-bg': '#292d31',
        '--default-btn-border-color': '#343a40',
        '--default-btn-focus-box-shadow':
          '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        '--danger-btn-bg': '#b52d3a',
        '--danger-btn-text-color': '#fff',
        '--danger-btn-hover-bg': '#88222c',
        '--danger-btn-border-color': '#88222c',
        '--input-border-color': '#ced4da',
        '--input-bg-color': '#fff',
        '--input-text-color': '#495057',
        '--input-focus-bg-color': '#fff',
        '--input-focus-text-color': '#495057',
        '--input-focus-border-color': '#78818a',
        '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
        '--base-text-color': '#212529',
        '--header-bg': '#fff',
        '--header-text-color': '#212529',
        '--default-btn-bg': '#fff',
        '--default-btn-text-color': '#212529',
        '--default-btn-hover-bg': '#e8e7e7',
        '--default-btn-border-color': '#343a40',
        '--default-btn-focus-box-shadow':
          '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        '--danger-btn-bg': '#f1b5bb',
        '--danger-btn-text-color': '#212529',
        '--danger-btn-hover-bg': '#ef808a',
        '--danger-btn-border-color': '#e2818a',
        '--input-border-color': '#ced4da',
        '--input-bg-color': '#fff',
        '--input-text-color': '#495057',
        '--input-focus-bg-color': '#fff',
        '--input-focus-text-color': '#495057',
        '--input-focus-border-color': '#78818a',
        '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };
  //let lastSelectedTheme = 'default';
  let lastSelectedTheme = localStorage.getItem('app_theme') || 'default';

  setTheme(lastSelectedTheme);


  //const themeSelect = document.getElementById('shemeSelect');
  const themeSelect = document.querySelector('#shemeSelect');
  let elems = themeSelect.children;
  //console.log(elems);
  
  //START делаю выбранным текущую тему в селектах
  for(let i = 0; i < elems.length; i++){
    //console.log(elems[i].value, " - ", lastSelectedTheme);
    if(elems[i].value === lastSelectedTheme){
      elems[i].setAttribute('selected', true);
    }
  }
  //END делаю выбранным текущую тему в селектах


  
  //console.log(themeSelect.childNodes);
  themeSelect.addEventListener('change', onThemeSelectHendler);


  //END Работа с темой

  const listContainer = document.querySelector('.list-group');

  //START добавление задачи

  const form = document.forms['addTask'];
    //Свойство forms содержит данные о всех формах на странице и обратиться к ней можно по атрибуту формы name
  const inputTitle = form.elements['title'];
    //Свойство elements хранит сведения о инпутах выбранной формы и по id или name мы можем к ним обратиться
  const inputArticle = form.elements['article'];
  
  form.addEventListener('submit', onFormSubmit);

  //END добавление задачи

  listContainer.addEventListener('click', onDeleteHandler);

  //console.log(objOfTasks);
  renderAllTasks(objOfTasks);

  function renderAllTasks(taskLists){
    if(!taskLists){
      console.error("Task list is empty");
      return;
    }
    const fragment = document.createDocumentFragment();
    Object.values(taskLists).forEach(task => {
      //console.log(task);
      const li = listItemTempalete(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTempalete({_id, title, body} = {}){
    //                          ^ деструктуризируем объект
    //console.log(_id," -  ",  title);
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "align-items-center", "flex-wrap", "mt-2", "mb-2");
    li.setAttribute("data-task-id", _id);
    //console.log(li);

    const span = document.createElement('span');
    span.textContent = title;
    span.style.fontWeight = 'bold';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
    deleteBtn.textContent = "Delete Task";

    const article = document.createElement('p');
    article.classList.add('mt-2', 'w-100');
    article.textContent = body;

    li.append(span);
    li.append(article);
    li.append(deleteBtn);
    
    //console.log(li);
    return li;
  }

  function onFormSubmit(e){
    e.preventDefault();
    //console.log(e);

    const titleValue = inputTitle.value;
    const bodyValue = inputArticle.value; 

    //console.log(titleValue);
    //console.log(bodyValue);
    
    if(!titleValue || !bodyValue){
      alert("Введите корректные данные");
      return;
    }
    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTempalete(task); //приводим к li
    listContainer.insertAdjacentElement('afterbegin', listItem);
    form.reset();
    //Метод reset() обекта form сбрасывет значения в начальное положение
    //console.log(task);
  }
  //console.dir(onFormSubmit);

  function createNewTask(title, body){
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    }
    //console.log(newTask);
    objOfTasks[newTask._id] = newTask;
    //console.log(objOfTasks);
    return {...newTask}; 
  }

  function deleteTask(id){
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Вы действительно хотите удалить задачу: ${title} ?`);
    if(!isConfirm) return isConfirm; 
    delete objOfTasks[id];
    return isConfirm;
  }
  function fadeOutDelete(element){
    let opacity = 1;
    let timer = setInterval(() => {
      if(opacity <= 0.1){
        clearInterval(timer);
        element.remove();
      }
      element.style.opacity = opacity;
      opacity -= opacity * 0.1;
    },30)
  }

  function deleteTaskFromHTML(confirmed, element){
    //console.log(element);
    if(confirmed){
      fadeOutDelete(element);
      //element.remove();
    }
  }

  function onDeleteHandler({ target }){
    if(target.classList.contains('delete-btn')){
      const parent = target.closest("[data-task-id]");
                        // ^ возвращает ближайший родительский элеент по селектору
      const id = parent.dataset.taskId;
                      //  ^ содержит атрибуты описанные через data-
                      //  так как мы записали task-id через "-", то храниться они будут в camelCase то есть taskId
      const confirmed = deleteTask(id);
      
      deleteTaskFromHTML(confirmed, parent);
      //console.log(confired);
      //console.log(id);
      //console.log(parent);
      //console.log('delete');
    }
  }

  function onThemeSelectHendler(e){
    const selectedTheme = themeSelect.value;
    const confirmed = confirm(`Вы действительно хотите применить тему ${selectedTheme}`);
    if(!confirmed){
      themeSelect.value = lastSelectedTheme;
      return;
    } 
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
    localStorage.setItem('app_theme', selectedTheme);
  }

  function setTheme(themeName){
    //console.log(themeName);
    const selectedThemeObj = theme[themeName];
    //console.log(selectedThemeObj);
    Object.entries(selectedThemeObj).forEach(([key, value]) => {
          // ^ преобразует объект в массив с массивами
      //console.log(key, " - " ,value);
      document.documentElement.style.setProperty(key, value);
    }); 
  }
})(tasks);


