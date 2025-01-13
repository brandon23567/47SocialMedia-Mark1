<script>
    import NotificationsIcon from "$lib/images/notification.png";
    import OtherAppsIcon from "$lib/images/list.png";
    import SettingsIcon from "$lib/images/settings-gear-icon.png";

    const productionApiUrl = "https://47-social-media-mark1-backend.vercel.app/";
    const localDevelopmentApiUrl = "http://localhost:5000/";
    
</script>

<div class="main_outer_topnavbar_container">
    <div class="topnavbar_container">
        <div class="topnavbar_leftisde_container">
            <input type="text" placeholder="Search for your ideas here..." />
        </div>

        <div class="topnavbar_rightside_container">
            <div class="notfications_icon_container">
                <img src={NotificationsIcon} class="notifications_icon_image" alt="notifications of user" />
            </div>

            <div class="settings_icon_container">
                <img src={SettingsIcon} class="settings_icon_image" alt="settings of user" />
            </div>

            <div class="other_apps_icon_container">
                <img src={OtherAppsIcon} class="other_apps_icon_image" alt="other apps of user" />
            </div>
        </div>
    </div>
</div>

<style>
    @import "./Topnavbar.css";
</style>