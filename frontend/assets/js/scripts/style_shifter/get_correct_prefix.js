// This is a javascript function in charge of returning the correct prefix for css styles.

function get_correct_prefix(theme="") {
    var prefix = {
            "":"",
            "default":"main_",
            "darling":"darling_",
            "poems":"poems_",
            "quotes":"quotes_"
        },
        lowercase_input = theme.toLowerCase();
    if (lowercase_input in prefix) {
        return prefix[lowercase_input];
    }
    return prefix[""];
}