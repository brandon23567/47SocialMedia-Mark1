<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let username = "";
    let password = "";

    const signinUser = async (e: Event) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        try{
            const apiUrl = "http://localhost:5000/api/v1/authentication/signin_user/";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password })
            });

            if(response.ok){
                const data = await response.json();
                console.log(data);
                localStorage.setItem("access_token", data.access_token);
                alert("You have now been logged in");
                goto("/app/dashboard");
            }else{
                const error = await response.json();
                console.log("There was an error", error);
            }

        }catch(error){
            console.log(error);
        }
    }
</script>

<div class="main_outer_signup_page_container">
    <div class="signup_container">
        <h2>Signin to your account</h2>
        <p class="signup_header_subtext">Don't have an account? <a href="/authentication/signup">Signup for new account</a></p>

        <div class="form_container">
            <form class="actual_form" on:submit={signinUser}>
                <div class="single_input">
                    <label for="username">Username: </label>
                    <input type="text" placeholder="Please enter your username" bind:value={username} name="username" />
                </div>

                <div class="single_input">
                    <label for="password">Password: </label>
                    <input type="password" placeholder="Please enter your password" bind:value={password} name="password" />
                </div>

                <div class="signup_user_btn_container">
                    <button class="signup_user_btn" type="submit">Signin</button>
                </div>
            </form>
        </div>
    </div>
</div>

<style>
    @import "./signin_page.css";
</style>