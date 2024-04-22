
class ServerRequest {
    constructor(url){
        this.url = url;
    }

    async fethData() {
        try {
            const response = await fetch(this.url);
            if(response.ok){
                console.log("Подключение к серверу успешно!")
            }
            const data = await response.json();
            return data
        } catch {
            console.error(error);
        }
    }
}

const urlData = "https://apidata.mos.ru/v1/datasets/60788/rows?api_key=553083a7-1c08-4000-a53c-9ab2318390e7";
const serverRequest = new ServerRequest(urlData);

serverRequest.fethData()
    .then(data => console.log(data));