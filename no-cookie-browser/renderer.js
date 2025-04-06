function loadPage() {
    let url = document.getElementById("urlInput").value;
    if (!url.startsWith("http")) url = "https://" + url;  // Ensure valid URL format
    document.getElementById("browser").src = url;
}

function newTab() {
    let tab = document.createElement("webview");
    tab.src = "https://example.com";
    tab.style.width = "100%";
    tab.style.height = "600px";
    document.getElementById("tabs").appendChild(tab);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
