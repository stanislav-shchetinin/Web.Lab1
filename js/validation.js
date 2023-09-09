const validation = () => {  
    const form = document.querySelector('.input-form');
    const inputY = document.querySelector('.input-text');
    const selectorR = document.querySelector('.r-select');
    
    const checkInputY = (inputY) => {
        return inputY.value >= -3 && inputY.value <= 3;
    }
    const checkSelectorR = (selectorR) => {
        return selectorR.value !== "";
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!checkInputY(inputY)){
            alert("Значение Y должно быть от -3 до 3 (дробные значения вводите через точку, например, 2.9)");
        } else if (!checkSelectorR(selectorR)){
            alert("Не выбран R");
        } else {
            form.submit();
            console.log(form.response);
        }

        
    })
}
validation();