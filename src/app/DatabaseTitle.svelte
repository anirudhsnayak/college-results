<script>
    import ModalHandler from "../scripts/app/modal/ModalHandler";
    function triggerModal(){
        ModalHandler.triggerFAQ();
    }
</script>

<div class="title-area">
    <h1>College Results Viewer</h1>
    <div class="faqBubble" on:click="{triggerModal}"> </div>
</div>



<style>
    h1{
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        grid-area: title;
        color: rgb(230, 230, 230);
        justify-self: center;
        padding-bottom: 0.25rem;
        grid-column: 1 / -1;
    }
    .title-area{
        display: grid;
        grid-template-columns: auto auto; 
        grid-template-areas: "title faq";
        align-items: center;
        padding-top: 1rem;
    }
    .faqBubble{
        background-image: url("../images/faq_icon.png");
        background-position: center;
        background-size: auto 3rem;
        justify-self: end;
        background-repeat: no-repeat;
        margin-right: 1.5rem;
        grid-area: faq;
        filter: invert(100%);
        height: 3rem;
        width: 3rem;
        box-sizing: border-box;
        border-radius: 100%;
        background-color: white;
        background-blend-mode: multiply;
    }
    .faqBubble:hover{
        cursor: pointer;
        filter: invert(0%);
        border: 4px solid white;
    }
</style>