/* globals Node */
(function () {
  'use strict';
  CubxComponent({
    is: 'bundesland-statistik',

    ready: function () {
      this.createTemplateList(this);
      this.evalTemplates(this.templateElements);
    },
    evalTemplates: function (templateList) {
      templateList.forEach(function (temp) {
        var tempFunc = new Function('', 'return ' + temp.code).bind(this); // eslint-disable-line no-new-func
        if (!temp.attr) {
          temp.node.data = tempFunc(this);
        } else {
          temp.attr.value = tempFunc(this);
        }
      }.bind(this));
    },
    createTemplateList: function (el) {
      this.templateElements = [];
      this.addToTemplateElements(el, this.templateElements);
    },

    addToTemplateElements: function (el, list) {
      if (el.childNodes.length > 0) {
        var node = el.firstChild;
        do {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.addToTemplateElements(node, list);
            this.addAttributesToTemplateElements(node, list);
          } else if (node.nodeType === Node.TEXT_NODE) {
            var regex = /(.*){{(.+)}}(.*)/;
            var matches = node.data.match(regex);

            if (matches) {
              list.push({
                node: node,
                code: '\'' + matches[1] + '\' + ' + matches[2] + '+ \'' + matches[3] + '\''
              });
            }
          }
          node = node.nextSibling;
        } while (node);
      }
    },

    addAttributesToTemplateElements: function (el, list) {
      for (var i = 0; i < el.attributes.length; i++) {
        var regex = /^{{(.+)}}$/;
        if (el.attributes[i].value) {
          var matches = el.attributes[i].value.match(regex);
          if (matches) {
            list.push({
              node: el,
              attr: el.attributes[i],
              code: matches[1]
            });
          }
        }
      }
    },
    getNationalityKey: function (model, index) {
      var data = this.getStatisticData();
      if (data) {
        var keys = Object.keys(data);
        if (keys.length > index) {
          return keys[ index ];
        }
      }
      return '';
    },

    getCell: function (model, nationalityIndex, genderIndex) {
      var data = this.getStatisticData();
      if (data) {
        try {
          var keys = Object.keys(data);
          var genderKeys = Object.keys(data[ keys[ 1 ] ]);
          return data[ keys[ nationalityIndex ] ][ genderKeys[ genderIndex ] ];
        } catch (err) {
          return '';
        }
      }
      return '';
    },
    getGenderKey: function (model, index) {
      var data = this.getStatisticData();
      if (data) {
        var keys = Object.keys(data);
        var genderKeys = Object.keys(data[ keys[ 1 ] ]);
        if (genderKeys.length > index) {
          return genderKeys[ index ];
        }
      }
      return '';
    }

  });
}());
