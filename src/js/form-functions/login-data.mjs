export async function loginData(event) {
    
    event.preventDefault();

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const loginUser = {
        email: email.value,
        password: password.value,
    };

    return loginUser;
};