var ulist=document.getElementById("list");
var li;
var ali;
var checkbox;




function addItem(){
    var input=document.getElementById("input");
    var item=input.value;
    ul=document.getElementById('list');
    var textnode=document.createTextNode(item);
    if(item=='')
    {
        return false;
    }
    else{
        //create li
       li=document.createElement('li');
      //create checkbox  
        checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check')//not required 
       //create label
       var label=document.createElement('label');
       //add elements to web page
       ul.appendChild(label);
       li.appendChild(checkbox);
       label.appendChild(textnode);
       li.appendChild(label);
       ul.insertBefore(li,ul.childNodes[0]);
      
       setTimeout(() => {
        li.className='visual';
       }, 4);
      input.value='';
    }
}
function removeItem(){
   li=ulist.children;
    for(let index=0;index<li.length;index++)
    {
        while(li[index] && li[index].children[0].checked)
        {
            ulist.removeChild(li[index]);
        }
    }    

}
function removeAll()
{
    ali=ulist.children;
    for(let index=0;index<ali.length;index++)
    {
        
        while(ali[index] && ali[index].children[0])
        {
            ulist.removeChild(ali[index]);
        }
    }    

}