let list_items = document.getElementsByTagName("LI");
        let i;
        for(i=0;i<list_items.length;i++)
        {
            let span = document.createElement("SPAN");
            let text = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(text);
            list_items[i].appendChild(span);
        }
        let exit = document.getElementsByClassName("close");
        let j;
        for(j=0;j<exit.length;j++)
        {
            exit[j].onclick = function()
            {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }
        let check = document.querySelector('ul');
        check.addEventListener('click', function(set){
            if(set.target.tagName === 'LI'){
                set.target.classList.toggle('checked')
            } 
        }, false);

        function newitem()
        {
            let task = document.createElement("li");
            let input_val = document.getElementById("input_task").value;
            let t = document.createTextNode(input_val);
            task.appendChild(t);
            if(input_val === ''){
                alert("Enter some task!");
            }
            else{
                document.getElementById("list").appendChild(task);
            }
            let span = document.createElement("SPAN");
            let text = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(text);
            task.appendChild(span);
            for(i=0;i<exit.length;i++) {
                exit[i].onclick = function(){
                    let div =this.parentElement;
                    div.style.display = "none";
                }
            }
            document.getElementById("input_task").innerHTML=null;
        }