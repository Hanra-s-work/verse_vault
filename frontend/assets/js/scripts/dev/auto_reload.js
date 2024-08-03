// Reload the window if set to reload

function auto_reload(reload = false, delay = 5, nocache = false) {
    if (reload === false) {
        return;
    }
    seconds = delay * 1000;
    setTimeout(function () { location.reload(nocache); }, seconds);
}