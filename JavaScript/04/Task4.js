// JavaScript Document
var numList=document.getElementById("num_wrap");
var data=document.getElementById('in_put');
/*左侧输入函数*/
function LeftIn(){
	if(data.value==""){
		alert("请输入一个数");
		}else if(!isNaN(data.value)){
			var addli=document.createElement('li');
			addli.innerHTML=data.value;
			numList.insertBefore(addli,numList.firstChild);
			data.value="";
			}else{
				alert("数据格式不正确，请重新输入！");
				}
	}
/*右侧输入函数*/
function RightIn(){
	if(data.value==""){
		alert("请输入一个数");
		}else if(!isNaN(data.value)){
			var addli=document.createElement('li');
			addli.innerHTML=data.value;
			numList.insertBefore(addli,null);
			data.value="";
			}else{
				alert("数据格式不正确，请重新输入！");
				}
	}
/*左侧删除函数*/
function removeLeft(){
	numList.removeChild(numList.firstChild);
	}
/*右侧删除函数*/
function removeRight(){
	numList.removeChild(numList.lastChild);
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