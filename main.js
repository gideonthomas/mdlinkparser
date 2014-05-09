require(["domReady", "./index"],
       function(domReady, parser) {
           domReady(function() {
               document.getElementById("linkButton").onclick = function() {
                   var markdown = document.getElementById("markdown").value;
                   var result = parser.parse(markdown);
                   var listOfLinks = "";
                   var linkText = document.getElementById("links");

                   for(var i = 0; i < result.length; i++) {
                       listOfLinks += result[i].toString();
                       listOfLinks += "\n";
                   }

                   console.log(listOfLinks);

                   linkText.value = listOfLinks;
               }
           });
       });
