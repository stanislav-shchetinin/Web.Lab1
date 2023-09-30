const sendRequest = () => {
    const valid = validation();
    if (valid !== "OK") {
        alert(valid);
    } else {

        const btnX = document.querySelectorAll('.radio-x');
        const inputY = document.querySelector('.input-text');
        const selectorR = document.querySelector('.r-select');

        const checkedRadio = () =>{
            let res;
            btnX.forEach((item) => {
                if (item.checked) {
                    res = item.value;
                }
            })
            return res;
        }
        function formatParams( params ){
            return "?" + Object
                .keys(params)
                .map(function(key){
                    return key+"="+encodeURIComponent(params[key])
                })
                .join("&")
        }

        const params = {
            X: checkedRadio(),
            Y: inputY.value,
            R: selectorR.value
        }

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://se.ifmo.ru/~s367658/web-lab1/php/handler.php' +
        formatParams(params));

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();

        xhr.onload = function() {
            if (xhr.status != 200) {
                alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                responseHandler(xhr.responseText);
            }
        };
    }
}