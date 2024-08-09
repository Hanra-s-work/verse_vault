// This is a script that will update the json file (this acts like a config file)

const fs = require('fs');
const path = require('path');

// Define the path to your JSON file
const jsonFilePath = path.join(bs.exportPath, 'scripts/config.json');

// Read the existing JSON file
let jsonData;
try {
    jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
} catch (err) {
    console.error('Error reading JSON file:', err);
    jsonData = {};
}

// Modify the JSON data
jsonData.in_devel = false;
jsonData.export_date = new Date().toISOString();  // Set export_date to current date and time in ISO format

// Write the updated JSON back to the file
try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8');
    console.log('JSON file updated successfully.');
} catch (err) {
    console.error('Error writing JSON file:', err);
}
