//Returns registerUser from form
export function regiserData(event) {

    event.preventDefault();

    const registerUser = {
        name: this.userName.value,
        email: this.email.value,
        password: this.password.value,
        avatar: this.avatar.value,
    };

    return registerUser;
};