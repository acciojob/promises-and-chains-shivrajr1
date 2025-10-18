let age = document.getElementById("age");
let name = document.getElementById("name");

document.getElementById("form").addEventListener("submit", (e) => { call(e) });

function call(e) {
    e.preventDefault();

    if (name.value.trim() === '' || age.value === '') {
        alert("Please enter valid details.");
        return;
    }

    return new Promise((resolve, reject) => {
        if (age.value >= 18) {
            resolve();  // Just resolve, no need for wrapping it in a function
        } else {
            reject();  // Reject if under 18
        }
    })
    .then(() => {
        // This block runs when resolved (age >= 18)
        setTimeout(() => {
            alert(`Welcome, ${name.value}. You can vote.`);
        }, 4000);
    })
    .catch(() => {
        // This block runs when rejected (age < 18)
        setTimeout(() => {
            alert(`Oh sorry ${name.value}. You aren't old enough.`);
        }, 4000);
    });
}
