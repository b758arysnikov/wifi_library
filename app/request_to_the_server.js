
 export class ServerRequest {
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

