const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*";

let interval = null;[]

document.querySelector(".texts").onmouseover = event => {
    let interation = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((_letter,index)=> {
            if(index<interation){   
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random()*46)]
        }).join("");

        if(interation >= event.target.dataset.value.length){
            clearInterval(interval)
            }
                interation += 1/10
        },40)
}