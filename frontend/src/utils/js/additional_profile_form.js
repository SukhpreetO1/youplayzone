export const validate_additional_profile_form_submit_form = (data) => {
    const errors = {};
    const urlRegex = /^(https?:\/\/)?([\w\-]+(\.[\w\-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    if (!data.google_drive_link.trim()) {
        errors.google_drive_link = 'This field cannot be empty.';
    } else if (!urlRegex.test(data.google_drive_link.trim())) {
        errors.google_drive_link = 'It must be a valid link.'
    }

    return errors;
}