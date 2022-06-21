<script>
    export let page;
    export let totalPages;
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
    function changePage(pageIncreaseParam){
        dispatch('pageChange', {
			pageIncrease: pageIncreaseParam
		});
    }
</script>

<div class="pageSelect">
    <div class="wrapper" on:click={() => changePage(-10)}>
        <div class="move retreat ten"></div>
    </div>
    <div class="wrapper" on:click={() => changePage(-1)}>
        <div class="move retreat one"></div>
    </div>
    <h1 class="pageText">Page {page+1} of {totalPages}</h1>
    <div class="wrapper" on:click={() => changePage(1)}>
        <div class="move one"></div>
    </div>
    <div class="wrapper" on:click={() => changePage(10)}>
        <div class="move ten"></div>
    </div>
</div>



<style>
    .pageSelect{
        display: flex;
        width: 25rem;
        align-items: center;
        justify-content: center;
    }
    .pageText{
        flex: 0 0 auto;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    .wrapper{
        height: 2rem;
        height: 2rem;
    }
    .move{
        flex: 0 1 auto;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 0.1rem;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        margin-top: 0.25rem;
        background-blend-mode: multiply;
    }
    .wrapper:hover .move{
        background-color: lightcoral;
        cursor: pointer;
    }
    .retreat{
        transform: rotate(180deg);
        margin-top: 0.35rem;
    }
    .ten{
        background-image: url("../images/arrowRight1.png");
        background-size: 1.5rem 1.6rem;
        width: 1.5rem;
        height: 1.6rem;
    }
    .one{
        background-image: url("../images/arrowRight0.png");
        background-size: 1rem 1.6rem;
        width: 1rem;
        height: 1.6rem;
    }
</style>