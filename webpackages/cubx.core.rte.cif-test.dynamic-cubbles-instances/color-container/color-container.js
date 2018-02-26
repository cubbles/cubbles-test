(function () {
  'use strict'

  CubxComponent({
    is: 'color-container',

    modelColorChanged: function (newValue) {
      // update the view
      this.querySelector('#colorContainer').style.backgroundColor = newValue
    }
  })
}())
