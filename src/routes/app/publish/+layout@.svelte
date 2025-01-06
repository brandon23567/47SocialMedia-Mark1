<script>
    let { children } = $props();
    import SmallSidenavbar from '$lib/components/SmallSidenavbar/SmallSidenavbar.svelte';
</script>

<div class="main_outer_publish_page_layout_container">
    <div class="publish_page_layout_container">
        <div class="small_sidenavbar_container">
            <SmallSidenavbar />
        </div>

        <div class="actual_outer_content_container">
            {@render children()}
        </div>
    </div>
</div>

<style>
    .main_outer_publish_page_layout_container .publish_page_layout_container .actual_outer_content_container{
        margin-left: 85px;
        margin-right: 10px;
    }
</style>