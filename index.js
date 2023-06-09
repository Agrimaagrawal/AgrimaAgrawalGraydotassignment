let listItems=document.querySelectorAll(".fitm");
let listImg=document.getElementsByClassName('fimg');
let firstBox=document.getElementById('firstbox');
let secondBox=document.getElementById('secondbox');
 for(item of listItems){
    item.addEventListener('dragstart',function(e){
        let selected=e.target;
        secondBox.addEventListener('dragover',function(e){
            e.preventDefault();
        });
        secondBox.addEventListener("drop",function(e){
              secondBox.appendChild(selected);
              selected=null;
              
              

              

        });
        

    });
    
 }
 function Reset(){
    for(item of listItems){
        firstBox.appendChild(item);
    }
 }
 