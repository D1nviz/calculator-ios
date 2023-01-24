let firsValue = '';
let secondValue = '';
let operator = '';
let equalAction = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '÷', '%', '±'];

const out = document.querySelector('.calculator-screen p');

function allClear() {
    firsValue = '';
    secondValue = '';
    operator = '';
    equalAction = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = allClear;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (secondValue === '' && operator === '') {
            firsValue += key;
            out.textContent = firsValue;
        } else if (firsValue !== '' && secondValue !== '' && equalAction) {
            secondValue = key;
            equalAction = false;
            out.textContent = secondValue;
        } else {
            secondValue += key;
            out.textContent = secondValue;

        }
        return;
    }
    if (action.includes(key)) {
        operator = key;
        out.textContent = operator;
        return;
    }
    if (key === '=') {
        if (secondValue == '') {
            secondValue = firsValue;
        }
        switch (operator) {
            case '+':
                firsValue = (+firsValue) + (+secondValue);
                break;
            case '-':
                firsValue = firsValue - secondValue;
                break;
            case '÷':
                if (secondValue == 0) {
                    out.textContent = 'Error';
                    firsValue = '';
                    secondValue = '';
                    operator = '';
                    return;
                }
                firsValue = firsValue / secondValue;
                break;
            case '×':
                firsValue = firsValue * secondValue;
                break;
            case'%':
                firsValue = firsValue / 100 * secondValue;
                break;
            case'±':

                firsValue = firsValue * (-1);
                break;
            default:
                alert("Please, choose numbers and operation");
                break;

        }
        if(!Number.isInteger(firsValue)) firsValue = firsValue.toFixed(2);
        equalAction = true;
        out.textContent = firsValue;
    }
}