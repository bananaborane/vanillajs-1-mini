console.log('hello friend')
let count = 0;
let increase = ()=>{
    count++;
    element.innerText = count;
}

let decrease = ()=>{
    count--;
    element.innerText = count;
}

let reset = ()=>{
    count = 0;
    element.innerHTML = `<mark>${count}</mark>`;
}

let element = document.getElementById("counter")


let selectTheme = (theme)=>{
    document.getElementsByTagName("body")[0].className = theme;
    document.getElementsByTagName("main")[0].className = theme;
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
  }
}   