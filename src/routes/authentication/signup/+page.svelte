<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    const productionApiUrl = "https://47-social-media-mark1-backend.vercel.app/";
    const localDevelopmentApiUrl = "http://localhost:5000/";

    let username = "";
    let email = "";
    let password = "";
    let profile_image : File | null = null;

    const handleFileChange = (e: Event) => {
        const input = e.target as HTMLInputElement;
        if(input.files && input.files.length > 0){
            profile_image = input.files[0];
        }
    }

    const signupNewUser = async (e: Event) => {
        e.preventDefault();

        if(!profile_image){
            alert("Please select a profile image");
            console.log("Please select a profile image");
            return;
        };

        const formData = new FormData();
        formData.append("username", username)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("profile_image", profile_image)

        try{
            const url = `${productionApiUrl}api/v1/authentication/signup_user`;
            const response = await fetch(url, {
                method: "POST",
                body: formData
            });

            if(response.ok){
                const data = await response.json();
                alert("You have signed up, Please head to log in page");
                goto("/authentication/signin");
                console.log(data);
            }else{
                const error = await response.json();
                console.log("There was an error sending the data to backend g", error);
            };

        }catch(error){
            console.log(error);
            alert("Signup failed")
        }
    };
</script>

<div class="main_outer_signup_page_container">
    <div class="signup_container">
        <h2>Signup for new account</h2>
        <p class="signup_header_subtext">Already have an account? <a href="/authentication/signin">Signin to your account</a></p>

        <div class="form_container">
            <form class="actual_form" on:submit={signupNewUser}>
                <div class="single_input">
                    <label for="username">Username: </label>
                    <input type="text" placeholder="Please enter your username" bind:value={username}  name="username" />
                </div>

                <div class="single_input">
                    <label for="email">Email: </label>
                    <input type="email" placeholder="Please enter your email" bind:value={email}  name="email" />
                </div>

                <div class="single_input">
                    <label for="profile_image">Profile Image: </label>
                    <input type="file"  name="profile_image" on:change={handleFileChange} />
                </div>

                <div class="single_input">
                    <label for="password">Password: </label>
                    <input type="password" placeholder="Please enter your password" bind:value={password}  name="password" />
                </div>

                <div class="signup_user_btn_container">
                    <button class="signup_user_btn" type="submit">Signup</button>
                </div>
            </form>
        </div>
    </div>
</div>

<style>
    @import "./signup_page.css";
</style>