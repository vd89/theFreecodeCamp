/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    let htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'" : "&apos;"
    }

    return str
        .split("")
        .map(entity => htmlEntities[entity] || entity)
        .join('')
}


console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
