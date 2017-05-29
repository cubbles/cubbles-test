// eslint-disable-next-line no-unused-vars
function addColorPicker () {
  var container = document.querySelector('.container');
  var elem = document.createElement('color-picker');
  elem.setAttribute('member-id', 'one');
  container.appendChild(elem);
}
// eslint-disable-next-line no-unused-vars
function addLifecycleTest () {
  var container = document.querySelector('.container');
  var elem = document.createElement('lifecycle-test');
  elem.setAttribute('member-id', 'three');
  container.appendChild(elem);
}
// eslint-disable-next-line no-unused-vars
function addColorContainer () {
  var container = document.querySelector('.container');
  var elem = document.createElement('color-container-compound');
  elem.id = 'two';
  container.appendChild(elem);
}
// eslint-disable-next-line no-unused-vars
function addConnection () {
  var elem = document.querySelector('color-picker');
  var connections = document.createElement('cubx-core-connections');
  connections.style.display = 'none';
  var connection = document.createElement('cubx-core-connection');
  connection.setAttribute('connection-id', 'color-connection');
  connection.setAttribute('source', 'color');
  connection.setAttribute('destination', 'two:color');
  connections.appendChild(connection);
  elem.appendChild(connections);
}
// eslint-disable-next-line no-unused-vars
function removeConnections () {
  var elem = document.querySelector('color-picker');
  var connections;
  for (var i = 0; i < elem.children.length; i++) {
    if (elem.children[ i ].tagName === 'CUBX-CORE-CONNECTIONS') {
      connections = elem.children[ i ];
      break;
    }
  }
  elem.removeChild(connections);
}
// eslint-disable-next-line no-unused-vars
function removeConnection () {
  var connectionId = document.querySelector('#connectionId').value;
  var connection = document.querySelector('[connection-id=' + connectionId + ']');
  var connections = connection.parentNode;
  connections.removeChild(connection);
}

// eslint-disable-next-line no-unused-vars
function addScene () {
  var container = document.querySelector('.container');
  var elem = document.createElement('color-container-compound');
  elem.setAttribute('member-id', 'two');
  container.appendChild(elem);

  var elem2 = document.createElement('color-picker');
  elem2.setAttribute('member-id', 'one');
  var connections = document.createElement('cubx-core-connections');
  connections.style.display = 'none';
  var connection = document.createElement('cubx-core-connection');
  connection.setAttribute('connection-id', 'color-connection');
  connection.setAttribute('source', 'color');
  connection.setAttribute('destination', 'two:color');
  connections.appendChild(connection);
  var inits = document.createElement('cubx-core-init');
  inits.style.display = 'none';
  var init = document.createElement('cubx-core-slot-init');
  init.setAttribute('slot', 'color');
  init.innerHTML = '"#FF4081"';
  inits.appendChild(init);
  elem2.appendChild(inits);
  elem2.appendChild(connections);
  container.insertBefore(elem2, elem);
}

// eslint-disable-next-line no-unused-vars
function addSceneUsingInnerHTML() {
  var container = document.querySelector('.container');
  var parent = document.createElement('div');
  parent.innerHTML = '<color-picker member-id="one">' +
      '<cubx-core-init>' +
        '<cubx-core-slot-init slot="color">"#FF4081"</cubx-core-slot-init>' +
      '</cubx-core-init>' +
      '<cubx-core-connections>' +
        '<cubx-core-connection source="color" destination="two:color" connection-id="color-connection"></cubx-core-connection>' +
      '</cubx-core-connections>' +
    '</color-picker>' +
    '<color-container-compound member-id="two"></color-container-compound>';
  container.appendChild(parent);
}

// eslint-disable-next-line no-unused-vars
function removeCubble () {
  var inputElem = document.getElementById('removeMemberId');
  var memberId = inputElem.value;
  var cubble = document.querySelector('[member-id=' + memberId + ']');
  cubble.parentNode.removeChild(cubble);
}
