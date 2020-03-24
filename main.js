// import {isat_ac} from './index'



// ]
var data=[
	{id:'1', name:'balaji',edu:'engineer' },
	{id:'2', name:'sekar',edu:'eng'},
	{id:'3', name:'yokesh',edu:'engineer'},
	{id:'4', name:'durai',edu:'eng'},
	{id:'5', name:'gabrie',edu:'eng'},
	{id:'6', name:'Raghu',edu:'engineer'},
	{id:'7', name:'Aravind',edu:'eng'},
	{id:'8', name:'Deva',edu:'engineer'},
	]

// void (function() {
isat_ac(document.getElementById("ac"),data,
function(x,val){

    return   x.name.substr(0, val.length).toUpperCase() == val.toUpperCase() 
},
function(action,cursor,filtered,original_array,is_input_active){
console.log("-----"+action+"->"+cursor+"-----")
console.log(filtered)

var table=document.getElementById("just_1")
var tbody=document.getElementById("just_2")
var result=document.getElementById("result")


var trs=tbody.getElementsByTagName("tr");


if(action=="click"){

    trs[cursor].style.background="red";

    document.getElementById("ac").value=filtered[cursor].name;
    table.style.display="none";
    
}


if(is_input_active){

    table.style.display="";

//ui


tbody.innerHTML="";
var tr_data=[];

 tr_data=original_array;

for(var i=0;i<tr_data.length;i++)
{

var tr = document.createElement("tr");
var td_data=tr_data[i];
var text;
for(var td_key in td_data){
var td = document.createElement("td");

text=document.createTextNode(td_data[td_key]);



td.appendChild(text)
tr.appendChild(td)

}



tbody.appendChild(tr);
//ui



}

    console.log("cursor"+trs.length)


      if(action=="enter"){

        document.getElementById("ac").value=filtered[cursor].name;
        table.style.display="none";
    }
     
//mouse

if(cursor!=-1){

    trs[cursor].style.background="red";
    // document.getElementById("ac").value=filtered[cursor].name;

}


}else{
    cursor=-1;
    // table.style.display="none";

}

},{

    root:"just_1",   //class or id
    selector:"TR", //.class or #id tagName(DIV,LIST)


},
['name','id']
);

//list
isat_ac(document.getElementById("ul_input"),data,
function(x,val){

    return   x.name.substr(0, val.length).toUpperCase() == val.toUpperCase() 
},
function(action,cursor,filtered,original_array,is_input_active){
console.log("-----"+action+"->"+cursor+"-----")
console.log(filtered)

var ul=document.getElementById("Just_2_ul")


var lis=ul.getElementsByTagName("li");


if(action=="click"){

    lis[cursor].style.background="red";

    document.getElementById("ul_input").value=filtered[cursor].name;
    ul.style.display="none";
    
}


if(is_input_active){

    ul.style.display="";

//ui


ul.innerHTML="";
var ul_data=[];

 ul_data=original_array;

for(var i=0;i<ul_data.length;i++)
{

var li = document.createElement("li");
var li_data=ul_data[i];
var text;

text=document.createTextNode(li_data["name"]);

console.log("li"+li_data["name"])

li.appendChild(text)
ul.appendChild(li);


}

 

      if(action=="enter"){

        document.getElementById("ul_input").value=filtered[cursor].name;
        ul.style.display="none";
    }
     
//mouse

if(cursor!=-1){

    lis[cursor].style.background="red";
    // document.getElementById("ac").value=filtered[cursor].name;

}


}else{
    cursor=-1;
    // table.style.display="none";

}

},{

    root:"Just_2_ul",   //class or id
    selector:"LI", //.class or #id tagName(DIV,LIST)


},
['name','id']
);



isat_ac(document.getElementById("ex-1"),data,
function(x,val){

	return;
},
function(action,cursor,filtered,original_array,is_input_active){

document.getElementById("ex-1_data").innerHTML=JSON.stringify(filtered);
document.getElementById("ex-1_input").innerHTML="input: "+is_input_active;
document.getElementById("ex-1_action").innerHTML="action: "+action;
document.getElementById("ex-1_cursor").innerHTML="cursor: "+cursor;


},{
root:"ex-1_table",   //class or id
selector:"TR", //.class or #id tagName(DIV,LIST)

},
[]
);




isat_ac(document.getElementById("ex-2"),data,
function(x,val){

	return x.name.substr(0, val.length).toUpperCase() == val.toUpperCase()
},
function(action,cursor,filtered,original_array,is_input_active){

document.getElementById("ex-2_data").innerHTML=JSON.stringify(filtered);
document.getElementById("ex-2_input").innerHTML="input: "+is_input_active;
document.getElementById("ex-2_action").innerHTML="action: "+action;
document.getElementById("ex-2_cursor").innerHTML="cursor: "+cursor;


},{
root:"ex-2_table",   //class or id
selector:"TR", //.class or #id tagName(DIV,LIST)

},
['name','edu','id']
);


    isat_ac(document.getElementById("ex-3"),data,
    function(x,val){
    
        return x.name.substr(0, val.length).toUpperCase() == val.toUpperCase() || x.edu.substr(0, val.length).toUpperCase() == val.toUpperCase()
    },
    function(action,cursor,filtered,original_array,is_input_active){
    
    document.getElementById("ex-3_data").innerHTML=JSON.stringify(filtered);
    document.getElementById("ex-3_input").innerHTML="input: "+is_input_active;
    document.getElementById("ex-3_action").innerHTML="action: "+action;
    document.getElementById("ex-3_cursor").innerHTML="cursor: "+cursor;
    
    
    },{
    root:"ex-3_table",   //class or id
    selector:"TR", //.class or #id tagName(DIV,LIST)
    
    },
    ['name','edu','id']
    );
