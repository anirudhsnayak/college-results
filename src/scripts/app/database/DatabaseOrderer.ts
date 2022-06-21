import DatabaseData from "./DatabaseData";
//TODO: Merge different values of the same header into one
export default class DatabaseOrderer{
    static orderDB(db){
        let dbArray = db["db"];
        let orderedDB = [];
        //iterate over the dbArray
        for(let i = 0; i < dbArray.length; i++){
            let dbObject = dbArray[i];
            let tabulatedPost = DatabaseOrderer.tabulatePost(dbObject["selftext"]);
            //delete dbObject["selftext"];
            dbObject["tabulatedtext"] = tabulatedPost;
            dbObject["lowerselftext"] = dbObject["selftext"].toLowerCase();
            orderedDB.push(dbObject);
        }
        return orderedDB;
    }
    static getHeader(detectedPost){
        for(let i = 0; i<detectedPost.length; i++){
            if(detectedPost[i]=='#'){
                return [detectedPost.substring(0, i), detectedPost.substring(i+1)];
            }
        }
        return "Undetected";
    }
    static tabulatePost(postArg){
        let post : any = "Introduction#" + postArg;
        //post is a string of the form:
        let posts = [];
        let headers = DatabaseData.comprehensiveHeaders;
        //iterate over the headers and split the post into an array of strings
        let detectedHeaders = []
        for(let header of headers){
            if(typeof header == "string"){
                 //split the post based on the header and add it to posts
                if(post.includes(header)){
                    detectedHeaders.push(header);
                    post = post.replaceAll(header, "$p3ww5l9JHgL7lHG6z5w6Xsreas3Zo3$"+header+"#"); //random hash delimiter
                }
            } else {
                for(let subheader of header){
                    if(post.includes(subheader)){
                        detectedHeaders.push(header[0]);
                        post = post.replaceAll(subheader, "$p3ww5l9JHgL7lHG6z5w6Xsreas3Zo3$"+header[0]+"#"); //random hash delimiter
                    }
                }
            }
           
        }
        posts = post.split("$p3ww5l9JHgL7lHG6z5w6Xsreas3Zo3$");
        //convert the array of strings to an array of objects
        let postObjects = [];
        for(let i = 0; i < posts.length; i++){
            let postArray = this.getHeader(posts[i]);
            if(postArray[0]=="U"){
                //something clearly went wrong
                continue;
            }
            postObjects.push({
                header: postArray[0],
                data: postArray[1].toLowerCase()
            });
        }
        return postObjects;
    }
}