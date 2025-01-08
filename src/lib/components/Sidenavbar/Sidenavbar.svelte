<script lang="ts">
    import { onMount } from "svelte";

    import CurrentUserProfile from "$lib/images/current_user_profile.png";
    import DashboardIcon from "$lib/images/sidenavbar_images/menu.png";
    import MedialibraryIcon from "$lib/images/sidenavbar_images/video.png";
    import PublishIcon from "$lib/images/sidenavbar_images/send.png";
    import CalendarIcon from "$lib/images/sidenavbar_images/calendar.png";
    import AnalyticsIcon from "$lib/images/sidenavbar_images/monitor.png";
    import SocialProfilesIcon from "$lib/images/sidenavbar_images/add-user.png";

    let currentUserUsername = "";
    let currentUserProfileImage = "";

    const getCurrentLoggedinUser = async () => {
        try{
            const currentUserToken = localStorage.getItem("access_token");
            if(!currentUserToken){
                console.log("You are not logged in")
            };

            const apiUrl = "http://localhost:5000/api/v1/authentication/current_user/";
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${currentUserToken}`,
                    "Content-Type": "application/json"
                }
            })

            if(response.ok){
                const data = await response.json();
                // console.log(data);
                console.log("current user: ", data.current_user)
                currentUserProfileImage = data.current_user.profile_image.replace(/\\/g, "/");
                currentUserUsername = data.current_user.username;


                // console.log("current image path: ", data.current_user.profile_image.replace(/\\/g, "/"));
            }

        }catch(error){
            console.log(error)
        }
    };

    onMount(() => {
        getCurrentLoggedinUser();

    });

</script>

<div class="main_outer_sidenavbar_container">
    <div class="sidenavbar_container">
        <div class="sidenavbar_toppart">
            <div class="logo_container">
                <h2 class="logo">47SocialMedia</h2>
            </div>

            <ul class="navbar">
                <li>
                    <img src={DashboardIcon} class="navbar_link_icon" alt="navbar icon profile" />
                    <a href={`/app/dashboard`}>Dashboard</a>
                </li>
                <li>
                    <img src={MedialibraryIcon} class="navbar_link_icon" alt="navbar icon profile" />
                    <a href={`/app/media_library`}>Media Library</a>
                </li>
                <li>
                    <img src={PublishIcon} class="navbar_link_icon" alt="navbar icon profile" />
                    <a href={`/app/publish`}>Publish</a>
                </li>
                <li>
                    <img src={CalendarIcon} class="navbar_link_icon" alt="navbar icon profile" />
                    <a href={`/app/calendar`}>Calendar</a>
                </li>
                <li>
                    <img src={AnalyticsIcon} class="navbar_link_icon" alt="navbar icon profile" />
                    <a href={`/app/media_library`}>Analytics</a>
                </li>
            </ul>
        </div>

        <div class="sidenavbar_bottompart">
            <ul class="bottom_navbar_links">
                <li>
                    <img src={SocialProfilesIcon} class="navbar_link_icon" alt="navbar icon profile" />
                    <a href={`/app/social_profiles`}>Social account</a>
                </li>
            </ul>

            <div class="current_user_container">
                <div class="current_user_leftside_container">
                    <img src={`http://localhost:5000/${currentUserProfileImage}`} class="current_user_profile_img" alt="current users profile" />
                </div>
                <div class="current_user_rightside_container">
                    <a href="/" class="current_user_username">@{currentUserUsername}</a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @import "./Sidenavbar.css";
</style>