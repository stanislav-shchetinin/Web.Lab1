const validation = (): string => {
    const inputY: HTMLInputElement = document.querySelector('.input-text');
    const selectorR: HTMLInputElement = document.querySelector('.r-select');
    const regRange: RegExp = /^-?(?:3(?:\.0+)?|[0-2](?:\.[0-9]+)?|\.[0-9]+)$/
    const checkInputY = (inputY: HTMLInputElement): boolean => {
        let y: string = inputY.value.replace(",", ".");
        let regex: RegExp = new RegExp(regRange);
        return regex.test(y.toString());
    }
    const checkSelectorR = (selectorR: HTMLInputElement): boolean => {
        return selectorR.value !== "";
    }

    if (!checkInputY(inputY)) {
        return "Значение Y должно быть от -3 до 3 (дробные значения вводите через точку, например, 2.9)";
    } else if (!checkSelectorR(selectorR)) {
        return "Не выбран R";
    } else {
        return "OK";
    }
}