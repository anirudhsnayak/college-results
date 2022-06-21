export default class DatabaseData{
    static db;
    static initialize(){
        if(this.headers.length != 0){ //initialized
            return this.getQueryList();
        }
        for(let queryType of this.comprehensiveHeaders){
            let finalQueryType : any = "";
            if(typeof queryType != typeof ""){
                finalQueryType = queryType[0];
            } else {
                finalQueryType = queryType;
            }
            this.headers.push(finalQueryType);
        }
        return this.getQueryList();
    }
    static getQueryList(){
        let queryList = {}
        for(let queryType of this.headers){
            queryList[queryType] = "";
        }
        return queryList;
    }
    static headers = [];
    static comprehensiveHeaders = ["Demographics", 
    "Intended Major",
    "Academics",
    "Standardized Testing",
    "Extracurriculars", // /Activities?
    "Awards",  // /Honors?
    ["Letters of Recommendation",
    "LOR"], 
    "Interviews", 
    "Essays", 
    "Acceptances",
    "Waitlists",
    "Rejections",
    "Additional Information"];
}