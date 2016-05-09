export default {
    /**
     * A showIf helper for showing any html element.
     * @example
     *      {{showIf true}}     => ''
     *
     * @param expression
     * @returns string
     */
    showIf: (expression) => {
        return !!expression ? '' : 'hidden';
    },

    /**
     * A hideIf helper for hiding any html element.
     * @example
     *      {{hideIf true}}     => 'hidden'
     *
     * @param expression
     * @returns string
     */
    hideIf: (expression) => {
        return !!expression ? 'hidden' : '';
    },

    /**
     * A selectedIf helper for dropdown and radio boxes.
     * @example
     *      {{selectedIf true}} =>  'selected'
     *
     * @param expression
     * @returns string
     */
    selectedIf: (expression) => {
        return !!expression ? 'selected' : '';
    },

    /**
     * A checkedIf helper for checkboxes.
     * @example
     *      {{checkedIf true}}  => 'checked'
     *
     * @param expression
     * @returns string
     */
    checkedIf: (expression) => {
        return !!expression ? 'checked' : '';
    },

    /**
     * A options helper for generating <option> list for <select> dropdowns.
     *
     * @example
     * A simple example:
     *
     *      let data = [
     *          {
     *              id: 1,
     *              description: 'Foo'
     *          },
     *          {
     *              id: 2,
     *              description: 'Bar'
     *          },
     *          {
     *              id: 3,
     *              description: 'Foo Bar'
     *          }
     *      ];
     *
     *      {{{options data selected="2"}}}
     *
     * will generate html like this:
     *
     *      <option value="1">Foo</option>
     *      <option value="2" selected>Bar</option>
     *      <option value="3">Foo Bar</option>
     *
     * @example
     * You can also override the default key names for 'id' & 'description'
     * using the 'id' & 'text' options in the helper.
     *
     *      let data = [
     *          {
     *              value: 1,
     *              text: 'New York'
     *          },
     *          {
     *              value: 2,
     *              text: 'London'
     *          }
     *      ];
     *
     *      {{{options data selected="1" id="value" text="text"}}}
     *
     * will generate html like this:
     *
     *      <option value="1" selected>New York</option>
     *      <option value="2">London</option>
     *
     */
    options: (data, opts) => {
        // The id & text for the <option>
        let id = opts.hash.id || 'id';
        let text = opts.hash.text || 'description';

        // The selection "id" of the <option>
        let selectedId = opts.hash.selected || null;

        return data.map(item => {
            let value = item[id] || '';
            let innerText = item[text] || '';
            let selected = (value == selectedId) ? ' selected': '';

            return `<option value="${value}"${selected}>${innerText}</option>`;
        }).join('');
    }

};
