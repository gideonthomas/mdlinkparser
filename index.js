if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {
    //The value returned from the function is
    //used as the module export visible to Node.
    return {
        parse:
        function(data) {
            var links = [];
            var list = data.match(/\[[^\]]+\]\([^)]+\)/g);
            list.forEach(function(element, index, array) {
                links.push((element.match(/\([^)]+\)/g))[0].replace("(", "").replace(")", ""));
            });
            return links;
        }
    };
});
