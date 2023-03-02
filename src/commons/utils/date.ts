export const getFormatedDate = (currentDate : string) => {
    return currentDate.split('/').reverse().join('-');
}