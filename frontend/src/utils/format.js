import moment from "moment";

 export const stringToDate = ({strDate,currentFormat = 'Do MMMM YYYY',newFormat='YYYY-MM-DD'}) =>{
    return moment(strDate,currentFormat).format(newFormat)
}

