<script>
    import DatabaseQuerySanitizer from "../../scripts/app/database/DatabaseQuerySanitizer";
    import Database from "../../scripts/app/database/Database";
    export let title;
    export let link;
    export let selftext;
    let opened = false;
    function toggle(){
        opened = !opened;
    }
    function update(){
        opened = false; 
    }
    Database.subscribeQuery({update});
</script>

<div class = "resultBoxContainer">
    <div class = "resultBox">
        <div class = "titleResultBox">
            <span class = "titleText">{DatabaseQuerySanitizer.sanitizeTitle(title)}</span>
            <svg on:click = {toggle} class = "triangle triangle-{opened}" width="40" height="40">
                <polygon points="0,0 0,40 40,20"/>
        </div>
        <div class = bodyText-{opened}>
            <div class = whiteLine/>
            <a href = {link} target="_blank">Original Reddit Post</a>
            <div class = whiteLine style="height:1.5px"/>
            <!--Extremely dangerous, but preliminary sanitization is done-->
            {@html DatabaseQuerySanitizer.sanitizeText(selftext)}
        </div>
    </div> 
    <!--an svg of a black triangle pointing right-->
    
</div>


<style type="text/scss">
    a{
        text-decoration: underline;
    }
    a:hover{
        text-decoration: none;
    }
    .whiteLine{
        width: calc(100% + 2.1rem);
        margin-left: -1.1rem;
        height: 1px;
        background-color: white;
        margin-top: 0.75rem; margin-bottom: 0.5rem;
    }
    .bodyText-true{
        margin-bottom: 1rem;
    }
    .bodyText-false{
        display: none;
    }
    .titleText{
        flex: 0 2 auto;
        max-width: calc(100% - 4rem);
    }
    .resultBoxContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    .resultBox{
        width: calc(85% - 2rem);
        max-width: 35rem;
        border: 3px solid white;
        border-radius: 2rem;
        padding: 1rem;
        margin: 0;
        color: white;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .titleResultBox{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100%;
    }
    .triangle{
        flex: 0 1 40px;
        width: 40px;
        height: 40px;
        fill: lightgray;
        stroke: black;
        stroke-width: 1;
        transform: scaleY(0.7) rotate(90deg);
        //background-color is transparent
        background-color: transparent;
        padding: 0;
        margin: 0;
    }
    .triangle:hover{
        cursor: pointer;
    }
    .triangle-true{
        transform: scaleY(0.7) rotate(90deg);
    }
    .triangle-false{
        transform: scaleX(0.7) rotate(0deg);
    }
</style>