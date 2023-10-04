const validation = () => {
    const inputY = document.querySelector('.input-text');
    const selectorR = document.querySelector('.r-select');
    const regRange = /^-?(?:3(?:\.0+)?|[0-2](?:\.[0-9]+)?|\.[0-9]+)$/
    const checkInputY = (inputY) => {
        let y = inputY.value.replace(",", ".");
        let regex = new RegExp(regRange);
        return regex.test(y.toString());
    }
    const checkSelectorR = (selectorR) => {
        return selectorR.value !== "";
    }

    if (!checkInputY(inputY)){
        return "Значение Y должно быть от -3 до 3 (дробные значения вводите через точку, например, 2.9)";
    } else if (!checkSelectorR(selectorR)){
        return "Не выбран R";
    } else {
        return "OK";
    }
}