
export default {
    sum: (value1, value2) => {
        return Number(value1) + Number(value2);
    },
    difference: (value1, value2) => {
        return Number(value1) - Number(value2);
    },
    ceil: (value) => {
        return Math.ceil(Number(value));
    },
    floor: (value) => {
        return Math.floor(Number(value));
    }

};
