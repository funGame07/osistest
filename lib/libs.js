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

// auth from cookies
function isAuthFromCookie(auth, setIsAuth, Cookies){
    const isAuthToken = Cookies.get(auth)
    if (isAuthToken != "undefined" && isAuthToken ) return setIsAuth(true)
    return setIsAuth(false)
}

// save question/mapel to db
function saveSomething(uri, method, field, setIsLoading, setCreateSomething, cb){
    return new Promise( async(resolve, reject) => {
        setIsLoading(true)
        try {
            const response = await fetch(import.meta.env.VITE_SERVER_URI + uri, {
                method: method,
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(field)
            })
            const data = await response.json()

            if(data.success){
                console.log(data)
                resolve(data.message)
            }else{
                console.log(data)
                reject(data.message)
            }
        } catch (error) {
            reject("couldn't save")
        } finally{
            setIsLoading(false)
            cb()
            setCreateSomething(false)
        }
    })
}

// ### Export functions
export {
    isAuthFromDB,
    toggleFs,
    handleOutsideClick,
    isAuthFromCookie,
    saveSomething
}