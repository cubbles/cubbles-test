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
  elem.setAttribute('member-id', 'two');
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
  elem2.appendChild(connections);
  container.insertBefore(elem2, elem);
}
