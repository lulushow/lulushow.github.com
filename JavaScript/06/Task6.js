// JavaScript Document
var numList=document.getElementById("num_wrap");
var Input=document.getElementById('in_put');
var string=Input.value;
var data1=string.replace(/\r\n/g," ");
var comma=',';
var data2=data1.replace(new RegExp(comma,'gm')," ");
var stopMark='、';
var data3=data2.replace(new RegExp(stopMark,'gm')," ");
var arr=data3.split(" ");
/*左侧输入函数*/
function LeftIn(){
	for(var i=0;i<arr.length;i++){
		var addli=document.createElement('li');
		addli.innerHTML=arr[i];
		numList.insertBefore(addli,numList.firstChild);
		}
	Input.value="";
	}
/*右侧输入函数*/
function RightIn(){
	for(var i=0;i<arr.lengthl;i++){
		var addli=document.createElement('li');
		addli.innerHTML=arr[i];
		numList.insertBefore(addli,null);
		}
	Input.value="";
	}
/*左侧删除函数*/
function removeLeft(){
	numList.removeChild(numList.firstChild);
	}
/*右侧删除函数*/
function removeRight(){
	numList.removeChild(numList.lastChild);
	}
function show(){
	for(var i=0;i<arr.length;i++){
		document.write(arr[i]);
		}
	}
document.getElementById("left_in").onclick=function(){LeftIn()};
document.getElementById("right_in").onclick=function(){RightIn()};
document.getElementById("left_out").onclick=function(){removeLeft()};
document.getElementById("right_out").onclick=function(){removeRight()};
/*事件代理，点击li元素删除*/

numList.addEventListener('click',function(event){
    if(event.target.nodeName.toLowerCase()=="li"){
//                    console.log(event.target);
        numList.removeChild(event.target);
    }
});
show();