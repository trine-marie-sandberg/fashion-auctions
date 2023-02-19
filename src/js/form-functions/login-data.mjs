export function loginData(form, event) {
    
    event.preventDefault();

    const userData = {
        email: form.email.value,
        password: form.password.value,
    };

    return userData;
};