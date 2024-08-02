// This is the file that will create the unique id (it is a way of tracking what the user has interracted with)

// This is the function that will create the unique id

function random_hex_digit(c, d, d2) {
    var r = Math.random() * 16; // Random number between 0 and 16
    if (d > 0) { // Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
    } else { // Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
}

// Main function to generate UUID
function generate_UUID() {
    var d = new Date().getTime(); // Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0; // Time in microseconds since page-load or 0 if unsupported

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        return random_hex_digit(c, d, d2);
    });
}

// This function will return the uid of the user (it will also create it if it does not exist)
function get_uid() {
    var uid_key = "uid",
        uid = localStorage.getItem(uid_key);
    if (uid === null) {
        uid = cookie.read(uid_key)
        if (uid === '') {
            uid = generate_UUID();
            localStorage.setItem(uid_key, uid);
            cookie.create(uid_key, uid)
        }
    }
    return uid;
}
