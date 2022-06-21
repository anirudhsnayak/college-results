import DatabaseData from "./DatabaseData";
import DatabaseOrderer from "./DatabaseOrderer";
import JSONParser from "../../utils/JSONParser";
import DatabaseQuery from "./DatabaseQuery";
export default class Database{
    static initialize(){
        return DatabaseData.initialize();
    }
    static importDatabase(filePath){
        let dbPromise = JSONParser.importJSON(filePath);
        dbPromise.then(function(db){
            let orderedDb = DatabaseOrderer.orderDB(db);
            DatabaseData.db = orderedDb;
        }).catch(e => console.log(e.name));
    }
    static queryDB(totalQuery, queryList){
        DatabaseQuery.queryDB(totalQuery, queryList);
    }
    static getQueryResult(){
        return DatabaseQuery.queryResult;
    }
    static subscribeQuery(subscriber){
        DatabaseQuery.subscribe(subscriber);
    }
}