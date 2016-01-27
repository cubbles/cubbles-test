/* exported findAncestorElement,elementFindByAttributeValue */
'use strict';

function findAncestorElement(element, ancestorName) {
    if (element.closest) {
        return element.closest(ancestorName);
    } else {
        var ancestor = element;
        while ((ancestor = ancestor.parentElement) && ancestor.tagName !== ancestorName.toUpperCase()) {}
        return ancestor;
    }
}

function elementFindByAttributeValue(attribute, value) {
    var all = document.getElementsByTagName('*');
    for (var i = 0; i < all.length; i++) {
        if (all[i].getAttribute(attribute) == value) {
            return all[i];
        }
    }
}
