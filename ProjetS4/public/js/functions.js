// check if the user is logged in
async function checkIfLoggedIn() {
    const response = await fetch('/auth/checkIfLoggedIn');
    const data = await response.json();
    return data;
    }