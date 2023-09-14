// 1. Mengambil reference html element in js
const formTask = document.querySelector('.form-task');

// 2. Menambahkan EventListener di elemen form
formTask.addEventListener('submit', (event) => {
  event.preventDefault();
  //   console.log(event);

  // 3. reference element html input
  const inputForm = document.querySelector('.input-form');
  console.log(inputForm.value);

  // 4. reference html element ul / wrapper list
  const wrapperList = document.querySelector('.task-list-wrapper');

  // 5. create li using js
  const taskList = document.createElement('li');
  // 6. masukkan input value ke li
  taskList.innerHTML = inputForm.value;
  // 7.  append <li> ke <ul>
  wrapperList.append(taskList);
});
