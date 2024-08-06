// This is the script that will inject the required code to show/hide the settings menu when the mouse hovers over the settings button.

const settings_menu_event = "mouseover";
const settings_menu_id = "settings_menu";
const settings_class_show_hide = "hidden";
const settings_menu_button_id = "settings_button";

function show_settings_menu() {
    const settingsMenu = document.getElementById(settings_menu_id);
    settingsMenu.classList.remove(settings_class_show_hide);
}

function prevent_premature_hiding() {
    const settingsMenu = document.getElementById(settings_menu_id);
    settingsMenu.classList.remove(settings_class_show_hide);
}

function hide_settings_menu(event) {
    const settingsMenu = document.getElementById(settings_menu_id);
    const settingsButton = document.getElementById(settings_menu_button_id)
    if (!settingsMenu.contains(event.target) && event.target !== settingsButton) {
        settingsMenu.classList.add(settings_class_show_hide);
    }
}

function inject_listeners() {
    const settingsMenu = document.getElementById(settings_menu_id);
    const settingsButton = document.getElementById(settings_menu_button_id);

    // Show the menu when hovering over the button
    settingsButton.addEventListener(settings_menu_event, show_settings_menu);

    // Prevent hiding the menu when hovering over the menu itself
    settingsMenu.addEventListener(settings_menu_event, prevent_premature_hiding);

    // Hide the menu when not hovering over the button or the menu
    document.addEventListener(settings_menu_event, hide_settings_menu);
}

document.addEventListener('DOMContentLoaded', inject_listeners);
