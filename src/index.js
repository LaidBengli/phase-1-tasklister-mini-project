document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let task = document.getElementById('new-task-description');


  document.forms[0].onsubmit = function (event) {
    event.preventDefault();
    var ul = document.getElementById("tasks");
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
    btn.style.width = '20px';
    btn.style.height = '20px';
    btn.value = 'x';
    btn.textContent = 'x'
    btn.style.fontSize = '15px';
    btn.style.textAlign = 'center'
    btn.style.justifyContent = 'center'
    console.log(btn.value);
    btn.addEventListener("click", function () {
      ul.removeChild(li);
    });


    li.appendChild(document.createTextNode(task.value));
    li.appendChild(btn)
    ul.appendChild(li);


  };


});

