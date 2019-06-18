var config = {
    apiKey: "AIzaSyBnzo3v7GatLiUjHVpeEHKhPE2VtEY5j7k",
    authDomain: "photowebsite-87a12.firebaseapp.com",
    databaseURL: "https://photowebsite-87a12.firebaseio.com",
    projectId: "photowebsite-87a12",
    storageBucket: "photowebsite-87a12.appspot.com",
    messagingSenderId: "175680944801"
};
firebase.initializeApp(config);


var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');

    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');


    saveMessage(name, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}
