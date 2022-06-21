export default class ModalHandler{
    static FAQCallback;
    static triggerFAQ(){
        this.FAQCallback();
    }
    static registerFAQCallback(callback){
        this.FAQCallback = callback;
    }
}