import * as marked from "marked";
import * as DOMPurify from "dompurify";
export default class DatabaseQuerySanitizer{
    static sanitizeTitle(title){
        return DOMPurify.sanitize(title);
    }
    static sanitizeText(text){
        return DOMPurify.sanitize(marked.parse(text));
    }
}