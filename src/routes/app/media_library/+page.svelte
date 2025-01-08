<script>
    import ListViewIcon from "$lib/images/list.png";
    import GridViewIcon from "$lib/images/layout.png";
    import TestImage1 from "$lib/images/test_media_library_images/test_image1 (1).jpg";
    import TestImage2 from "$lib/images/test_media_library_images/test_image1 (1).png";
    import TestImage3 from "$lib/images/test_media_library_images/test_image1 (2).jpg";
    import TestImage4 from "$lib/images/test_media_library_images/test_image1 (2).png";
    import TestImage5 from "$lib/images/test_media_library_images/test_image1 (3).png";
</script>

<div class="mian_outer_media_library_page_container">
    <div class="media_library_page_container">
        <h2> Media Library</h2>

        <div class="extra_functionality_btns_container">
            <div class="extra_btns_leftside">
                <button class="add_new_idea_btn">+ Upload File</button>
            </div>

            <div class="extra_btns_rightside">
                <button class="list_view_btn">
                    List View
                    <img src={ListViewIcon} class="list_view_icon_btn" alt="list view btn" />
                </button>
                <button class="grid_view_btn">
                    Grid View
                    <img src={GridViewIcon} class="grid_view_icon_btn" alt="grid view btn" />
                </button>
            </div>
        </div>

        <div class="upload_files_container">
            <div class="single_file_container">
                <div class="single_file_toppart">
                    <img src={TestImage1} class="uploaded_media_library_image" alt="media library content" />
                </div>
                <div class="single_file_bottompart">
                    <h4 class="file_title">This is the title of the file</h4>
                    <p class="file_date_uploaded">date uploaded: 22/10/2024</p>

                    <!-- <div class="uploaded_file_categories">
                        <div class="uploaded_file_single_category">Category 1</div>
                        <div class="uploaded_file_single_category">Category 2</div>
                        <div class="uploaded_file_single_category">Category 3</div>
                    </div> -->
                </div>
            </div>

            <div class="single_file_container">
                <div class="single_file_toppart">
                    <img src={TestImage2} class="uploaded_media_library_image" alt="media library content" />
                </div>
                <div class="single_file_bottompart">
                    <h4 class="file_title">This is the title of the file</h4>
                    <p class="file_date_uploaded">date uploaded: 22/10/2024</p>

                    <!-- <div class="uploaded_file_categories">
                        <div class="uploaded_file_single_category">Category 1</div>
                        <div class="uploaded_file_single_category">Category 2</div>
                        <div class="uploaded_file_single_category">Category 3</div>
                    </div> -->
                </div>
            </div>

            <div class="single_file_container">
                <div class="single_file_toppart">
                    <img src={TestImage3} class="uploaded_media_library_image" alt="media library content" />
                </div>
                <div class="single_file_bottompart">
                    <h4 class="file_title">This is the title of the file</h4>
                    <p class="file_date_uploaded">date uploaded: 22/10/2024</p>

                    <!-- <div class="uploaded_file_categories">
                        <div class="uploaded_file_single_category">Category 1</div>
                        <div class="uploaded_file_single_category">Category 2</div>
                        <div class="uploaded_file_single_category">Category 3</div>
                    </div> -->
                </div>
            </div>

            <div class="single_file_container">
                <div class="single_file_toppart">
                    <img src={TestImage4} class="uploaded_media_library_image" alt="media library content" />
                </div>
                <div class="single_file_bottompart">
                    <h4 class="file_title">This is the title of the file</h4>
                    <p class="file_date_uploaded">date uploaded: 22/10/2024</p>

                    <!-- <div class="uploaded_file_categories">
                        <div class="uploaded_file_single_category">Category 1</div>
                        <div class="uploaded_file_single_category">Category 2</div>
                        <div class="uploaded_file_single_category">Category 3</div>
                    </div> -->
                </div>
            </div>

            <div class="single_file_container">
                <div class="single_file_toppart">
                    <img src={TestImage5} class="uploaded_media_library_image" alt="media library content" />
                </div>
                <div class="single_file_bottompart">
                    <h4 class="file_title">This is the title of the file</h4>
                    <p class="file_date_uploaded">date uploaded: 22/10/2024</p>

                    <!-- <div class="uploaded_file_categories">
                        <div class="uploaded_file_single_category">Category 1</div>
                        <div class="uploaded_file_single_category">Category 2</div>
                        <div class="uploaded_file_single_category">Category 3</div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @import "./media_library.css";
</style>