const remote = require ('electron').remote;
const wnd = remote.getCurrentWindow();
var close = document.querySelector('#close');
         console.log(`in HTML here`)
         console.log(close)

            close.addEventListener("click", () =>  { wnd.close();
              
            }); 

