export default class JSONParser {
    //use fetch to import json file
    static importJSON(filePath) {
        return new Promise((resolve, reject) => {
            fetch(filePath)
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}