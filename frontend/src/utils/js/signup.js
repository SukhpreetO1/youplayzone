export const validate_signup_submit_form = (data) => {
    const errors = {};

    if (!data.name.trim()) {
        errors.name = 'Name is required';
    } else if (!/^[a-zA-Z]+$/.test(data.first_name)){
        errors.name = 'Name should contain only letters';
    }

    if (!data.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Invalid email format.';
    }

    if (!data.username.trim()) {
        errors.username = 'Username is required';
    } else if (!/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(data.username)){
        errors.username = 'Username must contain letters and numbers only';
    }

    if (!data.password.trim()) {
        errors.password = 'Password is required';
    }

    if (!data.confirm_password.trim()) {
        errors.confirm_password = 'Confirm password is required';
    } else if (data.confirm_password !== data.password) {
        errors.confirm_password = 'Confirm password does not match.';
    }

    return errors;
};
