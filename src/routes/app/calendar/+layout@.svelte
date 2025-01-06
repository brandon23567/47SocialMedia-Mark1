<script>
    let { children } = $props();
    import SmallSidenavbar from '$lib/components/SmallSidenavbar/SmallSidenavbar.svelte';
</script>

<div class="main_outer_calendar_page_layout_container">
    <div class="calendar_page_layout_container">
        <div class="small_sidenavbar_container">
            <SmallSidenavbar />
        </div>

        <div class="outer_actual_content_container">
            <div class="actual_content_container">
                {@render children() }
            </div>
        </div>
    </div>
</div>

<style>
    .main_outer_calendar_page_layout_container .calendar_page_layout_container .outer_actual_content_container{
        margin-left: 85px;
        margin-right: 10px;
    }
</style>