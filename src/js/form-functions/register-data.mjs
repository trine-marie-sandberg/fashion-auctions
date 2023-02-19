//Returns registerUser from form
export function regiserData(form, event) {
    
    event.preventDefault();

    const userData = {
        name: form.username.value,
        email: form.email.value,
        password: form.password.value,
    };
    console.log(userData)
    return userData;
};