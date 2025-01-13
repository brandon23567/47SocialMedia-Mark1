// import { FB_APP_ID } from "$env/dynamic/private"

export async function load(){
    const fullUrl = window.location.href;
    const urlObject = new URL(fullUrl);

    const queryParams = urlObject.searchParams;

    const redirectUri = "https://47-social-media-mark1-1klj.vercel.app/app/social_profiles";

    const appId = import.meta.env.VITE_FB_APP_ID;
    const appSecret = import.meta.env.VITE_FB_APP_SECRET_KEY;

    console.log("app id is: ", appId);
    console.log("app secret is: ", appSecret);

    const codeValue = queryParams.get("code");
    const stateValue = queryParams.get("state");

    if(codeValue && stateValue){
        const getTokenApiUrl = `https://graph.facebook.com/v21.0/oauth/access_token?client_id=${appId}&redirect_uri=${redirectUri}&client_secret=${appSecret}&code=${codeValue}$state=${stateValue}`

        const response = await fetch(getTokenApiUrl);

        if(response.ok){
            const data = await response.json();
            console.log(data);
            return data;
        }else{
            const error = await response.json();
            console.log("There was an error: ", error);
        };
    }
}