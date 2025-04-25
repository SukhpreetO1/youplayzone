export const validate_profile_submit_form = (data) => {
    const errors = {};

    if (!/^[a-zA-Z]+$/.test(data.first_name)){
        errors.name = 'Name should contain only letters';
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Invalid email format.';
    }

    if (!/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(data.username)){
        errors.username = 'Username must contain letters and numbers only';
    }

    if (data.confirm_password !== data.password) {
        errors.confirm_password = 'Confirm password does not match.';
    }

    return errors;
};
