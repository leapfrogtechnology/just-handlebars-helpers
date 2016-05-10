export default {
    /**
     * A sum helper calculating the sum of two numbers.
     * @example
     *      {{sum 1 2}}     => 3
     *
     * @param value1
     * @param value2
     * @returns number
     */
    sum: (value1, value2) => {
        return Number(value1) + Number(value2);
    },

    /**
     * A difference helper calculating the difference of two numbers.
     * @example
     *      {{difference 5 2}}  => 3
     *
     * @param value1
     * @param value2
     * @returns number
     */
    difference: (value1, value2) => {
        return Number(value1) - Number(value2);
    },

    /**
     * A ceil helper to find the ceil value of the number.
     * @example
     *      {{ceil 5.6}}    => 6
     *
     * @param value
     * @returns number
     */
    ceil: (value) => {
        return Math.ceil(Number(value));
    },

    /**
     * A floor helper to find the floor value of the number.
     * @example
     *      {{floor 5.6}} => 5
     *
     * @param value
     * @returns number
     */
    floor: (value) => {
        return Math.floor(Number(value));
    }
};
