  function addTask(list){
        var task = document.createElement("li");
        var inp = document.getElementById("txt").value;
        var chkbx = document.createElement("input");
        var span = document.createElement("span");

        chkbx.type = "checkbox";
        inp.type = "text";
        task.innerText = inp;

        if (inp != ""){
        task.appendChild(chkbx);
        task.appendChild(span);
        list.appendChild(task);
    }
       }




