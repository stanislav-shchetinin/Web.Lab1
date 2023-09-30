const validation = () => {  
    const form = document.querySelector('.input-form');
    const inputY = document.querySelector('.input-text');
    const selectorR = document.querySelector('.r-select');
    
    const checkInputY = (inputY) => {
        let y = inputY.value.replace(",", ".");
        let regex = new RegExp(/^-?(?:3(?:\.0+)?|[0-2](?:\.[0-9]+)?|\.[0-9]+)$/);
        return regex.test(y.toString());
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
            sendRequest(form);
        }
    })
}
validation();