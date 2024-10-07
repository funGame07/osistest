// Library made for general and DRY

// ### Authentication from server || set cookies
async function isAuthFromDB(Cookies, uri) {
    const response = await fetch(uri, {
        method: "GET",
        credentials: "include"
    })
    const data = await response.json()
    if(data.success){
        Cookies.set("auth", data.userId, {expires: 60})
        return true
    }else{
        Cookies.remove("auth")
        return false
    }
}

// control fullscreen
function toggleFs(){
    const element = document.getElementById("fullscreen")
    document.fullscreenElement ? document.exitFullscreen() : element.requestFullscreen()
}

// idk how to describe
function handleOutsideClick(e, content, setShowContent){
    if(content.current && !content.current.contains(e.target)){
      setShowContent(false) // hide structureorg image if the surrounding image is clicked
    }else{
      setShowContent(false) // hide structureorg image if the image is clicked
    }
}


// ### Export functions
export {
    isAuthFromDB,
    toggleFs,
    handleOutsideClick
}