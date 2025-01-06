<script>
    import FacebookIcon from "$lib/images/social_profiles_icon_images/facebook.png";
    import InstagramIcon from "$lib/images/social_profiles_icon_images/social.png";
    import TiktokIcon from "$lib/images/social_profiles_icon_images/tik-tok.png";
    import YoutubeIcon from "$lib/images/social_profiles_icon_images/youtube.png";
    import LinkedinIcon from "$lib/images/social_profiles_icon_images/linkedin.png";
    import TwitterIcon from "$lib/images/social_profiles_icon_images/logos.png"
</script>

<div class="main_outer_publish_page_container">
    <div class="publish_page_container">
        <div class="channels_outer_container">
            <h4 class="channels_header">Select channels to upload to:</h4>

            <div class="channels_container">
                <div class="single_channel_container">
                    <div class="single_channel_toppart">
                        <img src={FacebookIcon} class="social_channel_profile_image" alt="facebook social channel" />
                        <h5 class="cahnnel_title">Facebook</h5>
                    </div>
                    <div class="single_channel_bottompart">
                        <select class="channel_pages_options">
                            <option>Facebook page 1</option>
                            <option>Facebook page 2</option>
                            <option>Facebook page 3</option>
                            <option>Facebook page 4</option>
                        </select>
                    </div>
                </div>

                <div class="single_channel_container">
                    <div class="single_channel_toppart">
                        <img src={InstagramIcon} class="social_channel_profile_image" alt="facebook social channel" />
                        <h5 class="cahnnel_title">Instagram</h5>
                    </div>
                    <div class="single_channel_bottompart">
                        <select class="channel_pages_options">
                            <option>Instagram page 1</option>
                            <option>Instagram page 2</option>
                            <option>Instagram page 3</option>
                            <option>Instagram page 4</option>
                        </select>
                    </div>
                </div>

                <div class="single_channel_container">
                    <div class="single_channel_toppart">
                        <img src={TiktokIcon} class="social_channel_profile_image" alt="facebook social channel" />
                        <h5 class="cahnnel_title">Tiktok</h5>
                    </div>
                    <div class="single_channel_bottompart">
                        <select class="channel_pages_options">
                            <option>Tiktok page 1</option>
                            <option>Tiktok page 2</option>
                        </select>
                    </div>
                </div>

                <div class="single_channel_container">
                    <div class="single_channel_toppart">
                        <img src={YoutubeIcon} class="social_channel_profile_image" alt="facebook social channel" />
                        <h5 class="cahnnel_title">Youtube</h5>
                    </div>
                    <div class="single_channel_bottompart">
                        <select class="channel_pages_options">
                            <option>Youtube channel 1</option>
                            <option>Youtube channel 2</option>
                            <option>Youtube channel 3</option>
                        </select>
                    </div>
                </div>

                <div class="single_channel_container">
                    <div class="single_channel_toppart">
                        <img src={LinkedinIcon} class="social_channel_profile_image" alt="facebook social channel" />
                        <h5 class="cahnnel_title">Linkedin</h5>
                    </div>
                    <div class="single_channel_bottompart">
                        <select class="channel_pages_options">
                            <option>Linkedin page 1</option>
                            <option>Linkedin page 2</option>
                        </select>
                    </div>
                </div>

                <div class="single_channel_container">
                    <div class="single_channel_toppart">
                        <img src={TwitterIcon} class="social_channel_profile_image" alt="facebook social channel" />
                        <h5 class="cahnnel_title">Twitter/X</h5>
                    </div>
                    <div class="single_channel_bottompart">
                        <select class="channel_pages_options">
                            <option>Twitter account 1</option>
                            <option>Twitter account 2</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>

        <div class="actual_upload_outer_container">
            <h1>Upload new post here &#128513;</h1>

            <div class="upload_new_post_outer_container">
                <div class="upload_post_container_toppart">
                    <textarea class="upload_content_area" placeholder="Enter the content you want to upload here"></textarea>
                </div>

                <div class="upload_post_container_bottompart">
                    <div class="upload_post_container_bottompart_leftside">
                        <button class="ai_assistant_btn">AI Assistant</button>
                    </div>

                    <div class="upload_post_container_bottompart_rightside">
                        <button class="schedule_post_btn">Schedule</button>
                        <button class="upload_post_btn">Upload</button>
                    </div>
                </div>
            </div>

            <div class="suggested_content_outer_container">
                <h3 class="suggeted_hashtags_header">Suggested hashtags:</h3>
                <div class="suggested_hashtags_container">
                    <div class="single_suggested_hashtag">#test_hashtag1</div>
                    <div class="single_suggested_hashtag">#test_hashtag2</div>
                    <div class="single_suggested_hashtag">#test_hashtag3</div>
                    <div class="single_suggested_hashtag">#test_hashtag4</div>
                    <div class="single_suggested_hashtag">#test_hashtag5</div>
                </div>
            </div>

            <div class="suggested_timings_outer_container">
                <h3 class="suggested_timings_header">Suggested times to post:</h3>
                <div class="suggested_timings_container">
                    <div class="single_suggested_time">1:30 - 2:30 pm</div>
                    <div class="single_suggested_time">3:30 - 4:30 pm</div>
                    <div class="single_suggested_time">6:30 - 8:30 pm</div>
                    <div class="single_suggested_time">9:30 - 10:30 pm</div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @import "./publish_page.css";
</style>