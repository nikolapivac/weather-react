const getDateFromInfo = (dateInfo) => {
    dateInfo.setDate(dateInfo.getDate() + 1);
    let day = dateInfo.getDate()
    let month = dateInfo.getMonth() + 1;
    let date = day + "." + month;

    return date;
}

export default getDateFromInfo;