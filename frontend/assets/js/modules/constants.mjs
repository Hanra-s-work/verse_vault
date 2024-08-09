// This is a file that will contain variables that are constants (it is in order to help path management)

const home = location.origin;
const json_config = "";
// const devel_active = true;
const devel_active = false;
var img_src = `${home}`
if (devel_active === false) {
    img_src = `${home}/assets/img`;
}

window.constants = {
    home: home,
    json_config: json_config,
    devel_active: devel_active,
    img_src: img_src
}

export {
    home,
    json_config,
    devel_active,
    img_src
}
