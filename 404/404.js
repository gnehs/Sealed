window.onload = function () {
    let https = document.getElementById("https")
    if (location.protocol == "http:")
        https.href = location.href.replace(/^http/, 'https')
    else
        https.style.display = "none"

}