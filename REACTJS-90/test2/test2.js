// Write a function to convert all your browser cookies in to JSON(cookie key and cookie value pair) object?

function convertCookiesToJSON(){
    const cookiesObj={};
    //get Cookies
    const cookies ="user=John Doe; theme=light; sessionToken=abc123"  //document.cookie()
    //split the cookies
    const ArrayOfCookies = cookies.split(';')
    
    ArrayOfCookies.forEach(element => {
        //trim unwanted spaces nd split like key an value
        const [key,value] = element.trim().split('=')
        cookiesObj[decodeURIComponent(key)] = decodeURIComponent(value)
    });                                //decodeURIComponent()-->coma,space,quotes are encoded with some percent-encoded characters
    return cookiesObj                  //those are decoded by using this method.
}

console.log(convertCookiesToJSON())

//"user=John Doe; theme=light; sessionToken=abc123"