var calcdisp=document.querySelector("#calcdisp");
var switchbtn=document.querySelector(".switch");
var dispANS=document.querySelector("#dispANS");
var dispvalue=document.querySelector("#dispvalue");
var numbers=document.querySelectorAll(".numb-btn");
var stepcounter=document.querySelector("#stepcounter");
var sqrt=document.querySelector("#sqrt");
var lastoper=document.querySelector("#lastoperator");
var message=document.querySelectorAll(".message");
var chkbtns=document.querySelectorAll(".btn-a");
var fnbtns=document.querySelectorAll(".fn-btn");
var trigs=document.querySelectorAll(".trigo");
lastoper.innerHTML="";
var values=[];
var opers=[];
var memoryvals=[];
var memoryopers=[];
var crtvalue="0";
var val=0, oval=0, mval=0, mopers=0;
var value="", digitc=0, decimal=false;
var operators=["/", "*", "%", "+", "-", "="];
var operatoron=false;
var sqreroot=false;
var valueoff=false;
var chkcount=false;
calcdisp.style.display="none";
var laststep=0;
var currentvalue="";
var digit=0;
var grandtotal=0;
var grandcount=0;
var markupon=false;
var func="";
var trigo=false;
function toogledisplay(element){
	if(element.style.display=="none")
		element.style.display="block";
	else
		element.style.display="none";
}

fnbtns[4].addEventListener("click", function(){
	values=[];
	memoryvals=[];
	memoryopers=[];
	mval=0;
	mopers=0;
	opers=[];
	val=0;
	oval=0;
	value="";
	digitc=0;
	decimal=false;
	dispvalue.innerHTML="0";
	stepcounter.innerHTML="0";
	operatoron=false;
	sqreroot=false;
	valueoff=false;
	lastoper.innerHTML="";
	for(i=1;i<message.length;i++)
	message[i].style.display="none";
	chkcount=false;
	crtvalue="0";
	markupon=false;
	func="";
	trigo=false;
});

switchbtn.addEventListener("click", function(){
	values=[];
	opers=[];
	memoryvals=[];
	memoryopers=[];
	mval=0;
	mopers=0;
	val=0;
	oval=0;
	value="";
	digitc=0;
	decimal=false;
	dispvalue.innerHTML="0";
	stepcounter.innerHTML="0";
	toogledisplay(calcdisp);
	operatoron=false;
	valueoff=false;
	lastoper.innerHTML="";
	for(i=0;i<message.length;i++)
	message[i].style.display="none";
	chkcount=false;
	crtvalue="0";
	grandtotal=0;
	markupon=false;
	grandcount=0;
	func="";
	trigo=false;
});

chkbtns[0].addEventListener("click", function(){
	message[4].style.display="none";
	message[3].style.display="none";
	if(Number(stepcounter.innerHTML) >= 1){
		if(chkcount==false){
			crtvalue=dispvalue.innerHTML;
			laststep=Number(stepcounter.innerHTML);
			chkcount=true;
		}
		if(stepcounter.innerHTML==1)
		crntstp=laststep+1;
		else
		crntstp=Number(stepcounter.innerHTML);
		back=--crntstp;
		dispvalue.innerHTML=memoryvals[back-1];
		if(memoryopers[back-2]=="=" || memoryopers[back-2]=='<i class="fas fa-square-root-alt"></i>' || memoryopers[back-2]=="%"){
			message[4].style.display="";
			if(memoryopers[back-1]!="="){
				lastoper.innerHTML=memoryopers[back-1];
				if(back > memoryopers.length)
					lastoper.innerHTML="";
			}
			else
				lastoper.innerHTML="";
		}
		else
		lastoper.innerHTML=memoryopers[back-1];
		stepcounter.innerHTML=back;
		if(lastoper.innerHTML=="undefined")
			lastoper.innerHTML="";
		if(lastoper.innerHTML=="+MU")
			lastoper.innerHTML="+";
		for(i=1;i<=3;i++){
			if(memoryopers[back-i]=="+MU")
				message[3].style.display="";
		}
	}
})
chkbtns[1].addEventListener("click", function(){
	message[4].style.display="none";
	message[3].style.display="none";
	if(Number(stepcounter.innerHTML) >= 1){
		if(chkcount==false){
			crtvalue=dispvalue.innerHTML;
			laststep=Number(stepcounter.innerHTML);
			chkcount=true;
		}
		if(stepcounter.innerHTML==laststep)
		crntstp=0;
		else
		crntstp=Number(stepcounter.innerHTML);
		next=++crntstp;
		dispvalue.innerHTML=memoryvals[next-1];
		if(memoryopers[next-2]=="=" || memoryopers[next-2]=='<i class="fas fa-square-root-alt"></i>' || memoryopers[next-2]=="%"){
			message[4].style.display="";
			if(memoryopers[next-1]!="="){
				lastoper.innerHTML=memoryopers[next-1];
				if(next > memoryopers.length)
					lastoper.innerHTML="";
			}
			else
				lastoper.innerHTML="";
		}
		else
		lastoper.innerHTML=memoryopers[next-1];
		stepcounter.innerHTML=next;
		if(lastoper.innerHTML=="undefined")
			lastoper.innerHTML="";
		if(lastoper.innerHTML=="+MU")
			lastoper.innerHTML="+";
		for(i=1;i<=3;i++){
			if(memoryopers[next-i]=="+MU")
				message[3].style.display="";
		}
	}
})
chkbtns[2].addEventListener("click", function(){
	if(chkcount==false)
	laststep=Number(stepcounter.innerHTML);
	var int=Number(stepcounter.innerHTML);
	if(int==laststep)
	int=0;
	function play(){
		next=++int;
		dispvalue.innerHTML=memoryvals[next-1];
		stepcounter.innerHTML=next;
		if(memoryopers[next-2]=="="){
			message[4].style.display="";
			if(memoryopers[next-1]!="="){
				lastoper.innerHTML=memoryopers[next-1];
				if(next > memoryopers.length)
					lastoper.innerHTML="";
			}
			else
				lastoper.innerHTML="";
		}
		else{
			lastoper.innerHTML=memoryopers[next-1];
			message[4].style.display="none";
		}
		if(Number(stepcounter.innerHTML)!=laststep)
		setTimeout(play, 1000);
	};
	play();
})
chkbtns[3].addEventListener("click", function(){
	calcdisp.style.display="none";
})

fnbtns[0].addEventListener("click", function(){
	if(chkcount==false){
		newvalue="";
		for(i=0;i<(value.length - 1);i++){
			newvalue+=value.charAt(i);
		}	
		value=newvalue;
		dispvalue.innerHTML=value;
		newvalue="";
	}
})

fnbtns[1].addEventListener("click", function(){
	if(valueoff==true){
		memoryopers[mopers]="";
		mopers++;
		valueoff=false;
	}
	stepcounter.innerHTML=Number(stepcounter.innerHTML)+1;
	dispvalue.innerHTML=grandtotal;
	lastoper.innerHTML="";
	value=grandtotal;
	if(operatoron==true)
	operatoron=false;
	message[3].style.display="none";
	message[4].style.display="none";
})

fnbtns[2].addEventListener("click", function(){
	if(markupon==false){
		message[3].style.display="";
		values[val] = Number(value);
		memoryvals[mval]=Number(value);
		digitc=0;
		value="";
		decimal=false;
		val++;
		mval++;
		if(operatoron==true){
			opers.pop();
			oval--;
		}
		message[3].display="";
		opers[oval]="+";
		oval++;
		memoryopers[mopers]="+MU"
		mopers++;
		operatoron=false;
		markupon=true;
	}
})

fnbtns[3].addEventListener("click", function(){
	if(chkcount==false){
		if(operatoron==false){
			if(stepcounter.innerHTML==0){
				value=0;
				stepcounter.innerHTML=1;
			}
			else{
				if(value.charAt(0)!="-"){
					value="-"+value;
					dispvalue.innerHTML=value;
				}
				else{
					value=value.slice(1);
					dispvalue.innerHTML=value;
				}
			}
		}
	}
})
for(i=0;i<3;i++){
	trigs[i].addEventListener("click", function(){
		func=this.innerHTML;
		values=[];
		memoryvals=[];
		memoryopers=[];
		mval=0;
		mopers=0;
		opers=[];
		val=0;
		oval=0;
		value="";
		digitc=0;
		decimal=false;
		operatoron=false;
		sqreroot=false;
		valueoff=false;
		lastoper.innerHTML="";
		for(i=1;i<message.length;i++)
		message[i].style.display="none";
		chkcount=false;
		crtvalue="0";
		markupon=false;	
		dispvalue.innerHTML="0";
		stepcounter.innerHTML="1";
		if(func=="sin");
		message[2].innerHTML=func;
		message[2].style.display="";
		trigo=true;
	});
}

for(i=0;i<numbers.length;i++){
	if(i<12){
		numbers[i].addEventListener("click", function(){
			if(markupon==false){
				message[3].style.display="none";
			}
			if(valueoff==true){
				memoryopers[mopers]="";
				mopers++;
				stepcounter.innerHTML=Number(stepcounter.innerHTML)+1;
				valueoff=false;
			}
			if(chkcount==true){
				dispvalue.innerHTML=crtvalue;
				chkcount=false;
			}
			message[4].style.display="none";
			lastoper.innerHTML="";
			operatoron=false;
			stepcounter.innerHTML=mval + 1;
			num=this.innerHTML;
			if(digitc<12)
				calculate(num, "value");
		})
	}
	else{
		numbers[i].addEventListener("click", function(){
			if(chkcount==true){
				dispvalue.innerHTML=crtvalue;
				chkcount=false;
			}
			if(stepcounter.innerHTML==0)
				stepcounter.innerHTML=1;
			message[4].style.display="none";
			oper=operators[index(this)-12];
			lastoper.innerHTML=oper;
			calculate(oper, "operator");
		})
	}		
}
sqrt.addEventListener("click", function(){
	if(valueoff==true){
		values[val]=Number(resultdisplay);
		val++;
		stepcounter.innerHTML=mval;
	}
	sqreroot=true;
	calculate("=", "operator");
})
function index(obj){
	for(i=0;i<numbers.length;i++)
		if(numbers[i]==obj)
			return i;
}
function calculate(str, operation){
	if(operation === "value"){
		if(digitc === 0 && str=="."){
			value="0.";
			decimal=true;
			digitc += 2;
		}
		if(digitc === 0 && (str=="0" || str=="00"))
			value="";
		else{
			if(str == "."){
				if (decimal != true) {
					value += str;
					decimal=true;
					digitc++;
				}
			}
			else{
				value += str;
				digitc++;
			}
		}
		dispvalue.innerHTML=value;
		if(value==""){
			dispvalue.innerHTML="0";
			digitc=0;
		}
	}
	if(operation === "operator"){
		if(str!== "=" && str!== "%"){
			if(operatoron==true){
				opers.pop();
				oval--;
			}
			else{
				if(valueoff==true){
					values[val]=Number(resultdisplay);
					val++;
					stepcounter.innerHTML=mval;
					valueoff=false;
				}
				else{
					values[val] = Number(value);
					memoryvals[mval]=Number(value);
					digitc=0;
					value="";
					decimal=false;
					val++;
					mval++;
				}
			}
			opers[oval] = str;
			oval++;
			memoryopers[mopers] = str;
			mopers++;
			operatoron=true;
		}
		else{
			if(trigo==true){
				degree=Number(dispvalue.innerHTML);
				memoryvals[0]=degree;
				if(func=="Sin")
				result=Math.sin(degree/180*Math.PI);
				if(func=="Cos")
				result=Math.cos(degree/180*Math.PI);
				if(func=="Tan")
				result=Math.tan(degree/180*Math.PI);
				result=Math.round(result * 10) / 10;
				stepcounter.innerHTML = 2;
				dispvalue.innerHTML=result;
				memoryvals[1]=result;
			}
			else{
				if(valueoff==false){
					message[4].style.display="block";
					lastoper.innerHTML="";
					values[val] = Number(value);
					memoryvals[mval]=Number(value);
					mval++;
					if(sqreroot==false){
						memoryopers[mopers] = str;
						mopers++;
					}
					vc=values.length;
					oc=opers.length;
					total="";
					var y=0;
					if(str!="%"){
						for(x=0; x<vc; x++){
							if(x==vc-1)
							total = total + values[x];
							else{
								total = total + values[x] + opers[y];
								y++;
							}
						}
						var result=eval(total);
					}
					else{
						if(markupon==true){
							for(x=0;x<vc-1;x++){
								if(x==vc-2)
								total = total + values[x];
								else{
									total = total + values[x] + opers[y];
									y++;
								}
							}
							var result=eval(total);
							muper=values[x];
							muval=(100*result)/(100-muper);
							result=muval;
							markupon=false;
						}
						else{
							if(opers[oc-1]=="+" || opers[oc-1]=="-"){
								for(x=0;x<vc-1;x++){
									if(x==vc-2)
									total = total + values[x];
									else{
										total = total + values[x] + opers[y];
										y++;
									}
								}
								var result=eval(total);
								var perval=Number(values[x])/100*result;
								total=result+opers[y]+perval;
								result=eval(total);
							}
							if(opers[oc-1]=="*" || opers[oc-1]=="/"){
								for(x=0; x<vc-1; x++){
									if(x==vc-2)
									total = total + values[x];
									else{
										total = total + values[x] + opers[y];
										y++;
									}
								}
								if(opers[oc-1]=="*")
									total=total+"/100*"+values[x];
								else
									total=total+"*100/"+values[x];
								var result=eval(total);
							}
							if(opers.length==0)
								var result=Number(dispvalue.innerHTML)/100;
						}
					}
				}
				if(sqreroot==true){
					memoryopers[mopers] = '<i class="fas fa-square-root-alt"></i>';
					mopers++;
					result=Number(result);
					if(valueoff==true)
						result=values[val-1];
					if(result<0){
						message[1].style.display="block";
						result=Math.abs(result);
					}
					result=Math.sqrt(result);
				}
				resultdisplay=result.toString();
				if(resultdisplay.length>12)
					resultdisplay=roundoff(resultdisplay);
				dispvalue.innerHTML= resultdisplay;
				memoryvals[mval]=Number(resultdisplay);
				mval++;
				grandtotal+=Math.abs(Number(resultdisplay));
				if(grandcount>=1){
					message[0].style.display="";
				}
				grandcount++;
				stepcounter.innerHTML++;
				valueoff=true;
				values=[];
				opers=[];
				val=0;
				oval=0;
				value="";
				digitc=0;
				decimal=false;
				sqreroot=false;
			}
		}
	}
}

function roundoff(number){
	var totalval="";
	var exponent=false;
	var point=false;
	for(i=0;i<number.length;i++){
		if(number.charAt(i) == 'e'){
			exponent=true;
			break;
		}
	}
	if(exponent==true){
		var totalval2 = number.substring(i, number.length);
		var totalval1 = "";
		for(i=0; i<12-totalval2.length;i++)
			totalval1 += number.charAt(i);
		totalval=totalval1+totalval2;
		return totalval;
	}
	else{
		for(i=0;i<number.length;i++){
			if(number.charAt(i) == '.'){
				point=true;
				break;
			}
		}
		if(point==true){
			totalval=number.substring(0,12);
		}
		else{
			totalval1=number.charAt(0)+".";
			totalval2 = "e+"+(number.length - 1);
			for(i=1; i<11-totalval2.length;i++){
				totalval1 += number.charAt(i);
			} 
			totalval=totalval1+totalval2;
		}
		return totalval;
	}
}