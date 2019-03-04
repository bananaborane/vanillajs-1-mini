console.log('hello friend')

let element = document.getElementById("counter")

let count = 0;

let increase = ()=>{
    count++;
    element.innerText = count;
    console.log("increase", count);
  }
  
  let decrease = ()=>{
    count--;
    element.innerText = count;
    console.log("decrease", count);
  }
  
  let reset = ()=>{
    count = 0;
    element.innerHTML = `<mark>${count}</mark>`;
    console.log("reset", count);
}



let selectTheme = (theme)=>{
    document.getElementsByTagName("body")[0].className = theme;
    // get elements by tag name returns something that is similar to an array
    document.getElementsByTagName("main")[0].className = theme;
    // get elements by tag name returns something that is similar to an array
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
  }
}   