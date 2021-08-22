'use strict';

exports.name = 'remove-xlink-ns';
exports.type = 'visitor';
exports.active = false;
exports.description =
  'removes xmlns:xlink and replaces xlink:href with href attribute';

/**
 * removes xmlns:xlink from <svg> and replaces xlink:href with href attribute
 *
 * xlink namespace is obsolete in SVG 2. Href attribute is recommended
 * replacement to xlink:href.
 *
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = () => {
  return {
    element: {
      enter: (node) => {
        if (node.attributes['xmlns:xlink'] != null) {
          delete node.attributes['xmlns:xlink'];
        }
        if (node.attributes['xlink:href'] != null) {
          node.attributes['href'] = node.attributes['xlink:href'];
          delete node.attributes['xlink:href'];
        }
      },
    },
  };
};
