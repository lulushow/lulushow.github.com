// JavaScript Document
var numList=document.getElementById("num_wrap");
var data=document.getElementById('in_put');
var totalNUM=0;
var number=[];
/*显示函数*/
function show(){
	var content="";
	for(var i=0;i<number.length;i++){
		content+="<li id='"+i+"'style='height:"+number[i]+"px;'>"+"</li>";
		}
		numList.innerHTML=content;
	}
/*左侧输入函数*/
function LeftIn(){
	if(totalNUM<=60){
		if(data.value==""){
		alert("请输入一个数");
		}else if(!isNaN(data.value)){
			if(data.value<=100&&data.value>=10){
				number.unshift(data.value);
				var addli=document.createElement('li');
				addli.style.height=data.value+"px";
				numList.insertBefore(addli,numList.firstChild);
				data.value="";
				totalNUM++;
				}else{
					alert("请输入10-100内的数据！");					}
			}else{
				alert("数据格式不正确，请重新输入！");
				}
		}else{
			alert("超出添加限制！");
			}
	
	}
/*右侧输入函数*/
function RightIn(){
	if(totalNUM<=60){
		if(data.value==""){
		alert("请输入一个数");
		}else if(!isNaN(data.value)){
			if(data.value<=100&&data.value>=10){
				number.push(data.value);
				var addli=document.createElement('li');
				addli.style.height=data.value+"px";
				numList.insertBefore(addli,null);
				data.value="";
				totalNUM++;
				}else{
					alert("输入数据太大，请输入10-100内的数据！");					}
			
			}else{
				alert("数据格式不正确，请重新输入！");
				}
		}else{
			alert("超出添加限制！");
			}
	}
/*左侧删除函数*/
function removeLeft(){
	number.shift();
	numList.removeChild(numList.firstChild);
	totalNUM--;
	}
/*右侧删除函数*/
function removeRight(){
	number.pop();
	numList.removeChild(numList.lastChild);
	totalNUM--;
	}
/*可视化选择排序算法*/
function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(){
	var len=number.length; 
	for (i = 0; i < len; i++){
		 var min = i;
		 for(j = i + 1; j < len; j++){
			  if(number[j] < number[min]){
				    min = j;
					}
				}
				if(i != min){
					swap(number, i, min);
					show();
				}
			}
		return items;
	}
document.getElementById("left_in").onclick=function(){LeftIn()};
document.getElementById("right_in").onclick=function(){RightIn()};
document.getElementById("left_out").onclick=function(){removeLeft()};
document.getElementById("right_out").onclick=function(){removeRight()};
/*事件代理，点击li元素删除*/
numList.addEventListener('click',function(event){
    if(event.target.nodeName.toLowerCase()=="li"){
        numList.removeChild(event.target);
		totalNUM--;
    }
});
document.getElementById("sort").onclick=function(){selectionSort()};