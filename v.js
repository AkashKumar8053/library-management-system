
       function addStudent()
    { 
        var date = new Date();
	    var current_date = date.getDate()+"/"+(date.getMonth()+1)+"/"+ date.getFullYear();
	    var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	    var date_time = current_date+" at "+current_time;	
	    
      
        var bookName=document.sample.bookName.value; 
        var issued=document.sample.issued.value; 
        
        

        var tr = document.createElement('tr');

        
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));
       
        td1.style.textAlign='center';
        td2.style.textAlign='center';
        td3.style.textAlign='center';
        td4.style.textAlign='center';
        td5.style.textAlign='center';
        

        td1.innerHTML=1;
        td2.innerHTML=bookName;
        td3.innerHTML=issued;
        td4.innerHTML = date_time;
        td5.innerHTML = '<span id="pl" style="color:red;" onclick="UpStud(this);">Not returned</span>'
        
        document.getElementById("tbl").appendChild(tr);

    }
    function UpStud(stud){
        document.getElementById("pl").innerHTML = "Returned";
        document.getElementById("pl").style.color="Green";
    }
