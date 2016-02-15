/* exported findElementPerRuntimeId,resetError,showError,hideError,addHandler,
 removeHandler,exportHandler,importHandler,generateConnectionIdHandler*/
'use strict';
function findElementPerRuntimeId(runtimeId) {
    var elements = document.querySelectorAll('[runtime-id]');

    for (var index = 0; index < elements.length; index++) {
        var element = elements[index];
        if (element.getAttribute('runtime-id') === runtimeId) {
            return element;
        }
    }
    return null;
}
function resetError() {
    hideError();
    document.querySelector('#errormessage').innerHTML = '';

}
function showError() {
    var clslist = document.querySelector('#error').classList;
    if (clslist.contains('hidden')) {
        clslist.remove('hidden');
    }
    if (!clslist.contains('show')) {
        clslist.add('show');
    }
}
function hideError() {
    var clslist = document.querySelector('#error').classList;
    if (clslist.contains('show')) {
        clslist.remove('show');
    }
    if (!clslist.contains('hidden')) {
        clslist.add('hidden');
    }
}
function addHandler() {
    resetError();
    try {
        document.querySelector('#addedconnectionid').innerHTML = '';
        var runtimeId = document.querySelector('#runtimeidadd').value;
        var connectionJSON = document.querySelector('#connection').value;
        console.log('addHandler: add connection ' + JSON.parse(connectionJSON) + ' to ' + runtimeId);

        var elem = findElementPerRuntimeId(runtimeId);

        var connectionId = elem.addDynamicConnection(JSON.parse(connectionJSON));
        document.querySelector('#addedconnectionid').innerHTML = connectionId;
    } catch (e) {
        showError();
        console.log(e);
        document.querySelector('#errormessage').innerHTML = e.message;
    }
}
function removeHandler() {
    resetError();
    try {
        var runtimeId = document.querySelector('#runtimeidremove').value;
        var elem = findElementPerRuntimeId(runtimeId);
        var connectionId = document.querySelector('#connectionid').value;
        var connectionJSON;
        if (!connectionId || connectionId.length === 0) {
            connectionJSON = document.querySelector('#connection').value;
            console.log('removeHandler: remove connection ' + connectionJSON + ' from ' + runtimeId);
            elem.removeDynamicConnection(JSON.parse(connectionJSON));
        } else {
            console.log('removeHandler: remove connection ' + connectionId + ' from ' + runtimeId);
            elem.removeDynamicConnection(connectionId);

        }
    } catch (e) {
        showError();
        document.querySelector('#errormessage').innerHTML = e.message;
    }
}
function exportHandler() {
    resetError();
    try {
        var runtimeId = document.querySelector('#runtimeidexport').value;
        console.log('exportHandler: export connections  from ' + runtimeId);
        var elem = findElementPerRuntimeId(runtimeId);
        var connectionsJson = elem.exportDynamicConnections();
        console.log('exported connections', connectionsJson);
        document.querySelector('#exportedcontent').innerHTML =
            '<pre>' + JSON.stringify(JSON.parse(connectionsJson), null, 4);
        +'</pre>';

    } catch (e) {
        showError();
        document.querySelector('#errormessage').innerHTML = e.message;
    }
}

function importHandler() {
    resetError();
    try {
        var runtimeId = document.querySelector('#runtimeidimport').value;
        var connectionJSON = document.querySelector('#connection').value;

        console.log('importHandler: import connections ' + connectionJSON + ' to ' + runtimeId);
        var elem = findElementPerRuntimeId(runtimeId);
        elem.importDynamicConnections(connectionJSON);
    } catch (e) {
        showError();
        document.querySelector('#errormessage').innerHTML = e.message;
    }
}

function generateConnectionIdHandler() {
    resetError();
    try {
        var runtimeId = document.querySelector('#runtimeidgetConnectionId').value;
        var connectionJSON = document.querySelector('#connection').value;
        var elem = findElementPerRuntimeId(runtimeId);

        console.log('getConnectionIdHandler: get connectionId ' + connectionJSON);
        var connectionId = elem.generateConnectionId(JSON.parse(connectionJSON));
        document.querySelector('#getconnectionid').innerHTML = connectionId;
    } catch (e) {
        showError();
        document.querySelector('#errormessage').innerHTML = e.message;
    }
}
