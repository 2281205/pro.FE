hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = destination.concat(native, hero);

rainbow.reverse();

rainbow.splice(0,1,`Richard`);
rainbow.splice(3,0,'Gave','Battle');
rainbow.splice(-1,1,'Vain');

colors = [`#f44336`, `#ff9800`, `#ffeb3b`, `#4caf50`, `#03a9f4`, `#3f51b5`, `#9c27b0`];

render = [];
for(i=0; i<rainbow.length; i++){
    render.push(`<div class="rainbow__item">
        <span class="item__circle" style="background: ${colors[i]}"></span>
        <span>${rainbow[i]}</span>
    </div>`);
}

document.write(`<div class="rainbow">${render.join(``)}</div>`)