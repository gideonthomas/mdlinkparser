define(["./index"],
       function(parser) {
           return function getLinks() {
               var markdown = document.getElementById("markdown").value;
               var result = parser.parse(markdown);
               var listOfLinks = "";
               var linkText = document.getElementById("links");

               for(var i = 0; i < result.length; i++) {
                   listOfLinks += result[i].toString();
                   listOfLinks += "\n";
               }

               linkText.value = listOfLinks;
           };
       });
