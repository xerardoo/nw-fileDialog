angular.module('DWand.nw-fileDialog', [])
.factory('fileDialog', [function(){
  var callDialog = function(dialog, callback) {
    dialog.addEventListener('change', function() {
      var result = dialog.value;
      callback(result);
    }, false);
    dialog.click();
  };

  var dialog = {};
  
  dialog.saveAs = function(callback, defaultFilename, acceptTypes) {
    var dialog = document.createElement('input');
    dialog.type = 'file';
    dialog.nwsaveas = defaultFilename || '';
    if (angular.isArray(acceptTypes)) {
      dialog.accept = acceptTypes.join(',');
    } else if (angular.isString(acceptTypes)) {
      dialog.accept = acceptTypes;
    }
    callDialog(dialog, callback);
  };
  
  dialog.openFile = function(callback, multiple, acceptTypes) {
    var dialog = document.createElement('input');
    dialog.type = 'file';
    if (multiple === true) {
      dialog.multiple = 'multiple';
    }
    if (angular.isArray(acceptTypes)) {
      dialog.accept = acceptTypes.join(',');
    } else if (angular.isString(acceptTypes)) {
      dialog.accept = acceptTypes;
    }
    callDialog(dialog, callback);
  };
  
  dialog.openDir = function(callback) {
    var dialog = document.createElement('input');
    dialog.type = 'file';
    dialog.nwdirectory = 'nwdirectory';
    callDialog(dialog, callback);
  };
  
  return dialog;
}]);