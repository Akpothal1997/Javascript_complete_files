let indianWatch = () => {
    let today = new Date();
    let options = { timeZone : 'Asia/Kolkata'};
    let indianTime = today.toLocaleTimeString('en-US',options);
    let indianDate = today.toLocaleDateString('it-IT',options);
    document.querySelector('#indian-date').innerText = indianDate;
    document.querySelector('#indian-time').innerText = indianTime;
};
setInterval(indianWatch,1000);

let usaWatch = () => {
    let today = new Date();
    let options = { timeZone : 'America/New_York'};
    let usaTime = today.toLocaleTimeString('en-US',options);
    let usaDate = today.toLocaleDateString('it-IT',options);
    document.querySelector('#usa-date').innerText = usaDate;
    document.querySelector('#usa-time').innerText = usaTime;
};
setInterval(usaWatch,1000);

let chinaWatch = () => {
    let today = new Date();
    let options = { timeZone : 'Asia/Shanghai'};
    let chinaTime = today.toLocaleTimeString('en-US',options);
    let chinaDate = today.toLocaleDateString('it-IT',options);
    document.querySelector('#china-date').innerText = chinaDate;
    document.querySelector('#china-time').innerText = chinaTime;
};
setInterval(chinaWatch,1000);