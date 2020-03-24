

## Description
 it is a autocomplete library written in plain javascript.it is help full for who are need to use custom autocomplete.


### Install from npm

```
npm install advanced_autocomplete --save
```

### Currently Added Features 
```
import {isat_ac} from 'advanced_autocomplete'
```
[documentation](https://ibalaji777.github.io/advanced_autocomplete/)


### Usage discount_type price & INCLUSIVE
```
<input type="text" id="ac">
	<table id="just_1">
		<thead></thead>
	<tbody id="just_2">
	</tbody>
	</table>    
	Result:
	<div id="result"> ans</div> 

```

### javascript
```


var data=[
   {id:'1', name:'balaji',edu:'engineer' }
   {id:'2', name:'sekar',edu:'engineer'},
   {id:'2', name:'yokesh',edu:'engineer'},
   {id:'3', name:'durai',edu:'engineer'},
   {id:'4', name:'gabrie',edu:'engineer'},
   {id:'2', name:'Raghu',edu:'engineer'},
   {id:'2', name:'Aravind',edu:'engineer'},
   {id:'2', name:'deva',edu:'engineer'},
   ]
isat_ac(document.getElementById("ac"),data,
function(x,val){
return   x.name.substr(0, val.length).toUpperCase() == val.toUpperCase() 
},
function(action,cursor,filtered,original_array,is_input_active){
console.log("-----"+action+"------")
console.log(filtered)

var tbody=document.getElementById("just_2")
var result=document.getElementById("result")
if(is_input_active){

tbody.style.display="";
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
var trs=tbody.getElementsByTagName("tr");
console.log("cursor"+trs.length)
//keyboard
if(cursor!=-1){
	trs[cursor].style.background="red";
  }
  if(action=="enter"){
	result.innerHTML=filtered[cursor].name;
}
 //mouse
if(action=="click"&&cursor!=-1){

trs[cursor].style.background="red";
//filltered
result.innerHTML=(filtered[cursor]);
}
// result
}else{
cursor=-1;
 tbody.style.display="none";
}
},{
root:"just_2",   //class or id
selector:"TR", //.class or #id tagName(DIV,LIST)

},
['name','id']
);


```








## Bug fixes

None


### We are Not Responsible for if any damage causes(dont Download without knowledge)
### Still in Developement Mode (confirm the library worth before you use)
## Licensing

- License Agreement: MIT
- Author :Balaji





