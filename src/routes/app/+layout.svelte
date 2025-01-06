<script>
    let { children } = $props();
    import Sidenavbar from '$lib/components/Sidenavbar/Sidenavbar.svelte';
    import Topnavbar from '$lib/components/Topnavbar/Topnavbar.svelte';
</script>


<div class="main_outer_layout_container">
    <div class="layout_container">
        <div class="sidenavbar_container">
            <Sidenavbar />
        </div>

        <div class="actual_outer_content_container">
            <div class="topnavbar_container">
                <Topnavbar />
            </div>

            <div class="actual_content_container">
                {@render children()}
            </div>
        </div>
    </div>
</div>

<style>
    *{
        /* background-color: #f6f8fc; */
        /* background-color: #acdce9; */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #fff;
        font-family: "Poppins", sans-serif;
    }

    .main_outer_layout_container .layout_container .actual_outer_content_container{
        margin-left: 265px;
        margin-right: 10px;
    }

    .main_outer_layout_container .layout_container .actual_outer_content_container .actual_content_container{
        margin-top: 4.6rem;
    }
</style>