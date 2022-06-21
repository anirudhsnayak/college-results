<script>
    import Database from "../scripts/app/database/Database.js";
    import DatabaseQueryResults from "./DatabaseQuery/DatabaseQueryResults.svelte";
    import DatabaseSearch from "./DatabaseSearch.svelte";
    import DatabaseTitle from "./DatabaseTitle.svelte";
    import FaqModal from "./FAQ/FAQModal.svelte";
    import Footer from "./Footer.svelte";
    Database.importDatabase("data/collegeresults_simplify.json");
</script>

<div class="body">
    <FaqModal/>
    <DatabaseTitle/>
    <DatabaseSearch/>
    <DatabaseQueryResults/>
    <Footer/>
</div>

<style type="text/scss">
//background color black
    .body {
        display: flex;
        flex-direction: column;
        background-color: #000000;
        min-height: 100%;
        width: 100%;
        top: 0; left: 0;
    }
</style>

