module.exports = new EnvClass();

class EnvClass {
    generateENV(data) {
        return new Blob(data, {type: 'text/plain;charset=utf-8'});
    }
}