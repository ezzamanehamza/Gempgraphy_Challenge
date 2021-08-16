export const getRangeDate = () => {
    let today = new Date();
    let prevDays = new Date(today.setDate(today.getDate()-31))
    let dd = String(prevDays.getDate()).padStart(2, '0');
    let mm = String(prevDays.getMonth() + 1).padStart(2, '0');
    let yyyy = prevDays.getFullYear();

    return `${yyyy}-${mm}-${dd}`
}

export const dateDiff = (submited) => {
    let subbed = new Date(submited)
    let today = new Date()
    return  Math.round((today-subbed)/(1000*60*60*24))
}

export const numberFormatter = (num) => {
    let formatted = Math.abs(num) > 999 ? ((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.abs(num)
    return formatted.toString()
}