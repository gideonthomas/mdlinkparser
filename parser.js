exports.parse = function(data) {
    var links = new Array();
    var list = data.match(/\[[^\]]+\]\([^)]+\)/g);
    list.forEach(function(element, index, array) {
        links.push((element.match(/\([^)]+\)/g))[0].replace("(", "").replace(")", ""));
    });
    return links;
}