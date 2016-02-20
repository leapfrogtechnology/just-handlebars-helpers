/**
 * A showIf helper for showing any html element.
 * Example usage:
 *      {{showIf true}} => ''
 *
 * @param param
 * @returns string
 */
function showIf(expression) {
    return !!expression ? '' : 'hidden';
}

/**
 * A hideIf helper for hiding any html element.
 * Example usage:
 *      {{hideIf true}} => 'hidden'
 *
 * @param param
 * @returns string
 */
function hideIf(expression) {
    return !!expression ? 'hidden' : '';
}

/**
 * A selectedIf helper for dropdowns and radio boxes.
 * Example usage:
 *      {{selectedIf true}} =>  'selected'
 *
 * @param value
 * @returns string
 */
function selectedIf(expression) {
    return !!expression ? 'selected' : '';
}

/**
 * A checkedIf helper for checkboxes.
 * Example usage:
 *      {{checkedIf true}}  => 'checked'
 *
 * @param value
 * @returns string
 */
function checkedIf(expression) {
    return !!expression ? 'checked' : '';
}

/* Export */
export {
    showIf,
    hideIf,
    checkedIf,
    selectedIf
};
