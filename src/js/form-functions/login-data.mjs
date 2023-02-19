export async function loginData(form, event) {
    
    event.preventDefault();

    const userData = {
        email: form.email.value,
        password: form.value,
    };
    console.log(userData)
    return userData;
};