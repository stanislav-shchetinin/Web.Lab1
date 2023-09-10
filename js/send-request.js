const sendRequest = (form) => {
    let formData = new FormData(form);
    let arguments = "?";
    for (let pair of formData.entries()) {
        arguments += pair[0] + "=" + pair[1] + "&";
    }
    arguments = arguments.substring(0, arguments.length - 1);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://se.ifmo.ru/~s367658/web-lab1/php/handler.php' + arguments);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        } else {
            let response = JSON.parse(xhr.responseText);
            responseHandler(response);
        }
    };
}