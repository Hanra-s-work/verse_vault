// The javascript module in charge of querying data from the backend of the website

// constants
const node_url = "http://localhost:3000";

// Generic function to get any data from any endpoint using any REST method
async function processEndpoint(endpoint = "/", method = 'GET', login = false) {
    var data_body = {
        method: `${method.toUpperCase()}`,
    };
    if (login === true) {
        var login_token = cookie.readCookie(token_cookie_name);
        data_body[headers] = {
            'Authorization': `Bearer ${login_token}`
        }
    }
    const response = await fetch(`${node_url}${endpoint}`, data_body);
    const data = await response.json();
    return data;
}

async function processEndpointWithBody(endpoint = "/", body = {}, method = 'GET', login = false) {
    var data_body = {
        method: `${method.toUpperCase()}`,
    };
    if (login === true) {
        var login_token = cookie.readCookie(token_cookie_name);
        data_body[headers] = {
            'Authorization': `Bearer ${login_token}`
        }
    }
    data_body[body] = JSON.stringify(body);
    const response = await fetch(`${node_url}${endpoint}`, data_body);
    const data = await response.json();
    return data;
}

// Get data for any given endpoint
async function getEndpoint(endpoint = "/", login = false) {
    return await processEndpoint(endpoint, 'GET', login);
}

// Get data for any given endpoint when content is provided in the body
async function getEndpointWithBody(endpoint = "/", body = {}, login = false) {
    return await processEndpointWithBody(endpoint, body, 'GET', login);
}

// Post data for any given endpoint
async function postEndpoint(endpoint = "/", login = false) {
    return await processEndpoint(endpoint, 'POST', login);
}

// Post data for any given endpoint when content is provided in the body
async function postEndpointWithBody(endpoint = "/", body = {}, login = false) {
    return await processEndpointWithBody(endpoint, body, 'POST', login);
}

// Put data for any given endpoint
async function putEndpoint(endpoint = "/", login = false) {
    return await processEndpoint(endpoint, 'PUT', login);
}

// Put data for any given endpoint when content is provided in the body
async function putEndpointWithBody(endpoint = "/", body = {}, login = false) {
    return await processEndpointWithBody(endpoint, body, 'PUT', login);
}

// Patch data for any given endpoint
async function patchEndpoint(endpoint = "/", login = false) {
    return await processEndpoint(endpoint, 'PATCH', login);
}

// Patch data for any given endpoint when content is provided in the body
async function patchEndpointWithBody(endpoint = "/", body = {}, login = false) {
    return await processEndpointWithBody(endpoint, body, 'PATCH', login);
}

// Delete data for any given endpoint
async function deleteEndpoint(endpoint = "/", login = false) {
    return await processEndpoint(endpoint, 'DELETE', login);
}

// Delete data for any given endpoint when content is provided in the body
async function deleteEndpointWithBody(endpoint = "/", body = {}, login = false) {
    return await processEndpointWithBody(endpoint, body, 'DELETE', login);
}

// Head data for any given endpoint
async function headEndpoint(endpoint = "/", login = false) {
    return await processEndpoint(endpoint, 'HEAD', login);
}

// Head data for any given endpoint when content is provided in the body
async function headEndpointWithBody(endpoint = "/", body = {}, login = false) {
    return await processEndpointWithBody(endpoint, body, 'HEAD', login);
}

// Options data for any given endpoint
async function optionsEndpoint(endpoint = "/", login = false) {
    return await processEndpoint(endpoint, 'OPTIONS', login);
}

// Options data for any given endpoint when content is provided in the body
async function optionsEndpointWithBody(endpoint = "/", body = {}, login = false) {
    return await processEndpointWithBody(endpoint, body, 'OPTIONS', login);
}


export {
    getEndpoint,
    putEndpoint,
    postEndpoint,
    headEndpoint,
    patchEndpoint,
    deleteEndpoint,
    processEndpoint,
    optionsEndpoint,
    getEndpointWithBody,
    putEndpointWithBody,
    postEndpointWithBody,
    headEndpointWithBody,
    patchEndpointWithBody,
    deleteEndpointWithBody,
    processEndpointWithBody,
    optionsEndpointWithBody
}

window.query = {
    getEndpoint,
    putEndpoint,
    postEndpoint,
    headEndpoint,
    patchEndpoint,
    deleteEndpoint,
    processEndpoint,
    optionsEndpoint,
    getEndpointWithBody,
    putEndpointWithBody,
    postEndpointWithBody,
    headEndpointWithBody,
    patchEndpointWithBody,
    deleteEndpointWithBody,
    processEndpointWithBody,
    optionsEndpointWithBody
}
