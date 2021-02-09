export const generateENV = (data) => {
    const keys = Object.keys(data);
    let stringStream = '';
    for(let i=0; i < keys.length; i++) {
        stringStream = stringStream + keys[i] + ' = \'' + data[keys[i]] + '\'\r\n';
    }
    return new Blob([stringStream], {type: 'text/plain;charset=utf-8'});
}

export const generateAndDownloadENV = (data, fileName) => {
    const element = document.createElement("a");
    const keys = Object.keys(data);
    let stringStream = '';
    for(let i=0; i < keys.length; i++) {
        stringStream = stringStream + keys[i] + ' = \'' + data[keys[i]] + '\'\r\n';
    }
    const file = new Blob([stringStream], {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = fileName + ".env";
    document.body.appendChild(element);
    element.click();    
}
