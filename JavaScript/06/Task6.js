// JavaScript Document
var numList=document.getElementById("num_wrap");


/*左侧输入函数*/
function LeftIn(){
	var Input=document.getElementById('in_put');
	var myform=/[^\u4e00-\u9fa5A-Za-z0-9_]/g;/*正表达式*/
	if(myform.test(Input.value)){
		var arr=Input.value.split(myform);
		for(var i=0;i<arr.length;i++){
			var addli=document.createElement('li');
			addli.innerHTML=arr[i];
			numList.insertBefore(addli,numList.firstChild);
			}
		}else if(Input.value=""){
			alert("请输入内容");
			}else{
				var addli=document.createElement('li');
				addli.innerHTML=Input.value;
				numList.insertBefore(addli,numList.firstChild);
				}
	Input.value="";
	}
/*右侧输入函数*/
function RightIn(){
	var Input=document.getElementById('in_put');
	var myform=/[^\u4e00-\u9fa5A-Za-z0-9_]/g;/*正表达式*/
	if(myform.test(Input.value)){
		var arr=Input.value.split(myform);
		for(var i=0;i<arr.lengthl;i++){
			var addli=document.createElement('li');
			addli.innerHTML=arr[i];
			numList.insertBefore(addli,null);
			}
	}else if(Input.value=""){
		alert("请输入内容");
	}else{
		var addli=document.createElement('li');
		addli.innerHTML=Input.value;
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
/*查询函数*/
function searchdata(){
	var inputdata=document.getElementById("search").value;
	var searchreg=new RegExp(inputdata);
	var li=numList.getElementsByTagName('li');
	for(var i=0;i<li.length;i++){
		var lidata=li[i].innerHTML;
		if(searchreg.test(lidata)){
			li[i].style.backgroundColor="blue";
			}
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
document.getElementById("searched").onclick=function(){searchdata()};