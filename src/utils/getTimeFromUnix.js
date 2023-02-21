const getTimeFromUnix = (response, sun) => {
    let date;
    if(sun === "rise"){
        date = new Date((response.sys.sunrise + response.timezone) * 1000);
    } else if (sun === "set"){
        date = new Date((response.sys.sunset + response.timezone) * 1000);
    }
    let hours = date.getHours() -2;
    if (hours === -1){
        hours = 23;
    } else if (hours === -2) {
        hours = 22;
    }
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ":" + minutes.substr(-2);

    return formattedTime;
}

export default getTimeFromUnix;