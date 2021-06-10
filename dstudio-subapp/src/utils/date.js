import moment from "moment";

const format = function (date, type){
    if(typeof date === 'number'){
        date = new Date(date)
    }

    type = type.replace(/yyyy-MM-dd/ig, 'YYYY-MM-DD');
    type = type.replace(/yyyy/ig, 'YYYY');
    type = type.replace(/yyyy-MM/ig, 'YYYY-MM');
    type = type.replace(/MM-dd/ig, 'MM-DD');

    return moment(date).format(type)
}

export default {
    format
}