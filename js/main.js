let counter = 1;
setInterval(() => {
    const res = counter.toString(2);
    const dec = document.getElementById("dec");
    dec.textContent = counter;
    const bin = document.getElementById("bin");
    bin.textContent = res;
    counter++;
}, 1000 )
