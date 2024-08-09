// This is a file that will contain variables that are constants (it is in order to help path management)

const home = location.origin;
console.log(`(constants.js) home = ${home}`);
async function load_json_config() {
    const currentDate = new Date();
    const isoString = currentDate.toISOString();
    const default_answer = {
        "in_devel": false,
        "icon_name": "favicon.png",
        "author": "Henry Letellier",
        "export_date": `${isoString.split('T')[0]}`,
        "export_time": `${isoString.split('T')[1].split('Z')[0]}`
    };
    try {
        const response = await fetch(`${home}/assets/js/scripts/config.json`);
        if (!response.ok) {
            return default_answer;
        }

        const json_config = await response.json(); // Parse the JSON from the response
        return json_config;
    } catch (error) {
        return default_answer;
    }
}

function update_devel_variable(json_config) {
    console.log(`(update_devel_variable) json_config = ${json_config}`)
    var devel_active = false;
    if ("in_devel" in json_config) {
        devel_active = json_config["in_devel"];
    }
    return devel_active;
}

function update_image_default_source(devel_active) {
    var img_src = `${home}`
    if (devel_active === false) {
        img_src = `${home}/assets/img`;
    }
    return img_src;
}

async function load_constants() {
    console.log("(load_constants) before json_config");
    const json_config = await load_json_config();
    console.log(`(load_constants) json_config = ${JSON.stringify(json_config)}`);
    const devel_active = update_devel_variable(json_config);
    const img_src = update_image_default_source(devel_active);


    window.constants = {
        home: home,
        json_config: json_config,
        devel_active: devel_active,
        img_src: img_src
    };
}
