<script>
    import Database from "../scripts/app/database/Database.js";
    let queryList = Database.initialize(); //to be updated by reactivity
    let totalQuery = "";
    function queryDB(){
        Database.queryDB(totalQuery, queryList);
    }

</script>

<div class="searchContainer">
    <!--Make sure Academics & Standardized Testing have filterable ranges-->
    <!--LoR, Interviews, and Essays are hard to define so we're not filtering them-->
    <form class="searchForm">
        <div class="searchBarContainer">
            <span class="headingText">Demographics</span>
            <input type="text" class="searchBar" placeholder="Filter by demographics (comma delimited)" bind:value={queryList["Demographics"]}/>
        </div>
        <div class="searchBarContainer">
            <span class="headingText">Major:</span>
            <input type="text" class="searchBar" placeholder="Filter by major (comma delimited)" bind:value={queryList["Intended Major"]}/>
        </div>
        <div class="searchBarContainer">
            <span class="headingText">Courseload:</span>  <!--Really academics-->
            <input type="text" class="searchBar" placeholder="Filter by courses (comma delimited)" bind:value={queryList["Academics"]}/>
        </div>
        <div class="searchBarContainer">
            <span class="headingText">Extracurriculars:</span>
            <input type="text" class="searchBar" placeholder="Filter by extracurriculars (comma delimited)" bind:value={queryList["Extracurriculars"]}/>
        </div>
        <div class="searchBarContainer">
            <span class="headingText">Awards:</span>
            <input type="text" class="searchBar" placeholder="Filter by awards (comma delimited)" bind:value={queryList["Awards"]}/>
        </div>
        <div class="searchBarContainer">
            <span class="headingText">Acceptances:</span>
            <input type="text" class="searchBar" placeholder="Filter by acceptances (comma delimited)" bind:value={queryList["Acceptances"]}/>
        </div>
        <div class="searchBarContainer">
            <span class="headingText">Waitlists:</span>
            <input type="text" class="searchBar" placeholder="Filter by waitlists (comma delimited)" bind:value={queryList["Waitlists"]}/>
        </div>
        <div class="searchBarContainer">
            <span class="headingText">Rejections:</span>
            <input type="text" class="searchBar" placeholder="Filter by rejections (comma delimited)" bind:value={queryList["Rejections"]}/>
        </div>
        <!--This is referring to a comprehensive search of the plaintext-->
        <div class="searchBarContainer">
            <span class="headingText">Total Search:</span>
            <input type="text" class="searchBar" placeholder="Filter by all data (comma delimited)" bind:value={totalQuery}/>
        </div>
    </form>
    <button class="searchButton" on:click="{queryDB}">Search</button>
</div>
    


<style lang="scss">
    //TODO: fix the css mess
    //center the search bar
    .headingText{
        color: white;
        font-size: 1.35rem;
        width: 16rem;
    }
    .searchContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        width: 100%;
    }
    .searchForm{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    .searchBarContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(85% - 2rem);
        max-width: 35rem;
        margin-bottom: 0.5rem;
    }
    .searchBar{
        //center search text
        padding: 1rem;
        border: 2px solid gray;
        border-radius: 3rem;
        background-color: white;
        margin: 0px;
        margin-left: 0.5rem;
        height: 2rem;
        width: 100%;
        max-width: 30rem;
    }
    .searchButton{
        width: 10rem;
        margin: 5px;
        margin-bottom: 1rem;
        border: 2px solid white;
    }
    .searchButton:hover{
        cursor: pointer;
        color: white;
        background-color: black;
        //transition both the color and background-color
        transition: all 0.1s ease-out;
    }
</style>