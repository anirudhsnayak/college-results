import DatabaseData from "./DatabaseData";
export default class DatabaseQuery{
    static queryResult;
    static subscribers = [];
    static subscribe(subscriber){
        this.subscribers.push(subscriber);
    }
    static update(){
        for(let subscriber of this.subscribers){
            subscriber.update();
        }
    }
    static queryDB(totalQuery, queryList){
        this.queryResult = DatabaseData.db;
        console.log("queryList", queryList);
        if(this.queryResult == undefined){
            return;
        }
        for(let queryType of DatabaseData.headers){
            let queryString = queryList[queryType];
            this.refineQueryComma(queryType, queryString);
        }
        this.refineQueryAllComma(totalQuery);
        console.log(this.queryResult);
        this.update();
    }
    static sanitizedQueries(queryString){
        let queries = queryString.split(",");
        //if any query ends in a backslash, merge it with the next one
        for(let i = 0; i < queries.length - 1; i++){
            if(queries[i].endsWith("\\")){
                queries[i] = queries[i].substring(0, queries[i].length - 1) + "," + queries[i + 1];
                queries.splice(i + 1, 1);
            }
        }   
        for(let i = 0; i < queries.length; i++){
            queries[i] = queries[i].trim();
        }
        //if first and last characters of a query are quotes, remove them
        for(let i = 0; i < queries.length; i++){
            if(queries[i].startsWith("\"") && queries[i].endsWith("\"")){
                queries[i] = queries[i].substring(1, queries[i].length - 1);
            }
        }
        //remove all backslashes except backslashes directly after a backslash
        for(let i = 0; i < queries.length; i++){
            let query = queries[i];
            let queryLength = query.length;
            for(let j = 0; j < queryLength; j++){
                if(query[j] == "\\"){
                    query = query.substring(0, j) + query.substring(j + 1);
                    queryLength--;
                }
            }
            queries[i] = query;
        }
        return queries;
    }
    static refineQueryComma(queryType, queryString){
        let queries = this.sanitizedQueries(queryString);
        for(let query of queries){
            this.refineQuery(queryType, query);
        }
    }
    static refineQueryAllComma(queryString){
        let queries = this.sanitizedQueries(queryString);
        for(let query of queries){
            this.refineQueryAll(query);
        }
    }
    static refineQuery(queryType, query){
        let refinedQueryResult = []
        if(query==""){
            return;
        }
        for(let post of this.queryResult){
            let tabulatedPost = post["tabulatedtext"];
            for(let datapoint of tabulatedPost){
                if(datapoint["header"] == queryType){
                    if(datapoint["data"].includes(query.toLowerCase())){
                        refinedQueryResult.push(post);
                    }
                    break; //supposedly this works?
                }
            }
        }
        this.queryResult = refinedQueryResult;
    }
    static refineQueryAll(query){
        let refinedQueryResult = []
        if(query==""){
            return this.queryResult;
        }
        for(let post of this.queryResult){
            let allPostData = post["lowerselftext"];
            if(allPostData.includes(query.toLowerCase())){
                refinedQueryResult.push(post);
            }
        }
        this.queryResult = refinedQueryResult;
    }
}