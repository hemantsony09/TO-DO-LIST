function mytodo() {
    var a1 = document.getElementById('todo-input').value;
    if (a1 === '') {
      return;
    }
  
    var todo1 = document.getElementById('list');
    var todonew = document.createElement('li');
    todonew.textContent = a1;
  
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      todo1.removeChild(todonew);
    });
  
    todonew.appendChild(deleteButton);
    todo1.appendChild(todonew);
    document.getElementById('todo-input').value = '';
  }
  
