const numBtns	 = document.querySelectorAll('.oprnds');
const operatorBtns = document.querySelectorAll('.oprtrs');
const output	 = document.querySelector('.displayer');

numBtns.forEach(btn => btn.addEventListener('click', numberInput(btn)));
operatorBtns.forEach(btn => btn.addEventListener('click', operatorInput(btn)));

//GETTING KEYBOARD INPUTS**************************************************************************************
document.addEventListener('keydown', (event) => {
		let displayValues = '';
		let btn = event.key;
		if (btn == "1") {
			displayValues += '1';
			output.textContent += displayValues;
		}else if (btn == "2") {
			displayValues += '2';
			output.textContent += displayValues;
		}else if (btn == "3") {
			displayValues += '3';
			output.textContent += displayValues;
		}else if (btn == "4") {
			displayValues += '4';
			output.textContent += displayValues;
		}else if (btn == "5") {
			displayValues += '5';
			output.textContent += displayValues;
		}else if (btn == "6") {
			displayValues += '6';
			output.textContent += displayValues;
		}else if (btn == "7") {
			displayValues += '7';
			output.textContent += displayValues;
		}else if (btn == "8") {
			displayValues += '8';
			output.textContent += displayValues;
		}else if (btn == "9") {
			displayValues += '9';
			output.textContent += displayValues;
		}else if (btn == "0") {
			displayValues += '0';
			output.textContent += displayValues;
		}else if (btn == "+") {
			displayValues += '+';
			output.textContent += displayValues;
		}else if (btn == "-") {
			displayValues += '-';
			output.textContent += displayValues;
		}else if (btn == "*") {
			displayValues += '×';
			output.textContent += displayValues;
		}else if (btn == "/") {
			displayValues += '÷';
			output.textContent += displayValues;
		}else if (btn == "Enter") {
			displayValues = output.textContent;
			let final =	addbits(displayValues);
			output.textContent = final;
		}else if (btn == "Backspace") {
			displayValues = output.textContent;
			let undoTxt = undoStr(displayValues);
			output.textContent = undoTxt;
		}	
		displayValues = output.textContent;
		});

// FINAL CALCCULATION MANAGEMENT ***************************************************************
function addbits(str) {
	var arrStr = str.split('')
	let operators = str.replace(/\s/g, '').match(/[-,+,÷,×]/g)
	let operands = str.replace(/\s/g, '').match(/([0-9\.\s]+)/g)
	 let res = parseFloat(operands.shift());

	for(let i = 0;i < operators.length;i++){
	    let operator = operators[i];
	    let rhs = parseFloat( operands[i]);
	    // console.log(operator)
	    // console.log(rhs)
	    if ( isNaN(parseFloat(rhs))){
		        return ("error")
		    }else if(operator == '×'){
		        res *= rhs
		    }else if(operator == '-'){
		        res -= rhs
		    }else if (operator == '÷'){
		    	if (rhs == 0) {
		    		return 'not possible'
		    	}
		        res /= rhs
		    }else if (operator == '+'){
		        res += rhs;
		    }
	}
	return res;
}

//UNDO BUTTON FUNCTION*****************************************************************************
function undoStr(str){
	let undoStack = str.split('');
	undoStack.pop();
	return undoStack.join('');
}

//GET OPERATOR INPUT FROM USER FUNCTION*********************************************************************** 
function operatorInput(btn){
	return (btn) =>{
		btn.stopPropagation;
		let displayValues = '';
		const classID = btn.target.getAttribute('class');
		if (classID == "oprtrs add") {
			displayValues += '+';
			output.textContent += displayValues;
		}else if (classID == "oprtrs subtract") {
			displayValues += '-';
			output.textContent += displayValues;
		}else if (classID == "oprtrs multiply") {
			displayValues += '×';
			output.textContent += displayValues;
		}else if (classID == "oprtrs divide") {
			displayValues += '÷';
			output.textContent += displayValues;	
		}
	}
}

//GET OPRAND INPUT FROM USER FUNCTION**************************************************************************** 
function numberInput (btn){
	return (btn)=>{
		btn.stopPropagation;
		let displayValues = '';
		let classID = btn.target.getAttribute('class');
		if (classID == "oprnds one") {
			displayValues += '1';
			output.textContent += displayValues;
		}else if (classID == "oprnds two") {
			displayValues += '2';
			output.textContent += displayValues;
		}else if (classID == "oprnds three") {
			displayValues += '3';
			 output.textContent += displayValues;
		}else if (classID == "oprnds four") {
			displayValues += '4';
			output.textContent += displayValues;
		}else if (classID == "oprnds five") {
			displayValues += '5';
			output.textContent += displayValues;
		}else if (classID == "oprnds six") {
			displayValues += '6';
			output.textContent += displayValues;
		}else if (classID == "oprnds seven") {
			displayValues += '7';
			output.textContent += displayValues;
		}else if (classID == "oprnds eight") {
			displayValues += '8';
			output.textContent += displayValues;
		}else if (classID == "oprnds nine") {
			displayValues += '9';
			output.textContent += displayValues;
		}else if (classID == "oprnds zero") {
			displayValues += '0';
			output.textContent += displayValues;
		}else if (classID == 'oprnds decimalPoint') {
			displayValues += '.';
			output.textContent += displayValues;
			btn.disabled = true;
		}else if (classID == 'oprnds equals') {
			displayValues = output.textContent;
			let final =	addbits(displayValues);
			output.textContent = final;
		}else if (classID == 'oprnds clear') {
			output.textContent = '';
		}else {
			displayValues = output.textContent;
			let undoTxt = undoStr(displayValues);
			output.textContent = undoTxt;	
		}
		displayValues = output.textContent;
	}
}