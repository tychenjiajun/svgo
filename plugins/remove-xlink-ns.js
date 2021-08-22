'use strict';

exports.name = 'remove-xlink-ns';
exports.type = 'visitor';
exports.active = false;
exports.description =
  'removes xmlns:xlink namespace and replaces xlink:href attributes with href';

/**
 * removes xmlns:xlink namespace and replaces xlink:href attributes with href
 *
 * xlink namespace is obsolete in SVG 2. Xlink:href is recommended to replace with
 * href attribute.
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
