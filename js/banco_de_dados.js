function writeFile(key, value){
    window.localStorage.setItem(key, JSON.stringify(value));
}

function readFile(key){
    var entrada = window.localStorage.getItem(key);
    var content = JSON.parse(entrada);

    return content;
}