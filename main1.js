function addTask() {
  let _Input = document.getElementById("new-task");
  let _ul = document.getElementById("task-list");
  let _li = document.createElement("li");
  let _value = document.createTextNode(_Input.value);
  let _list = document.getElementsByTagName("li");
  let close = document.getElementsByClassName("close");

  if (_Input.value === "") {
    alert("You must write something!");
  } else {
    _li.appendChild(_value);
    _ul.appendChild(_li);
    _Input.value = "";
  }

  for (i = 0; i < _list.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    _list[i].appendChild(span);
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
