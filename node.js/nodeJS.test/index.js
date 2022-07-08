//const chalk = require ('chalk');
//const text = require (`./myData`)
const path = require ('path')
const fs = require ('fs')
const os = require (`os`)
const EventEmmiter = require('events')
const http = require('http')
// console.log(chalk.blue(`Hello Node.JS!!`))

console.log(`Hello Node.JS!!`)

// path module
// console.log(`***`)
// console.log(__dirname)
// console.log(__filename)
// console.log(`***`)
// console.log(`paht file: `,path.basename(__filename))
// console.log(`paht dir: `,path.dirname(__filename))
// console.log(`paht ext: `,path.extname(__filename))
// console.log(`paht parse: `,path.parse(__filename))
// console.log(`***`)
// console.log(path.join(__dirname, 'server', 'start.html')) //создание пути

// //FS module
// console.log(`***`)
// //fs.mkdir(path.join(__dirname, 'FirstTestFolder'), (err) => {if (err) {throw err}; console.log(`Folder is Creat`)})
// // fs.mkdir (link, folder, (err)=>{})

// const filePath = path.join(__dirname, 'FirstTestFolder', `firstTXT.txt`)
// const fileText = `my some text for write in my file IN TXT fileadd 2th line`

// fs.writeFile(filePath, `${fileText}`, (err) => {if (err) {throw err}; console.log(`file is Creat`)})
// // write or rewrite file

// fs.appendFile(filePath, `\n add some new`, (err) => {if (err) {throw err}; console.log(`file is Creat`)})
// // add in exist file

// fs.readFile(filePath, 'utf-8', (err, content) => {if (err) {throw err}; 
// //console.log(`file is read: **** ${content} ****`)
// console.log(content.toString()) //normal view
// console.log(content) //<Buffer 6d 79.... без указания кодировки

// })
// //readfile

//         //fs.readFile(path.join(filePath+ '22'), (err, content) => {if (err) {throw err}; console.log(`file is read: **** ${content} ****`)})
//         //try to reading: firstTXT.txt22
//         //fs.readFile(path.join(filePath, '22'), (err, content) => {if (err) {throw err}; console.log(`file is read: **** ${content} ****`)})
//         //try to reading: firstTXT.txt/22

    // //OS module

    // console.log(`my OS is:  `, os.platform());
    // console.log(`my arch cpu is:  `, os.arch());
    // console.log(`_________`)
    // console.log(`my CPU is:  `, os.cpus());
    // console.log(`memory free is:  `, os.freemem());
    // console.log(`memory total is:  `, os.totalmem());
    // console.log(`my Home folder:  `, os.homedir());
    // console.log(`my uptime:  `, os.uptime());

//EventEmmiter module
// const emitter = new EventEmmiter ()
// emitter.on('anythink', data => {console.log(`ON anythinK: `, data)})
// emitter.emit ('anythink', {a:1})
// emitter.emit ('anythink', {b:2})
// setTimeout(()=>{emitter.emit ('anythink', {cc:33})}, 2000);

// class Dispatcher extends EventEmmiter {
//     subscribe(eventName, cb){
//     console.log(`[Subscribe...]`)
//     this.on(eventName, cb)
// }
//     dispatch (eventName, data) {
//     console.log(`[dispatch...]`)
//     this.emit(eventName, data)
// }
// }

// const dis = new Dispatcher()

// dis.subscribe('aa', data => {console.log(`ON: aa`, data)})

// dis.dispatch(`aa`, {aa:22})

//HTTP

port = 805
const server = http.createServer((req,res) =>{
   
    res.writeHead(200,{'Content-Type': 'text/html'})

let filePath = path.join(__dirname, 'HTMLpages', req.url === '/' ? 'index.html' : req.url)
console.log(filePath)

    if (req.url === '/') 
        { fs.readFile 
            (path.join(__dirname, 'HTMLpages', 'index.html'),(err, data) =>
        {   if (err) {throw err}
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(data)
        })
    }
    if (req.url === '/contacts')
        { fs.readFile 
            (path.join(__dirname, 'HTMLpages', 'contacts.html'),(err, data) =>
        {   if (err) {throw err}
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(data)
        })
    }
    

console.log(req.url)
console.log(process.env.PORT)
   // res.end(`<h1 style="text-align:center; color:red">IN SERVER PAgE: HELLOW node .JS in ${port} port</h1>`)
})

server.listen (port, ()=>console.log(`Server on ${port} ports`))



