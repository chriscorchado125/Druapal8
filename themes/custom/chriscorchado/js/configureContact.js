export const configureContact = () => {
    const emailTextBox = ('label[for="edit-mail"]');
    if (typeof emailTextBox !== null) {
        document.querySelector('label[for="edit-mail"]').innerHTML = 'Email';
        document.getElementById('edit-mail').focus();
    }
};
