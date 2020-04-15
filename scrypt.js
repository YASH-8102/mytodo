if(localStorage.getItem('yn')==null)
{
var LSarray = [];
}
else
{
    LSarray=JSON.parse(localStorage.getItem('yn'))
}



let createlistelement = function(text)
{
    var ul = document.getElementById('l1');

    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'check');

    li.appendChild(checkbox);
    li.appendChild(label);

    label.textContent=text;
    ul.appendChild(li);
}


let getlocalstorage = function()
{
    LSarray.forEach(function(elemeent){
        createlistelement(elemeent);
    })
}

/* Adding task*/
let Addtask = function()
{
    
    let txt = document.getElementById('a1').value;
    if(txt != '') 
    {
        LSarray.push(txt);
        createlistelement(txt);
        localStorage.setItem('yn',JSON.stringify(LSarray));

        
    }
    else
    {
        alert('you need to enter something over here');
    }
    addbox.value='';
}
/* Add task by enter*/
let addbox = document.getElementById('a1');
addbox.addEventListener('keyup',function(key){
    if(key.keyCode==13)
    {
        Addtask();
        
    }
})

/*Deleting task*/
let deleteallItem = function()
{
    var list = document.getElementById('l1');
    var listelement = list.children;
    localStorage.clear();
    LSarray=[];

    for (let i = 0; i <= listelement.length; i++)
    {
        while ( listelement[i] )
        {
            list.removeChild(listelement[i]);
        } 
}
}

let deleteItem = function()
{
    var list = document.getElementById('l1');
    var listelement = list.children;

    for (let i = 0; i <= listelement.length; i++)
    {       
        while ( listelement[i] && listelement[i].children[0].checked)
        {
            list.removeChild(listelement[i]);
            LSarray.splice(i,1);
            localStorage.setItem('yn',JSON.stringify(LSarray));
        } 
}
}



/*filter*/
var search = document.getElementById('s1');
search.addEventListener('keyup',function()
{
    let list1=document.getElementById('l1').children;
    
    if(search.value=='')
    {
        document.getElementById('add1').style.display='block';
        LSarray.forEach(function(elemeent,index){
        let list1=document.getElementById('l1').children[index];
        list1.style.display='block';
        })
    }
    else
    {
    LSarray.forEach(function(element,index){
        var item=element.toLowerCase();

       if(item.indexOf(search.value.toLowerCase())==0)
       {
           
           document.getElementById('add1').style.display='none';
           
       }
       else {
            let list1=document.getElementById('l1').children[index];
            list1.style.display='none';
       }
        
    })
    }
    
    
})

