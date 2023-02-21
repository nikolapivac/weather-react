const getTodaysDate = (response) => {
    let date = new Date((response.dt + response.timezone) * 1000);
    let dayOfWeek;
    switch (date.getDay()){
        case 0:
            dayOfWeek = "Sun";
            break;
        case 1: 
            dayOfWeek = "Mon";
            break;
        case 2:
            dayOfWeek = "Tue";
            break;
        case 3: 
            dayOfWeek = "Wed";
        break;
        case 4: 
            dayOfWeek = "Thu";
        break;
        case 5:
            dayOfWeek = "Fri";
            break;
        case 6: 
            dayOfWeek = "Sun";
            break;
    }
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    return`${dayOfWeek}, ${day}/${month}/${year}`;
}

export default getTodaysDate;