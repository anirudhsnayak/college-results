<script>
    import ModalHandler from "../../scripts/app/modal/ModalHandler.js";
    let rendered = false;
    function toggleRender(){
        rendered = !rendered;
    }
    function toggleModal(){
        ModalHandler.triggerFAQ();
    }
    ModalHandler.registerFAQCallback(toggleRender);
</script>

<div class={"render-" + rendered}>
    <div class="modal-box">
        <div class="modal-title-box">
            <h1 class="modal-title">About</h1>
            <div class="modal-close-button" on:click={toggleModal}> </div>
        </div>
        <div class = "modal-content-box">
        <div class="modal-content">
            <p>
                As the name implies, this is a college application results viewer for the US. 
                The data is sourced from <a href="https://www.reddit.com/r/collegeresults">r/collegeresults</a>.
            </p>
            <h3>How do I use this?</h3>
            <p>
               Type queries into any of the search criteria, and click search to search. 
               The results will be displayed below. You can switch through the pages of results,
               and view the content of each post by opening the dropdown.
               <br> <br>
               The queries are 
                combined using AND logic. Commas separate multiple queries under the same search criteria. 
               All queries are case insensitive. Leading and trailing spaces are cut off from the query.
               <br> <br>
               The search criteria apply only if a heading for the query is detected (if the author of 
               the reddit post followed the standard template). In the cases where a heading is not 
               detected, you can filter by all data by a total search.
               <br> <br>
               An issue with direct search is that you may get unnecessary results. For example, 
               directly searching for 'MIT' could cause a result with 'admit' to appear. To 
               circumvent this, you can surround 'MIT' with spaces, and place double quotes around that 
               to prevent the spaces from being trimmed from the query (" MIT "). All queries surrounded
               by quotes remain case insensitive. 
               <br> <br>
               In some cases, you may want to search with a comma or quote. To do so, you can type a backslash
               directly before to ignore it when delimiting (\, or \"). 
            </p>
            <h3>Why does this exist?</h3>
            <p>
                The idea seemed interesting enough! :P <br>
                Of course, one could just directly search the subreddit, but hopefully this allows for 
                a better searching tool than Reddit search, given the multiple searching criteria options
                here. There's also the advantage of being able to see posts on this page itself, rather than
                redirecting to the individual post each time, and being able to see removed results.
             </p>
        </div>
     </div>
    </div>
</div>


<style>
    h3{
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.75rem;
    }
    .render-true{
        position: fixed;
        z-index: 1;
        height: 100%;
        width: 100%;
        display: grid;
        justify-content: center;
        grid-template-columns: 80%;
        grid-template-rows: 100%;
        align-items: center;
        background-color: rgba(0,0,0,0.75);
    }
    .render-false{
        display: none;
    }
    .modal-box{
        height: 70%;
        width: 100%;
        background-color: black;
        border: 3px solid white;
        border-radius: 2rem;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        display: grid;
    }
    .modal-title{
        text-align: center;
        color: white;
        font-size: 3rem;
        font-weight: bold;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        grid-area: title;
        grid-column: 1 / -1;
    }
    .modal-content-box{
        overflow-y: scroll;
        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-right: 1px;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: black;
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .modal-content{
        font-size: 1.25rem;
        padding-top: 0.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        color: white;
        
    }
    .modal-title-box{
        display: grid;
        grid-template-columns: auto auto;
        grid-template-areas: "title close";
        align-items: center;
        justify-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .modal-close-button{
        /* make it an x */
        background-image: url("images/close.png");
        height: 2rem;
        width: 2rem;
        background-position: center;
        background-size: auto 2rem;
        justify-self: end;
        background-repeat: no-repeat;
        margin-right: 3rem;
        grid-area: close;
    }
    .modal-close-button:hover{
        cursor: pointer;
        background-color: lightcoral;
        background-blend-mode: multiply;
    }
</style>