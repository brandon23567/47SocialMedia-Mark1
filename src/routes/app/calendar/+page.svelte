<script>
    import CurrentUserProfile from "$lib/images/current_profile_2.png";
    import TestImage1 from "$lib/images/test_media_library_images/test_image1 (1).png";
    import NextMonthIcon from "$lib/images/next.png";
    import PrevMonthIcon from "$lib/images/arrow.png";

    import NotificationsIcon from "$lib/images/notification.png";
    import SettingsIcon from "$lib/images/settings-gear-icon.png";
    import OtherAppsIcon from "$lib/images/list.png";
</script>

<div class="main_outer_calendar_page_container">
    <div class="calendar_page_outer_container">
        <div class="upcoming_posts_outer_container">
            <h4 class="upcoming_posts_header">Upcoming posts...</h4>

            <div class="upcoming_posts_container">
                <div class="platform_selection_container">
                    <select>
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>Linkedin</option>
                        <option>Youtube</option>
                        <option>Tiktok</option>
                        <option>Twitter/X</option>
                    </select>
                </div>

                <div class="scheduled_posts_container">
                    <div class="single_post">
                        <div class="single_post_toppart">
                            <div class="post_left_side">
                                <img src={CurrentUserProfile} class="current_user_profile_img" alt="users profile pic" />
                            </div>
                            <div class="post_right_side">
                                <div class="right_side_toppart">name_of_current_page</div>
                                <div class="right_side_bottompart">Just Now</div>
                            </div>
                        </div>

                        <div class="single_post_bottompart">
                            <div class="single_post_content">
                                This is the actual content of the post for the platforms that it atleast looks nice
                                and presentable in the ui design of the app.
                            </div>
                            <div class="single_post_media_container">
                                <img src={TestImage1} class="single_post_media_image" alt="this is the media content of the scheduled post" />
                            </div>
                        </div>
                    </div>

                    <div class="single_post">
                        <div class="single_post_toppart">
                            <div class="post_left_side">
                                <img src={CurrentUserProfile} class="current_user_profile_img" alt="users profile pic" />
                            </div>
                            <div class="post_right_side">
                                <div class="right_side_toppart">name_of_current_page</div>
                                <div class="right_side_bottompart">Just Now</div>
                            </div>
                        </div>

                        <div class="single_post_bottompart">
                            <div class="single_post_content">
                                This is the actual content of the post for the platforms that it atleast looks nice
                                and presentable in the ui design of the app.
                            </div>
                            <div class="single_post_media_container">
                                <img src={TestImage1} class="single_post_media_image" alt="this is the media content of the scheduled post" />
                            </div>
                        </div>
                    </div>

                    <div class="single_post">
                        <div class="single_post_toppart">
                            <div class="post_left_side">
                                <img src={CurrentUserProfile} class="current_user_profile_img" alt="users profile pic" />
                            </div>
                            <div class="post_right_side">
                                <div class="right_side_toppart">name_of_current_page</div>
                                <div class="right_side_bottompart">Just Now</div>
                            </div>
                        </div>

                        <div class="single_post_bottompart">
                            <div class="single_post_content">
                                This is the actual content of the post for the platforms that it atleast looks nice
                                and presentable in the ui design of the app.
                            </div>
                            <div class="single_post_media_container">
                                <img src={TestImage1} class="single_post_media_image" alt="this is the media content of the scheduled post" />
                            </div>
                        </div>
                    </div>

                    <div class="single_post">
                        <div class="single_post_toppart">
                            <div class="post_left_side">
                                <img src={CurrentUserProfile} class="current_user_profile_img" alt="users profile pic" />
                            </div>
                            <div class="post_right_side">
                                <div class="right_side_toppart">name_of_current_page</div>
                                <div class="right_side_bottompart">Just Now</div>
                            </div>
                        </div>

                        <div class="single_post_bottompart">
                            <div class="single_post_content">
                                This is the actual content of the post for the platforms that it atleast looks nice
                                and presentable in the ui design of the app.
                            </div>
                            <div class="single_post_media_container">
                                <img src={TestImage1} class="single_post_media_image" alt="this is the media content of the scheduled post" />
                            </div>
                        </div>
                    </div>

                    <div class="single_post">
                        <div class="single_post_toppart">
                            <div class="post_left_side">
                                <img src={CurrentUserProfile} class="current_user_profile_img" alt="users profile pic" />
                            </div>
                            <div class="post_right_side">
                                <div class="right_side_toppart">name_of_current_page</div>
                                <div class="right_side_bottompart">Just Now</div>
                            </div>
                        </div>

                        <div class="single_post_bottompart">
                            <div class="single_post_content">
                                This is the actual content of the post for the platforms that it atleast looks nice
                                and presentable in the ui design of the app.
                            </div>
                            <div class="single_post_media_container">
                                <img src={TestImage1} class="single_post_media_image" alt="this is the media content of the scheduled post" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="actual_big_calendar_outer_container">
            <!-- <h3>Schedule new post</h3> -->

            <div class="big_calendar_container_outisde">
                <div class="big_calendar_toppart_container">
                    <div class="toppart_container_leftside">
                        <div class="current_month_container">
                            <h3 class="current_big_calendar_month">December 2024</h3>
                        </div>

                        <div class="month_toggle_container">
                            <div class="previous_month_container">
                                <img src={PrevMonthIcon} class="prev_month_icon_image" alt="previous month" />
                            </div>
                            <div class="next_month_container">
                                <img src={NextMonthIcon} class="next_month_icon_image" alt="next month" />
                            </div>
                        </div>
                    </div>

                    <div class="toppart_container_rightside">

                        <div class="calendar_view_container">
                            <select>
                                <option>Month</option>
                                <option>Week</option>
                                <option>Day</option>
                                <option>Year</option>
                                <option>Schedule</option>
                            </select>
                        </div>

                        <div class="notifications_icon_cpntainer">
                            <img src={NotificationsIcon} class="notifications_icon_image" alt="user notifcations" />
                        </div>

                        <div class="settings_icon_container">
                            <img src={SettingsIcon} class="settings_icon_image" alt="user settings" />
                        </div>

                        <div class="other_apps_icon_container">
                            <img src={OtherAppsIcon} class="other_apps_icon_image" alt="user other apps" />
                        </div>
                        
                    </div>
                </div>

                <div class="big_calendar_bottompart_container">
                    <div class="weekdays_container">
                        <div class="single_weekday">Sun</div>
                        <div class="single_weekday">Mon</div>
                        <div class="single_weekday">Tue</div>
                        <div class="single_weekday">Wed</div>
                        <div class="single_weekday">Thur</div>
                        <div class="single_weekday">Fri</div>
                        <div class="single_weekday">Sat</div>
                    </div>

                    <div class="actual_days_container">
                        <div class="single_day_container">1</div>
                        <div class="single_day_container">2</div>
                        <div class="single_day_container">3</div>
                        <div class="single_day_container">4</div>
                        <div class="single_day_container">5</div>
                        <div class="single_day_container">6</div>
                        <div class="single_day_container">7</div>
                        <div class="single_day_container">8</div>
                        <div class="single_day_container">9</div>
                        <div class="single_day_container">10</div>
                        <div class="single_day_container">11</div>
                        <div class="single_day_container">12</div>
                        <div class="single_day_container">13</div>
                        <div class="single_day_container">14</div>
                        <div class="single_day_container">15</div>
                        <div class="single_day_container">16</div>
                        <div class="single_day_container">17</div>
                        <div class="single_day_container">18</div>
                        <div class="single_day_container">19</div>
                        <div class="single_day_container">20</div>
                        <div class="single_day_container">21</div>
                        <div class="single_day_container">22</div>
                        <div class="single_day_container">23</div>
                        <div class="single_day_container">24</div>
                        <div class="single_day_container">25</div>
                        <div class="single_day_container">26</div>
                        <div class="single_day_container">27</div>
                        <div class="single_day_container">28</div>
                        <div class="single_day_container">29</div>
                        <div class="single_day_container">30</div>
                        <div class="single_day_container">31</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<style>
    @import "./calendar.css";
</style>