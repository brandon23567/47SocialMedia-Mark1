<script>
    import { onMount } from "svelte";
    import FacebookIcon from "$lib/images/communication.png";
    import InstagramIcon from "$lib/images/social.png";
    import LinkedinIcon from "$lib/images/linkedin.png";
    import YoutubeIcon from "$lib/images/youtube.png";
    import TiktokIcon from "$lib/images/tik-tok.png";
    import TwitterIcon from "$lib/images/twitter.png";
    import PinterestIcon from "$lib/images/pinterest.png";

    import TestImage1 from "$lib/images/current_user_profile.png";

    const handleFacebookLoginInput = () => {
        const uniqueStateValue = Math.random().toString(36).substring(2, 40);
        const appId = "609016734854950";
        const redirectUri = "https://47-social-media-mark1-1klj.vercel.app/app/social_profiles";
        const permissions = "pages_manage_engagement,pages_manage_metadata,pages_manage_posts,pages_messaging,pages_read_engagement,pages_read_user_content,pages_show_list,publish_video,read_insights,instagram_basic";
        const apiUrl = `https://www.facebook.com/v21.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&state=${uniqueStateValue}&scope=${permissions}`
        
        window.open(apiUrl, "_blank");
    };

    // const getTokenAndStateValues = async () => {
    //     // const appId = "609016734854950";
    //     const appId = import.meta.env.VITE_FB_APP_ID;
    //     const appSecret = import.meta.env.VITE_FB_APP_SECRET_KEY;
    //     const redirectUri = "https://47-social-media-mark1-1klj.vercel.app/app/social_profiles";
    //     // const appSecret = "cf838cfeafecd8e3a3f6a87df3a29adb";

    //     const fullUrl = window.location.href;
    //     const urlObject = new URL(fullUrl);

    //     const queryParams = urlObject.searchParams;

    //     const codeValue = queryParams.get("code");
    //     const stateValue = queryParams.get("state");

    //     console.log("Value of code: ", codeValue);
    //     console.log("Value of state: ", stateValue);

    //     if(codeValue && stateValue){
    //         const getTokenApiUrl = `https://graph.facebook.com/v21.0/oauth/access_token?client_id=${appId}&redirect_uri=${redirectUri}&client_secret=${appSecret}&code=${codeValue}$state=${stateValue}`

    //         const response = await fetch(getTokenApiUrl);

    //         if(response.ok){
    //             const data = await response.json();
    //             console.log(data);
    //         }else{
    //             const error = await response.json();
    //             console.log("There was an error: ", error);
    //         };
    //     }
    // };

    // onMount(() => {
    //     getTokenAndStateValues();
    // });

</script>

<div class="main_outer_social_profiles_page_container">
    <div class="social_profiles_page_container">
        <h2>Connect all your favourite social media platforms</h2>

        <div class="social_profiles_container">
            <div class="single_social_profile">
                <div class="single_social_profile_toppart">
                    <div class="socail_profile_toppart_leftside">
                        <img src={FacebookIcon} class="socail_profile_header_image" alt="facebook header social profile" />
                        <h3 class="social_profile_title">Facebook</h3>
                    </div>
                    <div class="socail_profile_toppart_rightside">
                        <button class="connect_profile_button" on:click={handleFacebookLoginInput}>+ Connect</button>
                    </div>
                </div>
                <div class="single_social_profile_bottompart">
                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>

                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="single_social_profile">
                <div class="single_social_profile_toppart">
                    <div class="socail_profile_toppart_leftside">
                        <img src={InstagramIcon} class="socail_profile_header_image" alt="facebook header social profile" />
                        <h3 class="social_profile_title">Instagram</h3>
                    </div>
                    <div class="socail_profile_toppart_rightside">
                        <button class="connect_profile_button">+ Connect</button>
                    </div>
                </div>
                <div class="single_social_profile_bottompart">
                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>

                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="single_social_profile">
                <div class="single_social_profile_toppart">
                    <div class="socail_profile_toppart_leftside">
                        <img src={LinkedinIcon} class="socail_profile_header_image" alt="facebook header social profile" />
                        <h3 class="social_profile_title">Linkedin</h3>
                    </div>
                    <div class="socail_profile_toppart_rightside">
                        <button class="connect_profile_button">+ Connect</button>
                    </div>
                </div>
                <div class="single_social_profile_bottompart">
                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>

                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="single_social_profile">
                <div class="single_social_profile_toppart">
                    <div class="socail_profile_toppart_leftside">
                        <img src={YoutubeIcon} class="socail_profile_header_image" alt="facebook header social profile" />
                        <h3 class="social_profile_title">Youtube</h3>
                    </div>
                    <div class="socail_profile_toppart_rightside">
                        <button class="connect_profile_button">+ Connect</button>
                    </div>
                </div>
                <div class="single_social_profile_bottompart">
                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>

                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="single_social_profile">
                <div class="single_social_profile_toppart">
                    <div class="socail_profile_toppart_leftside">
                        <img src={TiktokIcon} class="socail_profile_header_image" alt="facebook header social profile" />
                        <h3 class="social_profile_title">Tiktok</h3>
                    </div>
                    <div class="socail_profile_toppart_rightside">
                        <button class="connect_profile_button">+ Connect</button>
                    </div>
                </div>
                <div class="single_social_profile_bottompart">
                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>

                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="single_social_profile">
                <div class="single_social_profile_toppart">
                    <div class="socail_profile_toppart_leftside">
                        <img src={TwitterIcon} class="socail_profile_header_image" alt="facebook header social profile" />
                        <h3 class="social_profile_title">Twitter/X</h3>
                    </div>
                    <div class="socail_profile_toppart_rightside">
                        <button class="connect_profile_button">+ Connect</button>
                    </div>
                </div>
                <div class="single_social_profile_bottompart">
                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>

                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="single_social_profile">
                <div class="single_social_profile_toppart">
                    <div class="socail_profile_toppart_leftside">
                        <img src={PinterestIcon} class="socail_profile_header_image" alt="facebook header social profile" />
                        <h3 class="social_profile_title">Pinterest</h3>
                    </div>
                    <div class="socail_profile_toppart_rightside">
                        <button class="connect_profile_button">+ Connect</button>
                    </div>
                </div>
                <div class="single_social_profile_bottompart">
                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>

                    <div class="single_connected_social_profile_container">
                        <div class="social_profile_bottompart_leftside">
                            <img src={TestImage1} class="social_profile_user_image" alt="user's account header" />
                        </div>
                        <div class="social_profile_bottompart_rightside">
                            <h3 class="social_profile_users_account_name">Brandon Mahuvava</h3>
                            <p class="social_profile_current_status">Connected</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<style>
    @import "./social_profiles_page.css";
</style>