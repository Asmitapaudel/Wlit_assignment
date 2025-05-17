document.addEventListener('DOMContentLoaded', function(){

  const list = document.querySelector('#movie-list ul');
    const form =document.forms
  // Delete a movie
  list.addEventListener('click', (event) => {
    if (event.target.className === 'delete-btn') {
      const li = event.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });


  // Add a movie
  addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = addForm.querySelector("input[type='text']").value.trim();
    if (value === '') return;

    // Create elements
    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('button');

    // Add content
    movieName.textContent = value;
    deleteBtn.textContent = 'delete';

    // Add classes
    movieName.classList.add('name');
    deleteBtn.classList.add('delete-btn');

    // Append to list
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // Clear input
    addForm.reset();
  });

document.dele
})