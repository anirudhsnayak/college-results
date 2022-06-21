<script>
    import Database from "../../scripts/app/database/Database";
    import DatabaseQueryResult from "./DatabaseQueryResult.svelte";
    import DatabaseQueryPageSelect from "./DatabaseQueryPageSelect.svelte";
    const pageSize = 10;
    let updated = false;
    let queries = [];
    let displayedQueries = [];
    let currentPage = 0;

    //make a function to change the displayed queries based on page
    function pickDisplayedQueries(page) {
    let start = page * pageSize;
    let end = start + pageSize;
    //check if the end is greater than the length of the queries
    if (end > queries.length) {
        end = queries.length;
    }
    return queries.slice(start, end);
    }
    function update(){
        updated = true;
        queries = Database.getQueryResult();
        displayedQueries = pickDisplayedQueries(currentPage);
    }
    Database.subscribeQuery({update});
</script>
{#if queries.length === 0 && updated}
    <div class="results">
        <h1>No results found</h1>
    </div>
{:else if !updated}
<div class="results">
    <h1>Type in a query and click search!</h1>
</div>
{:else}
    <div class="results">
        <h1>{queries.length} results </h1>
        <DatabaseQueryPageSelect page={currentPage} totalPages= {Math.ceil(queries.length / pageSize)}/>
        <br>
    </div>
{/if}

{#each displayedQueries as query}
<DatabaseQueryResult title="{query.author + ": " + query.title}" link="{query.full_link}" selftext="{query.selftext}"/>
{/each}


<style type="text/scss">
    .results{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        color: white;
        margin-bottom: 10px;
    }   
</style>