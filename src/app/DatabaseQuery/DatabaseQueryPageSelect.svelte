<script>
    export let page;
    export let totalPages;
    function updatePage(){
        dispatch('pageUpdate', {currentPage, totalPages});
    }
</script>

<h1>Page {page+1} of {totalPages}</h1>

<style>

</style>