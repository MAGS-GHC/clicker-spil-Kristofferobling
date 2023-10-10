setInterval(Autoclick, 200)
function Autoclick() {
    for (let i = 0; i < clickPerSecond; i++) {
        ClickOnCookie();
    }
}