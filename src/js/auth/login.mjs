export async function login(userToLogin) {
        const loginUrl = "https://nf-api.onrender.com/api/v1/social/auth/login";

        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userToLogin),
        };
        try {
            const response = await fetch(loginUrl, postData);
            const { accessToken, ...profile } = await response.json();
            storageSave("accessToken", accessToken);
            storageSave("profile", profile);
        } catch (error) {
            console.log(error);
        } finally {
            if (localStorage.getItem("accessToken" === null)) {
                console.log("failed to store token")
            } else if (localStorage.getItem("accessToken")) {
                console.log(localStorage.getItem("accessToken"))
            };
        };
};