function RestartPioneerBrowser() {
    Neutralino.app.restart();
}
function CreateNewPioneerBrowserWindow() {
    Neutralino.window.open("/resources/index.html", "NewWindow", {
        width: 1920,
        height: 1080,
        resizeble: true,
        fullscreen: false,
        
    });
}

function shutDownPioneerBrowser() {
    Neutralino.app.exit();
}