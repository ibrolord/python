/*! RESOURCE: /scripts/js_includes_knowledge_import.js */
/*! RESOURCE: /scripts/angularjs-1.4/thirdparty/angular-file-upload/angular-file-upload-all.js */
(function() {
function patchXHR(fnName, newFn) {
window.XMLHttpRequest.prototype[fnName] = newFn(window.XMLHttpRequest.prototype[fnName]);
}
if (window.XMLHttpRequest && !window.XMLHttpRequest.__isFileAPIShim) {
patchXHR('setRequestHeader', function(orig) {
return function(header, value) {
if (header === '__setXHR_') {
var val = value(this);
if (val instanceof Function) {
val(this);
}
} else {
orig.apply(this, arguments);
}
}
});
}
var angularFileUpload = angular.module('angularFileUpload', []);
angularFileUpload.version = '3.1.2';
angularFileUpload.service('$upload', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
function sendHttp(config) {
config.method = config.method || 'POST';
config.headers = config.headers || {};
config.transformRequest = config.transformRequest || function(data, headersGetter) {
if (window.ArrayBuffer && data instanceof window.ArrayBuffer) {
return data;
}
return $http.defaults.transformRequest[0](data, headersGetter);
};
var deferred = $q.defer();
var promise = deferred.promise;
config.headers['__setXHR_'] = function() {
return function(xhr) {
if (!xhr) return;
config.__XHR = xhr;
config.xhrFn && config.xhrFn(xhr);
xhr.upload.addEventListener('progress', function(e) {
e.config = config;
deferred.notify ? deferred.notify(e) : promise.progress_fn && $timeout(function(){promise.progress_fn(e)});
}, false);
xhr.upload.addEventListener('load', function(e) {
if (e.lengthComputable) {
e.config = config;
deferred.notify ? deferred.notify(e) : promise.progress_fn && $timeout(function(){promise.progress_fn(e)});
}
}, false);
};
};
$http(config).then(function(r){deferred.resolve(r)}, function(e){deferred.reject(e)}, function(n){deferred.notify(n)});
promise.success = function(fn) {
promise.then(function(response) {
fn(response.data, response.status, response.headers, config);
});
return promise;
};
promise.error = function(fn) {
promise.then(null, function(response) {
fn(response.data, response.status, response.headers, config);
});
return promise;
};
promise.progress = function(fn) {
promise.progress_fn = fn;
promise.then(null, null, function(update) {
fn(update);
});
return promise;
};
promise.abort = function() {
if (config.__XHR) {
$timeout(function() {
config.__XHR.abort();
});
}
return promise;
};
promise.xhr = function(fn) {
config.xhrFn = (function(origXhrFn) {
return function() {
origXhrFn && origXhrFn.apply(promise, arguments);
fn.apply(promise, arguments);
}
})(config.xhrFn);
return promise;
};
return promise;
}
this.upload = function(config) {
config.headers = config.headers || {};
config.headers['Content-Type'] = undefined;
var origTransformRequest = config.transformRequest;
config.transformRequest = config.transformRequest ?
(Object.prototype.toString.call(config.transformRequest) === '[object Array]' ?
config.transformRequest : [config.transformRequest]) : [];
config.transformRequest.push(function(data, headerGetter) {
var formData = new FormData();
var allFields = {};
for (var key in config.fields) allFields[key] = config.fields[key];
if (data) allFields['data'] = data;
if (config.formDataAppender) {
for (var key in allFields) {
config.formDataAppender(formData, key, allFields[key]);
}
} else {
for (var key in allFields) {
var val = allFields[key];
if (val !== undefined) {
if (Object.prototype.toString.call(val) === '[object String]') {
formData.append(key, val);
} else {
if (config.sendObjectsAsJsonBlob && typeof val === 'object') {
formData.append(key, new Blob([val], { type: 'application/json' }));
} else {
formData.append(key, JSON.stringify(val));
}
}
}
}
}
if (config.file != null) {
var fileFormName = config.fileFormDataName || 'file';
if (Object.prototype.toString.call(config.file) === '[object Array]') {
var isFileFormNameString = Object.prototype.toString.call(fileFormName) === '[object String]';
for (var i = 0; i < config.file.length; i++) {
formData.append(isFileFormNameString ? fileFormName : fileFormName[i], config.file[i],
(config.fileName && config.fileName[i]) || config.file[i].name);
}
} else {
formData.append(fileFormName, config.file, config.fileName || config.file.name);
}
}
return formData;
});
return sendHttp(config);
};
this.http = function(config) {
return sendHttp(config);
};
}]);
angularFileUpload.directive('ngFileSelect', [ '$parse', '$timeout', '$compile',
function($parse, $timeout, $compile) { return {
restrict: 'AEC',
require:'?ngModel',
link: function(scope, elem, attr, ngModel) {
handleFileSelect(scope, elem, attr, ngModel, $parse, $timeout, $compile);
}
}}]);
function handleFileSelect(scope, elem, attr, ngModel, $parse, $timeout, $compile) {
function isInputTypeFile() {
return elem[0].tagName.toLowerCase() === 'input' && elem.attr('type') && elem.attr('type').toLowerCase() === 'file';
}
var watchers = [];
function watchForRecompile(attrVal) {
$timeout(function() {
if (elem.parent().length) {
watchers.push(scope.$watch(attrVal, function(val, oldVal) {
if (val != oldVal) {
recompileElem();
}
}));
}
});
}
function recompileElem() {
var clone = elem.clone();
if (elem.attr('__afu_gen__')) {
angular.element(document.getElementById(elem.attr('id').substring(1))).remove();
}
if (elem.parent().length) {
for (var i = 0; i < watchers.length; i++) {
watchers[i]();
}
elem.replaceWith(clone);
$compile(clone)(scope);
}
return clone;
}
function bindAttr(bindAttr, attrName) {
if (bindAttr) {
watchForRecompile(bindAttr);
var val = $parse(bindAttr)(scope);
if (val) {
elem.attr(attrName, val);
attr[attrName] = val;
} else {
elem.attr(attrName, null);
delete attr[attrName];
}
}
}
bindAttr(attr.ngMultiple, 'multiple');
bindAttr(attr.ngAccept, 'ng-accept');
bindAttr(attr.ngCapture, 'capture');
if (attr['ngFileSelect'] != '') {
attr.ngFileChange = attr.ngFileSelect;
}
function onChangeFn(evt) {
var files = [], fileList, i;
fileList = evt.__files_ || (evt.target && evt.target.files);
updateModel(fileList, attr, ngModel, scope, evt);
};
var fileElem = elem;
if (!isInputTypeFile()) {
fileElem = angular.element('<input type="file">')
if (elem.attr('multiple')) fileElem.attr('multiple', elem.attr('multiple'));
if (elem.attr('accept')) fileElem.attr('accept', elem.attr('accept'));
if (elem.attr('capture')) fileElem.attr('capture', elem.attr('capture'));
for (var key in attr) {
if (key.indexOf('inputFile') == 0) {
var name = key.substring('inputFile'.length);
name = name[0].toLowerCase() + name.substring(1);
fileElem.attr(name, attr[key]);
}
}
fileElem.css('width', '0px').css('height', '0px').css('position', 'absolute').css('padding', 0).css('margin', 0)
.css('overflow', 'hidden').attr('tabindex', '-1').css('opacity', 0).attr('__afu_gen__', true);
elem.attr('__refElem__', true);
fileElem[0].__refElem__ = elem[0];
elem.parent()[0].insertBefore(fileElem[0], elem[0])
elem.css('overflow', 'hidden');
elem.bind('click', function(e) {
if (!resetAndClick(e)) {
fileElem[0].click();
}
});
} else {
elem.bind('click', resetAndClick);
}
function resetAndClick(evt) {
if (fileElem[0].value != null && fileElem[0].value != '') {
fileElem[0].value = null;
if (navigator.userAgent.indexOf("Trident/7") === -1) {
onChangeFn({target: {files: []}});
}
}
if (!elem.attr('__afu_clone__')) {
if (navigator.appVersion.indexOf("MSIE 10") !== -1 || navigator.userAgent.indexOf("Trident/7") !== -1) {
var clone = recompileElem();
clone.attr('__afu_clone__', true);
clone[0].click();
evt.preventDefault();
evt.stopPropagation();
return true;
}
} else {
elem.attr('__afu_clone__', null);
}
}
fileElem.bind('change', onChangeFn);
elem.on('$destroy', function() {
for (var i = 0; i < watchers.length; i++) {
watchers[i]();
}
if (elem[0] != fileElem[0]) fileElem.remove();
});
watchers.push(scope.$watch(attr.ngModel, function(val, oldVal) {
if (val != oldVal && (val == null || !val.length)) {
if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
recompileElem();
} else {
fileElem[0].value = null;
}
}
}));
function updateModel(fileList, attr, ngModel, scope, evt) {
var files = [], rejFiles = [];
var accept = $parse(attr.ngAccept)(scope);
var regexp = angular.isString(accept) && accept ? new RegExp(globStringToRegex(accept), 'gi') : null;
var acceptFn = regexp ? null : attr.ngAccept;
for (var i = 0; i < fileList.length; i++) {
var file = fileList.item(i);
if ((!regexp || file.type.match(regexp) || (file.name != null && file.name.match(regexp))) &&
(!acceptFn || $parse(acceptFn)(scope, {$file: file, $event: evt}))) {
files.push(file);
} else {
rejFiles.push(file);
}
}
$timeout(function() {
if (ngModel) {
$parse(attr.ngModel).assign(scope, files);
ngModel && ngModel.$setViewValue(files != null && files.length == 0 ? '' : files);
if (attr.ngModelRejected) {
$parse(attr.ngModelRejected).assign(scope, rejFiles);
}
}
if (attr.ngFileChange && attr.ngFileChange != "") {
$parse(attr.ngFileChange)(scope, {
$files: files,
$rejectedFiles: rejFiles,
$event: evt
});
}
});
}
}
angularFileUpload.directive('ngFileDrop', [ '$parse', '$timeout', '$location', function($parse, $timeout, $location) { return {
restrict: 'AEC',
require:'?ngModel',
link: function(scope, elem, attr, ngModel) {
handleDrop(scope, elem, attr, ngModel, $parse, $timeout, $location);
}
}}]);
angularFileUpload.directive('ngNoFileDrop', function() {
return function(scope, elem, attr) {
if (dropAvailable()) elem.css('display', 'none')
}
});
angularFileUpload.directive('ngFileDropAvailable', [ '$parse', '$timeout', function($parse, $timeout) {
return function(scope, elem, attr) {
if (dropAvailable()) {
var fn = $parse(attr['ngFileDropAvailable']);
$timeout(function() {
fn(scope);
});
}
}
}]);
function handleDrop(scope, elem, attr, ngModel, $parse, $timeout, $location) {
var available = dropAvailable();
if (attr['dropAvailable']) {
$timeout(function() {
scope.dropAvailable ? scope.dropAvailable.value = available : scope.dropAvailable = available;
});
}
if (!available) {
if ($parse(attr.hideOnDropNotAvailable)(scope) != false) {
elem.css('display', 'none');
}
return;
}
var leaveTimeout = null;
var stopPropagation = $parse(attr.stopPropagation)(scope);
var dragOverDelay = 1;
var accept = $parse(attr.ngAccept)(scope) || attr.accept;
var regexp = angular.isString(accept) && accept ? new RegExp(globStringToRegex(accept), 'gi') : null;
var acceptFn = regexp ? null : attr.ngAccept;
var actualDragOverClass;
elem[0].addEventListener('dragover', function(evt) {
evt.preventDefault();
if (stopPropagation) evt.stopPropagation();
if (navigator.userAgent.indexOf("Chrome") > -1) {
var b = evt.dataTransfer.effectAllowed;
evt.dataTransfer.dropEffect = ('move' === b || 'linkMove' === b) ? 'move' : 'copy';
}
$timeout.cancel(leaveTimeout);
if (!scope.actualDragOverClass) {
actualDragOverClass = calculateDragOverClass(scope, attr, evt);
}
elem.addClass(actualDragOverClass);
}, false);
elem[0].addEventListener('dragenter', function(evt) {
evt.preventDefault();
if (stopPropagation) evt.stopPropagation();
}, false);
elem[0].addEventListener('dragleave', function(evt) {
leaveTimeout = $timeout(function() {
elem.removeClass(actualDragOverClass);
actualDragOverClass = null;
}, dragOverDelay || 1);
}, false);
if (attr['ngFileDrop'] != '') {
attr.ngFileChange = attr['ngFileDrop'];
}
elem[0].addEventListener('drop', function(evt) {
evt.preventDefault();
if (stopPropagation) evt.stopPropagation();
elem.removeClass(actualDragOverClass);
actualDragOverClass = null;
extractFiles(evt, function(files, rejFiles) {
$timeout(function() {
if (ngModel) {
$parse(attr.ngModel).assign(scope, files);
ngModel && ngModel.$setViewValue(files != null && files.length == 0 ? '' : files);
}
if (attr['ngModelRejected']) {
if (scope[attr.ngModelRejected]) {
$parse(attr.ngModelRejected).assign(scope, rejFiles);
}
}
});
$timeout(function() {
$parse(attr.ngFileChange)(scope, {
$files: files,
$rejectedFiles: rejFiles,
$event: evt
});
});
}, $parse(attr.allowDir)(scope) != false, attr.multiple || $parse(attr.ngMultiple)(scope));
}, false);
function calculateDragOverClass(scope, attr, evt) {
var valid = true;
if (regexp || acceptFn) {
var items = evt.dataTransfer.items;
if (items != null) {
for (var i = 0 ; i < items.length && valid; i++) {
valid = valid && (items[i].kind == 'file' || items[i].kind == '') &&
((acceptFn && $parse(acceptFn)(scope, {$file: items[i], $event: evt})) ||
(regexp && (items[i].type != null && items[i].type.match(regexp)) ||
(items[i].name != null && items[i].name.match(regexp))));
}
}
}
var clazz = $parse(attr.dragOverClass)(scope, {$event : evt});
if (clazz) {
if (clazz.delay) dragOverDelay = clazz.delay;
if (clazz.accept) clazz = valid ? clazz.accept : clazz.reject;
}
return clazz || attr['dragOverClass'] || 'dragover';
}
function extractFiles(evt, callback, allowDir, multiple) {
var files = [], rejFiles = [], items = evt.dataTransfer.items, processing = 0;
function addFile(file) {
if ((!regexp || file.type.match(regexp) || (file.name != null && file.name.match(regexp))) &&
(!acceptFn || $parse(acceptFn)(scope, {$file: file, $event: evt}))) {
files.push(file);
} else {
rejFiles.push(file);
}
}
if (items && items.length > 0 && $location.protocol() != 'file') {
for (var i = 0; i < items.length; i++) {
if (items[i].webkitGetAsEntry && items[i].webkitGetAsEntry() && items[i].webkitGetAsEntry().isDirectory) {
var entry = items[i].webkitGetAsEntry();
if (entry.isDirectory && !allowDir) {
continue;
}
if (entry != null) {
traverseFileTree(files, entry);
}
} else {
var f = items[i].getAsFile();
if (f != null) addFile(f);
}
if (!multiple && files.length > 0) break;
}
} else {
var fileList = evt.dataTransfer.files;
if (fileList != null) {
for (var i = 0; i < fileList.length; i++) {
addFile(fileList.item(i));
if (!multiple && files.length > 0) break;
}
}
}
var delays = 0;
(function waitForProcess(delay) {
$timeout(function() {
if (!processing) {
if (!multiple && files.length > 1) {
var i = 0;
while (files[i].type == 'directory') i++;
files = [files[i]];
}
callback(files, rejFiles);
} else {
if (delays++ * 10 < 20 * 1000) {
waitForProcess(10);
}
}
}, delay || 0)
})();
function traverseFileTree(files, entry, path) {
if (entry != null) {
if (entry.isDirectory) {
var filePath = (path || '') + entry.name;
addFile({name: entry.name, type: 'directory', path: filePath});
var dirReader = entry.createReader();
var entries = [];
processing++;
var readEntries = function() {
dirReader.readEntries(function(results) {
try {
if (!results.length) {
for (var i = 0; i < entries.length; i++) {
traverseFileTree(files, entries[i], (path ? path : '') + entry.name + '/');
}
processing--;
} else {
entries = entries.concat(Array.prototype.slice.call(results || [], 0));
readEntries();
}
} catch (e) {
processing--;
console.error(e);
}
}, function() {
processing--;
});
};
readEntries();
} else {
processing++;
entry.file(function(file) {
try {
processing--;
file.path = (path ? path : '') + file.name;
addFile(file);
} catch (e) {
processing--;
console.error(e);
}
}, function(e) {
processing--;
});
}
}
}
}
}
function dropAvailable() {
var div = document.createElement('div');
return ('draggable' in div) && ('ondrop' in div);
}
function globStringToRegex(str) {
if (str.length > 2 && str[0] === '/' && str[str.length -1] === '/') {
return str.substring(1, str.length - 1);
}
var split = str.split(','), result = '';
if (split.length > 1) {
for (var i = 0; i < split.length; i++) {
result += '(' + globStringToRegex(split[i]) + ')';
if (i < split.length - 1) {
result += '|'
}
}
} else {
if (str.indexOf('.') == 0) {
str= '*' + str;
}
result = '^' + str.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + '-]', 'g'), '\\$&') + '$';
result = result.replace(/\\\*/g, '.*').replace(/\\\?/g, '.');
}
return result;
}
var ngFileUpload = angular.module('ngFileUpload', []);
for (var key in angularFileUpload) {
ngFileUpload[key] = angularFileUpload[key];
}
})();
(function() {
var hasFlash = function() {
try {
var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
if (fo) return true;
} catch(e) {
if (navigator.mimeTypes['application/x-shockwave-flash'] != undefined) return true;
}
return false;
}
function patchXHR(fnName, newFn) {
window.XMLHttpRequest.prototype[fnName] = newFn(window.XMLHttpRequest.prototype[fnName]);
};
if ((window.XMLHttpRequest && !window.FormData) || (window.FileAPI && FileAPI.forceLoad)) {
var initializeUploadListener = function(xhr) {
if (!xhr.__listeners) {
if (!xhr.upload) xhr.upload = {};
xhr.__listeners = [];
var origAddEventListener = xhr.upload.addEventListener;
xhr.upload.addEventListener = function(t, fn, b) {
xhr.__listeners[t] = fn;
origAddEventListener && origAddEventListener.apply(this, arguments);
};
}
}
patchXHR('open', function(orig) {
return function(m, url, b) {
initializeUploadListener(this);
this.__url = url;
try {
orig.apply(this, [m, url, b]);
} catch (e) {
if (e.message.indexOf('Access is denied') > -1) {
this.__origError = e;
orig.apply(this, [m, '_fix_for_ie_crossdomain__', b]);
}
}
}
});
patchXHR('getResponseHeader', function(orig) {
return function(h) {
return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(h) : (orig == null ? null : orig.apply(this, [h]));
};
});
patchXHR('getAllResponseHeaders', function(orig) {
return function() {
return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : (orig == null ? null : orig.apply(this));
}
});
patchXHR('abort', function(orig) {
return function() {
return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : (orig == null ? null : orig.apply(this));
}
});
patchXHR('setRequestHeader', function(orig) {
return function(header, value) {
if (header === '__setXHR_') {
initializeUploadListener(this);
var val = value(this);
if (val instanceof Function) {
val(this);
}
} else {
this.__requestHeaders = this.__requestHeaders || {};
this.__requestHeaders[header] = value;
orig.apply(this, arguments);
}
}
});
function redefineProp(xhr, prop, fn) {
try {
Object.defineProperty(xhr, prop, {get: fn});
} catch (e) {}
}
patchXHR('send', function(orig) {
return function() {
var xhr = this;
if (arguments[0] && arguments[0].__isFileAPIShim) {
var formData = arguments[0];
var config = {
url: xhr.__url,
jsonp: false,
cache: true,
complete: function(err, fileApiXHR) {
xhr.__completed = true;
if (!err && xhr.__listeners['load'])
xhr.__listeners['load']({type: 'load', loaded: xhr.__loaded, total: xhr.__total, target: xhr, lengthComputable: true});
if (!err && xhr.__listeners['loadend'])
xhr.__listeners['loadend']({type: 'loadend', loaded: xhr.__loaded, total: xhr.__total, target: xhr, lengthComputable: true});
if (err === 'abort' && xhr.__listeners['abort'])
xhr.__listeners['abort']({type: 'abort', loaded: xhr.__loaded, total: xhr.__total, target: xhr, lengthComputable: true});
if (fileApiXHR.status !== undefined) redefineProp(xhr, 'status', function() {return (fileApiXHR.status == 0 && err && err !== 'abort') ? 500 : fileApiXHR.status});
if (fileApiXHR.statusText !== undefined) redefineProp(xhr, 'statusText', function() {return fileApiXHR.statusText});
redefineProp(xhr, 'readyState', function() {return 4});
if (fileApiXHR.response !== undefined) redefineProp(xhr, 'response', function() {return fileApiXHR.response});
var resp = fileApiXHR.responseText || (err && fileApiXHR.status == 0 && err !== 'abort' ? err : undefined);
redefineProp(xhr, 'responseText', function() {return resp});
redefineProp(xhr, 'response', function() {return resp});
if (err) redefineProp(xhr, 'err', function() {return err});
xhr.__fileApiXHR = fileApiXHR;
if (xhr.onreadystatechange) xhr.onreadystatechange();
if (xhr.onload) xhr.onload();
},
fileprogress: function(e) {
e.target = xhr;
xhr.__listeners['progress'] && xhr.__listeners['progress'](e);
xhr.__total = e.total;
xhr.__loaded = e.loaded;
if (e.total === e.loaded) {
var _this = this
setTimeout(function() {
if (!xhr.__completed) {
xhr.getAllResponseHeaders = function(){};
_this.complete(null, {status: 204, statusText: 'No Content'});
}
}, FileAPI.noContentTimeout || 10000);
}
},
headers: xhr.__requestHeaders
}
config.data = {};
config.files = {}
for (var i = 0; i < formData.data.length; i++) {
var item = formData.data[i];
if (item.val != null && item.val.name != null && item.val.size != null && item.val.type != null) {
config.files[item.key] = item.val;
} else {
config.data[item.key] = item.val;
}
}
setTimeout(function() {
if (!hasFlash()) {
throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
}
xhr.__fileApiXHR = FileAPI.upload(config);
}, 1);
} else {
if (this.__origError) {
throw this.__origError;
}
orig.apply(xhr, arguments);
}
}
});
window.XMLHttpRequest.__isFileAPIShim = true;
var addFlash = function(elem) {
if (!hasFlash()) {
throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
}
var el = angular.element(elem);
if (!el.attr('disabled')) {
var hasFileSelect = false;
for (var i = 0; i < el[0].attributes.length; i++) {
var attrib = el[0].attributes[i];
if (attrib.name.indexOf('file-select') !== -1) {
hasFileSelect = true;
break;
}
}
if (!el.hasClass('js-fileapi-wrapper') && (hasFileSelect || el.attr('__afu_gen__') != null)) {
el.addClass('js-fileapi-wrapper');
if (el.attr('__afu_gen__') != null) {
var ref = (el[0].__refElem__ && angular.element(el[0].__refElem__)) || el;
while (ref && !ref.attr('__refElem__')) {
ref = angular.element(ref[0].nextSibling);
}
ref.bind('mouseover', function() {
if (el.parent().css('position') === '' || el.parent().css('position') === 'static') {
el.parent().css('position', 'relative');
}
el.css('position', 'absolute').css('top', ref[0].offsetTop + 'px').css('left', ref[0].offsetLeft + 'px')
.css('width', ref[0].offsetWidth + 'px').css('height', ref[0].offsetHeight + 'px')
.css('padding', ref.css('padding')).css('margin', ref.css('margin')).css('filter', 'alpha(opacity=0)');
ref.attr('onclick', '');
el.css('z-index', '1000');
});
}
}
}
};
var changeFnWrapper = function(fn) {
return function(evt) {
var files = FileAPI.getFiles(evt);
for (var i = 0; i < files.length; i++) {
if (files[i].size === undefined) files[i].size = 0;
if (files[i].name === undefined) files[i].name = 'file';
if (files[i].type === undefined) files[i].type = 'undefined';
}
if (!evt.target) {
evt.target = {};
}
evt.target.files = files;
if (evt.target.files != files) {
evt.__files_ = files;
}
(evt.__files_ || evt.target.files).item = function(i) {
return (evt.__files_ || evt.target.files)[i] || null;
}
if (fn) fn.apply(this, [evt]);
};
};
var isFileChange = function(elem, e) {
return (e.toLowerCase() === 'change' || e.toLowerCase() === 'onchange') && elem.getAttribute('type') == 'file';
}
if (HTMLInputElement.prototype.addEventListener) {
HTMLInputElement.prototype.addEventListener = (function(origAddEventListener) {
return function(e, fn, b, d) {
if (isFileChange(this, e)) {
addFlash(this);
origAddEventListener.apply(this, [e, changeFnWrapper(fn), b, d]);
} else {
origAddEventListener.apply(this, [e, fn, b, d]);
}
}
})(HTMLInputElement.prototype.addEventListener);
}
if (HTMLInputElement.prototype.attachEvent) {
HTMLInputElement.prototype.attachEvent = (function(origAttachEvent) {
return function(e, fn) {
if (isFileChange(this, e)) {
addFlash(this);
if (window.jQuery) {
angular.element(this).bind('change', changeFnWrapper(null));
} else {
origAttachEvent.apply(this, [e, changeFnWrapper(fn)]);
}
} else {
origAttachEvent.apply(this, [e, fn]);
}
}
})(HTMLInputElement.prototype.attachEvent);
}
window.FormData = FormData = function() {
return {
append: function(key, val, name) {
if (val.__isFileAPIBlobShim) {
val = val.data[0];
}
this.data.push({
key: key,
val: val,
name: name
});
},
data: [],
__isFileAPIShim: true
};
};
window.Blob = Blob = function(b) {
return {
data: b,
__isFileAPIBlobShim: true
};
};
(function () {
if (!window.FileAPI) {
window.FileAPI = {};
}
if (FileAPI.forceLoad) {
FileAPI.html5 = false;
}
if (!FileAPI.upload) {
var jsUrl, basePath, script = document.createElement('script'), allScripts = document.getElementsByTagName('script'), i, index, src;
if (window.FileAPI.jsUrl) {
jsUrl = window.FileAPI.jsUrl;
} else if (window.FileAPI.jsPath) {
basePath = window.FileAPI.jsPath;
} else {
for (i = 0; i < allScripts.length; i++) {
src = allScripts[i].src;
index = src.search(/\/angular\-file\-upload[\-a-zA-z0-9\.]*\.js/)
if (index > -1) {
basePath = src.substring(0, index + 1);
break;
}
}
}
if (FileAPI.staticPath == null) FileAPI.staticPath = basePath;
script.setAttribute('src', jsUrl || basePath + 'FileAPI.min.js');
document.getElementsByTagName('head')[0].appendChild(script);
FileAPI.hasFlash = hasFlash();
}
})();
FileAPI.disableFileInput = function(elem, disable) {
if (disable) {
elem.removeClass('js-fileapi-wrapper')
} else {
elem.addClass('js-fileapi-wrapper');
}
}
}
if (!window.FileReader) {
window.FileReader = function() {
var _this = this, loadStarted = false;
this.listeners = {};
this.addEventListener = function(type, fn) {
_this.listeners[type] = _this.listeners[type] || [];
_this.listeners[type].push(fn);
};
this.removeEventListener = function(type, fn) {
_this.listeners[type] && _this.listeners[type].splice(_this.listeners[type].indexOf(fn), 1);
};
this.dispatchEvent = function(evt) {
var list = _this.listeners[evt.type];
if (list) {
for (var i = 0; i < list.length; i++) {
list[i].call(_this, evt);
}
}
};
this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
var constructEvent = function(type, evt) {
var e = {type: type, target: _this, loaded: evt.loaded, total: evt.total, error: evt.error};
if (evt.result != null) e.target.result = evt.result;
return e;
};
var listener = function(evt) {
if (!loadStarted) {
loadStarted = true;
_this.onloadstart && _this.onloadstart(constructEvent('loadstart', evt));
}
if (evt.type === 'load') {
_this.onloadend && _this.onloadend(constructEvent('loadend', evt));
var e = constructEvent('load', evt);
_this.onload && _this.onload(e);
_this.dispatchEvent(e);
} else if (evt.type === 'progress') {
var e = constructEvent('progress', evt);
_this.onprogress && _this.onprogress(e);
_this.dispatchEvent(e);
} else {
var e = constructEvent('error', evt);
_this.onerror && _this.onerror(e);
_this.dispatchEvent(e);
}
};
this.readAsArrayBuffer = function(file) {
FileAPI.readAsBinaryString(file, listener);
}
this.readAsBinaryString = function(file) {
FileAPI.readAsBinaryString(file, listener);
}
this.readAsDataURL = function(file) {
FileAPI.readAsDataURL(file, listener);
}
this.readAsText = function(file) {
FileAPI.readAsText(file, listener);
}
}
}
})();
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.import/_articles.import.js */
angular.module('sn.knowledge.articles.import', []);
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.import/controller.knowledgeImport.js */
angular.module('sn.knowledge.articles.import').controller('KnowledgeImportController', function($rootScope, $scope, $timeout, KnowledgeImportUploader, ApplicationState, MyKnowledgeBasesService, userPreferences, i18n, KnowledgeGlobalData) {
"use strict";
var errorMessage = {};
getI18nMessages();
$scope.applicationState = ApplicationState;
$scope.KnowledgeGlobalData = KnowledgeGlobalData;
$scope.model = {
files: [],
canceledFiles: [],
unSupportedFiles: [],
status: "idle",
completed: false,
descriptionFromTitle: false,
publish: false,
selectedKnowledgeBase: {},
selectedCategory: {},
refresh: false,
errors: false,
isUnSupportedFilesVisible: false,
kbRefED: {
reference: 'kb_knowledge_base',
searchField: 'title',
attributes: '',
name: 'knowledge_base',
qualifier: getCanContributeKnowledgeBases()
},
categoryRefED: {
reference: 'kb_category',
searchField: 'label',
attributes: '',
name: 'category',
qualifier: [],
options: {
sortResults: function(results) {
return results.sort(function(a, b) {
return a.full_category < b.full_category ? -1 : a.full_category > b.full_category;
});
}
}
},
meta: {
categoryList: [],
kbList: []
},
};
$scope.fileDropped = function(file) {
if ($scope.model.completed) {
if ($scope.isSuccessfulUpload() > 0)
return;
$scope.clear();
}
selectUserPreference();
populateKnowledgeBases();
selectKnowledgeBaseAndCategory();
ApplicationState.import.isInProgess = true;
$scope.model.status = 'selecting';
if(angular.isObject(file)) {
if (!KnowledgeImportUploader.isValidFile(file)) {
file.description = file.name;
$scope.model.unSupportedFiles.push(file);
} else {
file.description = file.name.substr(0, file.name.lastIndexOf('.'));
file.originalDescription = file.name.substr(0, file.name.lastIndexOf('.'));
$scope.model.files.push(file);
}
}
};
$scope.kbSelected = function() {
if (!$scope.model.selectedKnowledgeBase.value)
return;
$scope.model.selectedCategory = {};
$timeout(function() {
$scope.model.refresh = true;
$timeout(function() {
$scope.model.refresh = false;
});
});
populateCategories($scope.model.selectedKnowledgeBase.value);
};
$scope.removeFile = function(index) {
if ($scope.model.status !== "selecting") {
var canceledFile = $scope.model.files[index];
$scope.model.canceledFiles.push(canceledFile);
}
$scope.model.files.splice(index, 1);
if (!$scope.model.files.length)
$scope.clear();
};
$scope.progress = function() {
var total = 0;
for (var i = 0; i < $scope.model.files.length; i++)
if ($scope.model.files[i].progress)
total += $scope.model.files[i].progress;
return total / $scope.model.files.length;
};
var isFormValid = function() {
return $scope.model.selectedKnowledgeBase.value;
};
$scope.beginUpload = function() {
if(!$scope.showPublishCheckbox())
$scope.model.publish = false;
if (!isFormValid()) {
$scope.model.error = true;
return;
}
$scope.model.status = 'backgroundUploading';
ApplicationState.import.isInProgress = true;
setUserPreference($scope.model.publish);
KnowledgeImportUploader.uploadFiles($scope.model.files, $scope.model.selectedKnowledgeBase,
$scope.model.selectedCategory, $scope.model.publish, function() {
$scope.model.completed = true;
if ($scope.isSuccessfulUpload() > 0)
$scope.model.status = 'detailedUploading';
ApplicationState.import.isInProgress = false;
}, function() {
$scope.model.completed = true;
$scope.model.status = 'detailedUploading';
ApplicationState.import.isInProgress = false;
});
};
$scope.cancelUpload = function(fileIndex) {
$scope.model.files[fileIndex].cancelUpload();
$scope.removeFile(fileIndex);
};
$scope.isSuccessfulUpload = function() {
var errors = 0;
for (var i = 0; i < $scope.model.files.length; i++)
if ($scope.model.files[i].failure)
errors++;
return errors;
};
$scope.getUploadErrorMessage = function() {
if ($scope.isSuccessfulUpload() !== 0) {
return ( $scope.isSuccessfulUpload() === 1 ? errorMessage.WITH_ERROR.translated : errorMessage.WITH_ERRORS.translated);
}
return "";
};
$scope.clear = function() {
$scope.model.status = 'idle';
$scope.model.files = [];
$scope.model.canceledFiles = [];
$scope.model.unSupportedFiles = [];
$scope.model.errors = false;
$scope.model.completed = false;
$scope.model.selectedKnowledgeBase = {};
$scope.model.selectedCategory = {};
$rootScope.$broadcast('importDialogClosed');
$timeout(function() {
ApplicationState.import.isInProgress = false;
});
};
$scope.$on('importArticlesButtonClicked', function() {
$timeout(function() {
angular.element('#impClsBtn').focus();
}, 0, false);
});
$scope.$watch('model.status', function(newValue, oldValue) {
if(newValue && newValue !== oldValue) {
if(newValue == 'backgroundUploading') {
$timeout(function() {
angular.element('#smlPrgsBar').focus();
}, 0, false);
}
else if(newValue == 'detailedUploading') {
$timeout(function() {
angular.element('#bigPrgsBar_1').focus();
}, 0, false);
}
}
});
$scope.$watch('model.completed', function(newValue, oldValue) {
if(newValue && newValue !== oldValue) {
if(newValue == true && $scope.model.status == 'detailedUploading') {
$timeout(function() {
angular.element('#sdcb').focus();
}, 0, false);
}
}
});
$scope.handleEscape = function($event) {
if($event.keyCode && $event.keyCode == 27) {
$event.stopPropagation();
$scope.clear();
}
};
$scope.handleCloseTabKey = function($event) {
if($event.keyCode && $event.keyCode == 9 && $event.shiftKey) {
$event.stopPropagation();
if(angular.element('#impStartBtn').prop('disabled') === true) {
$timeout(function() {
angular.element('#impCancelBtn').focus();
}, 0, false);
}
else {
$timeout(function() {
angular.element('#impStartBtn').focus();
}, 0, false);
}
}
};
$scope.handleCancelTabKey = function($event) {
if($event.keyCode && $event.keyCode == 9 && !$event.shiftKey && angular.element('#impStartBtn').prop('disabled') === true) {
document.getElementById('modal_import_pane').focus();
$event.stopPropagation();
}
};
$scope.handleImportTabKey = function($event) {
if($event.keyCode && $event.keyCode == 9 && !$event.shiftKey) {
document.getElementById('modal_import_pane').focus();
$event.stopPropagation();
}
};
$scope.handleProgressTabKey = function($event, itemIndex) {
if($event.keyCode && $event.keyCode == 9 && $event.shiftKey && itemIndex === 0) {
$event.stopPropagation();
$timeout(function() {
angular.element('#bgBtn').focus();
});
}
};
$scope.handleBackgroundTabKey = function($event) {
if($event.keyCode && $event.keyCode == 9 && !$event.shiftKey) {
$event.stopPropagation();
$timeout(function() {
angular.element('#pdesc_1').focus();
});
}
};
$scope.handleSucDlgCloseTabKey = function($event) {
if($event.keyCode && $event.keyCode == 9 && $event.shiftKey) {
$event.stopPropagation();
$timeout(function() {
angular.element('#sdcbf').focus();
});
}
};
$scope.handleSucDlgCloseFootTabKey = function($event) {
if($event.keyCode && $event.keyCode == 9 && !$event.shiftKey) {
$event.stopPropagation();
$timeout(function() {
angular.element('#sdcb1').focus();
});
}
};
$scope.isGlobalDropEnabled = function() {
var isIdleAndNotCompleted = ($scope.model.status === 'idle' && $scope.model.completed === false);
var isDetailedUploadingAndCompleted = ($scope.model.status === 'detailedUploading' && $scope.model.completed === true);
var isBackgroundUploadingAndCompleted = ($scope.model.status === 'backgroundUploading' && $scope.model.completed === true);
return isIdleAndNotCompleted || isDetailedUploadingAndCompleted || isBackgroundUploadingAndCompleted;
};
$scope.getErrorMessage = function() {
return $scope.model.unSupportedFiles.length > 1 ?
$scope.feedbackMessages.FILES_NOT_SUPPORTED.translated : $scope.feedbackMessages.FILE_NOT_SUPPORTED.translated;
};
$scope.toggleUnSupportedFiles = function() {
$scope.model.isUnSupportedFilesVisible = !$scope.model.isUnSupportedFilesVisible;
};
$scope.showPublishCheckbox = function() {
return (kbSystemProperty.showPublishCheckboxOnImport == 'true' ? true : false);
};
$scope.getUIMessage = function(messageKey, params) {
var message = errorMessage[messageKey].translated;
return message.replace(/\{(\d+)\}/g, function() {
return params[arguments[1]];
});
};
function selectKnowledgeBaseAndCategory() {
var newKb = $scope.applicationState.selectedKnowledgeBase;
var newCategory = $scope.applicationState.selectedCategory;
if ($scope.model.status !== "idle") return;
if (!newKb) return;
var knowledgeBaseToSelect = {
displayValue: ApplicationState.selectedKnowledgeBase.title,
value: ApplicationState.selectedKnowledgeBase.sys_id
};
var shouldSelectKb = typeof knowledgeBaseToSelect.value === "string" && knowledgeBaseToSelect.value.length > 0
&& ApplicationState.selectedKnowledgeBase.canContribute;
if (shouldSelectKb) {
$scope.model.selectedKnowledgeBase = knowledgeBaseToSelect;
}
if (!newCategory) return;
var categoryToSelect = {
displayValue: ApplicationState.selectedCategory.full_category ? ApplicationState.selectedCategory.full_category : "",
value: ApplicationState.selectedCategory.sys_id ? ApplicationState.selectedCategory.sys_id : ""
};
var categoryListData = [];
flattenCategoryJSON([], ApplicationState.selectionCategories, categoryListData);
if (typeof categoryToSelect.value === "string" && categoryToSelect.value.length > 0 && ApplicationState.selectedKnowledgeBase.canContribute) {
if(ApplicationState.selectionCategories.length) {
$scope.model.meta.categoryList = categoryListData;
$scope.model.selectedCategory = ApplicationState.selectionCategories.length > 0 ? categoryToSelect : null;
}
else {
populateCategories(knowledgeBaseToSelect.value).then(function(data) {
$scope.model.selectedCategory = data.length > 0 ? categoryToSelect : null;
});
}
$timeout(function() {
$scope.model.refresh = true;
$timeout(function() {
$scope.model.refresh = false;
});
});
} else {
$scope.model.selectedCategory = categoryToSelect;
if (knowledgeBaseToSelect.value){
if(ApplicationState.selectionCategories.length) {
$scope.model.meta.categoryList = categoryListData;
$scope.model.selectedCategory.value = "";
}
else {
populateCategories(knowledgeBaseToSelect.value);
}
}
}
}
function populateKnowledgeBases() {
if(ApplicationState.knowledgeBases.length) {
$scope.model.meta.kbList = ApplicationState.knowledgeBases;
return ApplicationState.knowledgeBases;
}
else {
return MyKnowledgeBasesService.getMyKnowledgeBases().then(function(data) {
$scope.model.meta.kbList = data;
return data;
});
}
}
function populateCategories(knowledgeBase) {
var includeEmptyCategories = true;
return MyKnowledgeBasesService.getCategoriesForKnowledgeBaseSysId(knowledgeBase,includeEmptyCategories).then(function(data) {
var flatCategories = [];
var categoryListData = [];
flattenCategoryJSON(flatCategories, data, categoryListData);
$scope.model.selectedCategory.value = "";
$scope.model.meta.categoryList = categoryListData;
return data;
});
}
function populateCategories22(knowledgeBase) {
return MyKnowledgeBasesService.getCategoriesForKnowledgeBaseSysId(knowledgeBase).then(function(data) {
var flatCategories = [];
flattenCategoryJSON(flatCategories, data);
$scope.model.categoryRefED.qualifier = 'sys_idIN' + flatCategories.join(',');
return data;
});
}
function flattenCategoryJSON(flatCat, categories, categoryListData) {
for (var i = 0; i < categories.length; i++) {
var category = categories[i];
if (category != null && category != undefined && category.hasOwnProperty('sys_id'))
categoryListData.push(category);
if (category.hasOwnProperty('childs') && category.childs.length > 0) {
flattenCategoryJSON(flatCat, category.childs, categoryListData);
}
flatCat.push(category.sys_id);
}
}
function getCanContributeKnowledgeBases() {
var q = ApplicationState.knowledgeBases.filter(function(kb) {
return kb.canContribute;
}).map(function(kb) {
return kb.sys_id;
});
if (q.length) {
return "sys_idIN" + q.join(",");
}
return null;
}
function getI18nMessages() {
errorMessage = {
"WITH_ERROR": {en: " with error", translated: "with error"},
"WITH_ERRORS": {en: "  with errors", translated: "with errors"},
"FILE_NOT_SUPPORTED": {en: " file not supported", translated: " file not supported"},
"FILES_NOT_SUPPORTED": {en: " files not supported", translated: " files not supported"},
"ARTICLE": {en: "Article {0}", translated: "Article {0}"}
};
var messageKeys = Object.keys(errorMessage);
var messagesToTranslate = messageKeys.map(function(key) {
return errorMessage[key].en;
});
i18n.getMessages(messagesToTranslate, function(result) {
for (var i = 0; i < messageKeys.length; i++) {
var key = messageKeys[i];
var actualMessage = errorMessage[key];
errorMessage[key].translated = result[actualMessage.en];
}
});
$scope.feedbackMessages = errorMessage;
}
function selectUserPreference() {
userPreferences.getPreference("knowledge.publish_import_documents")
.then(userPreferenceSuccessCallback, userPreferenceFailureCallback)
}
function setUserPreference(publish) {
userPreferences.setPreference("knowledge.publish_import_documents", publish.toString())
.then(userPreferenceSuccessCallback, userPreferenceFailureCallback)
}
function userPreferenceSuccessCallback(data) {
if (typeof data === "string" && data === "true") {
$scope.model.publish = true;
} else if (typeof data === "boolean") {
$scope.model.publish = data;
} else {
$scope.model.publish = false;
}
}
function userPreferenceFailureCallback() {
$scope.model.publish = false;
}
});
angular.module('sn.knowledge.articles.import').filter('filterCanContributeKBs', function() {
return function(input) {
var inputArray = [];
for(var item in input){
if(input[item].canContribute){
inputArray.push(input[item]);
}
}
return inputArray;
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.import/directive.kbDropTarget.js */
angular.module('sn.knowledge.articles.import').directive('kbDropTarget', function(KnowledgeGlobalData) {
'use strict';
function isTransferringFiles(event) {
var transfer = event.originalEvent.dataTransfer;
return transfer.types != null && KnowledgeGlobalData.isIE ?
transfer.types[0] == 'Files' : (transfer.types.indexOf ?
transfer.types.indexOf('Files') != -1 : transfer.types.contains('application/x-moz-file'));
}
return {
restrict: 'A',
scope: {
onFileDrop: "&kbDropTarget",
disableDrop: "="
},
link: function(scope, element) {
element.bind("dragenter", function(e) {
deactivate(e);
if (!isTransferringFiles(e) || scope.disableDrop) {
disableDropZone(e);
return;
}
angular.element(element).addClass('show-visible-drop-target');
});
element.bind("dragleave", function() {
angular.element(element).removeClass('show-visible-drop-target');
});
element.bind("drop", function(e) {
deactivate(e);
dropFiles(e);
angular.element(element).removeClass('show-visible-drop-target');
});
element.bind("dragover", function(e) {
if (!isTransferringFiles(e) || scope.disableDrop) {
disableDropZone(e);
return;
}
return false;
});
function disableDropZone(e) {
var dt = e.originalEvent.dataTransfer;
dt.effectAllowed = dt.dropEffect = 'none';
}
function deactivate(e) {
e.preventDefault();
e.stopPropagation();
}
function dropFiles(e) {
scope.$apply(function() {
var files = e.originalEvent.dataTransfer.files;
for (var i = 0; i < files.length; i++) {
scope.onFileDrop({file: files[i]});
}
});
}
}
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.import/directive.kbGlobalDropTarget.js */
angular.module('sn.knowledge.articles.import').directive('kbGlobalDropTarget', function($timeout, $document, KnowledgeGlobalData) {
'use strict';
function isTransferringFiles(event) {
var transfer = event.originalEvent.dataTransfer;
return transfer.types != null && KnowledgeGlobalData.isIE ?
transfer.types[0] == 'Files' : (transfer.types.indexOf ?
transfer.types.indexOf('Files') != -1 : transfer.types.contains('application/x-moz-file'));
}
function hideDropTarget(element, attrs) {
element.css({
display: 'none'
});
}
function showDropTarget(element, attrs) {
if (element.css('display') === "none") {
element.css({
display: ''
});
}
}
return {
restrict: 'A',
scope: {
onFileDrop: "&kbGlobalDropTarget",
disableDrop: "=",
clear: '&'
},
link: function(scope, element, attrs) {
$document.on("dragenter", function(e) {
if (!isTransferringFiles(e) || scope.disableDrop) {
hideDropTarget(element, attrs);
disableDropZone(e);
return false;
}
deactivate(e);
$timeout(function() {
scope.clear();
});
showDropTarget(element, attrs);
angular.element(element).addClass('show-visible-drop-target');
});
element.bind("dragleave", function(e) {
hideDropTarget(element, attrs);
angular.element(element).removeClass('show-visible-drop-target');
});
element.bind("drop", function(e) {
deactivate(e);
hideDropTarget(element, attrs);
if (!isTransferringFiles(e) || scope.disableDrop) {
return;
}
dropFiles(e);
angular.element(element).removeClass('show-visible-drop-target');
});
$document.on("dragover", function(e) {
deactivate(e);
if (!isTransferringFiles(e) || scope.disableDrop) {
hideDropTarget(element, attrs);
disableDropZone(e);
return false;
}
return false;
});
hideDropTarget(element, attrs);
scope.$on('$destroy', function() {
$document.off("dragover");
$document.off("dragenter");
});
function disableDropZone(e) {
var dt = e.originalEvent.dataTransfer;
dt.effectAllowed = dt.dropEffect = 'none';
}
function deactivate(e) {
e.preventDefault();
e.stopPropagation();
}
function dropFiles(e) {
scope.$apply(function() {
var files = e.originalEvent.dataTransfer.files;
for (var i = 0; i < files.length; i++) {
scope.onFileDrop({file: files[i]});
}
});
}
}
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.import/directive.fileRead.js */
angular.module('sn.knowledge.articles.import').directive("fileRead", function(KnowledgeGlobalData) {
return {
restrict: 'A',
scope: {
onFileSelected: "&fileRead"
},
link: function(scope, element) {
scope.$on('importArticlesButtonClicked', function() {
scope.onFileSelected({file: null});
element[0].reset();
});
scope.$on('uploadDocumentRequested', function() {
element[0].querySelector('#fileselect').click();
});
element.bind("change", function(changeEvent) {
var files = changeEvent.target.files;
if (!KnowledgeGlobalData.isIE)
scope.$apply(function() {
for (var i = 0; i < files.length; i++)
scope.onFileSelected({file: files[i]});
});
else
for (var i = 0; i < files.length; i++)
scope.onFileSelected({file: files[i]});
element[0].reset();
});
}
}
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.import/service.knowledgeImportUploader.js */
angular.module('sn.knowledge.articles.import').service('KnowledgeImportUploader', function($http, $window, $upload, $q, urlTools, i18n) {
'use strict';
var importFeedbackMessages = {};
var standingUploadRequests = 0;
getI18nMessages();
var increaseRequests = function() {
if (standingUploadRequests < 0) {
standingUploadRequests = 0;
}
standingUploadRequests++;
$window.onbeforeunload = function() {
return importFeedbackMessages.FILE_UPLOAD_IN_PROGRESS.translated;
};
};
var decreaseRequests = function() {
standingUploadRequests--;
if (standingUploadRequests <= 0) {
standingUploadRequests = 0;
$window.onbeforeunload = null;
}
};
var isValidFile = function(file) {
return file.name.endsWith('.doc') || file.name.endsWith('.docx');
};
var uploadFiles = function(files, base, category, publish, successCallback, errorCallback) {
var total = files.length;
var promises = files.map(function(file) {
var hasError = false;
return uploadFile(file, base, category, publish, function() {
total--;
if (!total) {
if (hasError)
errorCallback(importFeedbackMessages.ERROR_UPLOAD.translated, 'Error during uploading');
else
successCallback();
}
}, function(message) {
total--;
if (message !== 'Canceled')
hasError = true;
if (!total)
if (hasError)
errorCallback(importFeedbackMessages.ERROR_UPLOAD.translated, 'Error during uploading');
else
successCallback();
});
});
return $q.all(promises);
};
var uploadFile = function(file, base, category, publish, successCallback, errorCallback) {
if (!isValidFile(file)) {
if (errorCallback)
errorCallback(importFeedbackMessages.FILE_NOT_SUPPORTED.translated);
return;
}
increaseRequests();
return uploadAttachment(file, function(sysID) {
var categoryValue = category ? (typeof category.value == 'undefined' ? "" : category.value) : "";
processAttachment(sysID, file.description, base.value, categoryValue, publish,
function(kbMeta) {
decreaseRequests();
successCallback(kbMeta);
file.nowMeta = kbMeta;
}, function(message) {
decreaseRequests();
file.failure = message ? message : importFeedbackMessages.ERROR_PROCESSING_ATTACHMENT.translated;
if (errorCallback)
errorCallback(message);
});
}, function(message) {
file.failure = message ? message : importFeedbackMessages.ERROR_DURING_UPLOAD.translated;
if (errorCallback)
errorCallback(message);
});
};
var uploadAttachment = function(file, success, error) {
var defer = $q.defer();
file.promise = defer;
file.cancelUpload = function() {
file.promise.reject('Canceled');
error(importFeedbackMessages.CANCELED.translated);
};
var url = urlTools.getURL('ngk_attachments', {
action: 'add',
sys_id: '1234',
table: 'kb_knowledge'
});
var uploadParams = {
attachments_modified: 'true',
sysparm_table: 'kb_knowledge',
sysparm_sys_id: '1234',
sysparm_nostack: 'yes',
sysparm_encryption_context: ''
};
if ($window.g_ck)
uploadParams['sysparm_ck'] = $window.g_ck;
$upload.upload({
url: url,
fields: uploadParams,
fileFormDataName: 'attachFile',
file: file
}).progress(function(evt) {
file.progress = parseInt(100.0 * evt.loaded / evt.total, 10);
}).success(function(response) {
var sysFile = response.sys_id;
if(sysFile) {
if (success)
success(sysFile);
defer.resolve(sysFile);
}
else {
var errMsg = response.error || '';
defer.reject(errMsg);
if(error)
error(errMsg)
}
}).error(function(e) {
if(e) {
defer.reject(e.message);
if (error)
error(e.message);
}
else {
defer.reject('');
if (error)
error('');
}
});
return defer.promise;
};
var processAttachment = function(sys_id, fileName, baseId, categoryId, publish, success, error) {
var url = "angular.do?sysparm_type=knowledge_read_processor" +
"&file_id=" + sys_id +
"&file_name=" + encodeURIComponent(fileName) +
"&kb=" + baseId +
"&category=" + categoryId +
"&publish=" + publish +
"&articletype=text" +
"&workflow=draft" +
"&method=decode";
$http({
url: url,
method: 'GET',
headers: {
"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
}
}).success(function(data) {
if (data.error) {
if (error)
error(data.error[0].error_message);
return;
}
if (!data.result) {
if (error)
error(importFeedbackMessages.UNKNOWN_ERROR.translated);
return;
}
if (success)
success(data.result[0]);
}).error(function(e) {
if (error)
error(e.message);
});
};
function getI18nMessages() {
importFeedbackMessages = {
"FILE_UPLOAD_IN_PROGRESS": {
en: "File upload in progress. Discard changes?",
translated: "File upload in progress. Discard changes?"
},
"ERROR_UPLOAD": {
en: "Error in upload.",
translated: "Error in upload."
},
"FILE_NOT_SUPPORTED": {
en: "File not supported.",
translated: "File not supported."
},
"UNKNOWN_ERROR": {
en: "Unknown error",
translated: "Unknown error"
},
"ERROR_PROCESSING_ATTACHMENT": {
en: "Error processing attachment",
translated: "Error processing attachment"
},
"ERROR_DURING_UPLOAD": {
en: "Error during upload",
translated: "Error during upload"
},
"ERROR": {
en: "Error",
translated: "Error"
},
"CANCELED": {
en: "Canceled",
translated: "Canceled"
}
};
var feedbackMessageKeys = Object.keys(importFeedbackMessages);
i18n.getMessages(feedbackMessageKeys.map(function(key) {
return importFeedbackMessages[key]["en"];
}), function(result) {
for (var i = 0; i < feedbackMessageKeys.length; i++) {
var key = feedbackMessageKeys[i];
var actualMessage = importFeedbackMessages[key];
importFeedbackMessages[key].translated = result[actualMessage.en];
}
});
}
return {
isValidFile: isValidFile,
uploadFile: uploadFile,
uploadFiles: uploadFiles
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.import/directive.referencePickerModified.js */
angular.module('sn.knowledge.articles.import').directive('snReferencePickerModified', function($timeout, $http, urlTools, filterExpressionParser, $sanitize, i18n) {
"use strict";
return {
restrict: 'E',
replace: true,
scope: {
ed: "=",
field: "=",
refTable: "=?",
refId: "=?",
snOptions: "=?",
snOnChange: "&",
snOnBlur: "&",
snOnClose: "&",
snOnOpen: '&',
snDisabled: "=",
snPageSize: "@",
dropdownCssClass: "@",
formatResultCssClass: "&",
overlay: "=",
additionalDisplayColumns: "@",
displayColumn: "@",
recordValues: '&'
},
template: '<input type="text" ng-disabled="snDisabled" ng-model="field.displayValue" />',
link: function(scope, element, attrs, ctrl) {
element.css("opacity", 0);
var fieldAttributes = parseAttributes(scope.ed.attributes);
var select2AjaxHelpers = {
formatSelection: function(item) {
return $sanitize(getDisplayValue(item));
},
formatResult: function(item, container, query) {
var displayValues = getDisplayValues(item);
if (displayValues.length == 1)
return $sanitize(displayValues[0]);
if (displayValues.length > 1) {
var width = 100 / displayValues.length;
var markup = "";
for (var i = 0; i < displayValues.length; i++) {
var result = $sanitize(displayValues[i]);
if(query.term && query.term.length > 0) {
result = result.replace(new RegExp(query.term, 'ig'), "<mark>" + query.term + "</mark>");
}
markup += "<div style='width: " + width + "%;' class='select2-result-cell'>" + result + "</div>";
}
return markup;
}
return "";
},
search: function(queryParams) {
var url = urlTools.getURL('ref_list_data', queryParams.data);
return $http.get(url).then(queryParams.success);
},
initSelection: function(elem, callback) {
if (scope.field.displayValue)
callback({
sys_id: scope.field.value,
name: scope.field.displayValue
});
}
};
var config = {
width : '100%',
overlay: scope.overlay,
containerCssClass : 'select2-reference',
placeholder : '   ',
formatSearching: '',
allowClear: attrs.allowClear !== 'false',
id: function(item) {
return item.sys_id;
},
sortResults: (scope.snOptions && scope.snOptions.sortResults) ? scope.snOptions.sortResults : undefined,
ajax: {
quietMillis: NOW.ac_wait_time,
data: function(filterText, page) {
var filterExpression = filterExpressionParser.parse(filterText, scope.ed.defaultOperator);
var q = getReferenceColumnToSearch() + filterExpression.operator + filterExpression.filterText +
'^' + getReferenceColumnToSearch() + 'ISNOTEMPTY^EQ';
var params = {
start: (scope.pageSize * (page - 1)),
count: scope.pageSize,
sysparm_target_table: scope.refTable,
sysparm_target_id: scope.refId,
sysparm_target_field: scope.ed.name,
required_fields: scope.displayColumn,
table: scope.ed.reference,
qualifier: scope.ed.qualifier,
data_adapter: scope.ed.data_adapter,
attributes: scope.ed.attributes,
dependent_table: scope.ed.dependent_table,
dependent_value: scope.ed.dependent_value,
p: scope.ed.reference + ';q:' + q + ';r:' + scope.ed.qualifier
};
if (scope.recordValues)
params.sysparm_record_values = scope.recordValues();
return params;
},
results: function(data, page) {
return ctrl.filterResults(data, page, scope.pageSize);
},
transport: select2AjaxHelpers.search
},
formatSelection: select2AjaxHelpers.formatSelection,
formatResult: select2AjaxHelpers.formatResult,
initSelection: select2AjaxHelpers.initSelection,
dropdownCssClass: attrs.dropdownCssClass,
formatResultCssClass: scope.formatResultCssClass || null
};
if (scope.snOptions) {
if (scope.snOptions.placeholder) {
config.placeholder = scope.snOptions.placeholder;
}
}
function getReferenceColumnToSearch() {
var colName = 'name';
if (scope.ed.searchField)
colName = scope.ed.searchField;
else if (fieldAttributes['ref_ac_order_by'])
colName = fieldAttributes['ref_ac_order_by'];
return colName;
}
function parseAttributes(strAttributes) {
var attributeArray = (strAttributes && strAttributes.length ? strAttributes.split(',') : []);
var attributeObj = {};
for (var i = 0; i < attributeArray.length; i++) {
if (attributeArray[i].length > 0) {
var attribute = attributeArray[i].split('=');
attributeObj[attribute[0]] = attribute.length > 1 ? attribute[1] : '';
}
}
return attributeObj;
}
function init() {
scope.model = scope.snModel;
render();
}
function render() {
$timeout(function() {
i18n.getMessage('Searching...', function(searchingMsg) {
config.formatSearching = function() {
return searchingMsg;
};
});
element.css("opacity", 1);
element.select2("destroy");
var select2 = element.select2(config);
select2.bind("change", select2Change);
select2.bind("select2-removed", select2Change);
select2.bind("select2-blur", function() {
scope.$apply(function() {
scope.snOnBlur();
});
});
select2.bind("select2-close", function() {
scope.$apply(function() {
scope.snOnClose();
});
});
select2.bind("select2-open", function() {
scope.$apply(function() {
if (scope.snOnOpen)
scope.snOnOpen();
});
});
});
}
function select2Change(e) {
e.stopImmediatePropagation();
if (e.added) {
var selectedItem = e.added;
if (scope.$$phase || scope.$root.$$phase)
return;
scope.$apply(function() {
scope.field.value = selectedItem.sys_id;
if (scope.field.value)
scope.field.displayValue = getDisplayValue(selectedItem);
else
scope.field.displayValue = '';
scope.rowSelected();
});
if (scope.snOnChange)
scope.snOnChange(e);
} else if (e.removed) {
scope.$apply(function() {
scope.field.displayValue = '';
scope.field.value = '';
if (scope.snOnChange)
scope.snOnChange(e);
});
}
}
function getDisplayValue(selectedItem) {
var displayValue = '';
if (selectedItem && selectedItem.sys_id) {
if (scope.displayColumn && typeof selectedItem[scope.displayColumn] != "undefined")
displayValue = selectedItem[scope.displayColumn];
else if (selectedItem.$$displayValue)
displayValue = selectedItem.$$displayValue;
else if (selectedItem.name)
displayValue = selectedItem.name;
else if (selectedItem.title)
displayValue = selectedItem.title;
}
return displayValue;
}
function getDisplayValues(selectedItem) {
var displayValues = [];
if (scope.additionalDisplayColumns) {
var columns = scope.additionalDisplayColumns.split(",");
for (var i = 0; i < columns.length; i++) {
var column = columns[i];
if (selectedItem[column])
displayValues.push(selectedItem[column]);
}
}
return displayValues;
}
scope.$watch("field.displayValue", function(newValue) {
if (newValue !== undefined && newValue !== scope.model) {
init();
}
});
init();
},
controller: function($scope, $rootScope) {
$scope.pageSize = 20;
if ($scope.snPageSize)
$scope.pageSize = parseInt($scope.snPageSize);
$scope.rowSelected = function() {
$rootScope.$broadcast("@page.reference.selected", {
field: $scope.field,
ed: $scope.ed
});
};
this.filterResults = function(data, page) {
return {
results: data.data.items,
more: (page * $scope.pageSize < data.data.total)
};
};
}
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.import/directive.kbShowModal.js */
angular.module('sn.knowledge.articles.import').directive('kbShowModal', function($timeout, $document) {
'use strict';
return {
restrict: 'A',
scope: {
show: "@"
},
link: function(scope, element, attrs) {
attrs.$observe('show', function(val) {
if (val === "true") {
element.css({
display: "block",
overflow: "auto"
});
setBodyOverflow('hidden')
} else {
element.css({
display: "hidden"
});
setBodyOverflow('auto')
}
});
element.on('$destroy', function() {
setBodyOverflow('auto')
});
function setBodyOverflow(attributeVal) {
angular.element($document[0].body).css({
overflow: attributeVal
});
}
}
};
});
;
/*! RESOURCE: /scripts/knowledge.ng/knowledge/articles.import/directive.select2ReferencePicker.js */
angular.module('sn.knowledge.articles.import').directive('snSelect2ReferencePicker', function($timeout, $sanitize, i18n) {
'use strict';
return {
restrict: 'AE',
replace: true,
scope: {
field: "=",
snOptions: "=?",
snOnChange: "&",
snOnBlur: "&",
snOnClose: "&",
snOnOpen: '&',
snDisabled: "=",
snPageSize: "@",
dropdownCssClass: "@",
formatResultCssClass: "&",
overlay: "="
},
link: function(scope, element, attrs) {
var config = {
width : '100%',
overlay: scope.overlay,
containerCssClass : 'select2-reference',
placeholder : 'Select an option...',
formatSearching: '',
allowClear: attrs.allowClear !== 'false',
};
function init() {
scope.model = scope.snModel;
renderSelect2();
}
function renderSelect2() {
element.select2("destroy");
$timeout(function() {
i18n.getMessage('Searching...', function(searchingMsg) {
config.formatSearching = function() {
return searchingMsg;
};
});
element.css("opacity", 1);
if (element[0] != undefined && element[0] != null) {
element[0].value = '';
}
});
var select2 = element.select2(config);
select2.bind("change", select2Clicked);
element.select2Initialized = true;
$timeout(function() {
if(scope.field)
jQuery('#'+attrs.id).val(scope.field.value).trigger("change");
},100);
}
function select2Clicked(e) {
e.stopImmediatePropagation();
if (e.added) {
var selectedItem = e.added;
if (scope.$$phase || scope.$root.$$phase)
return;
scope.$apply(function() {
scope.field.value = selectedItem.id;
if (scope.field.value)
scope.field.displayValue = selectedItem.text;
else
scope.field.displayValue = '';
scope.rowSelected();
});
if (scope.snOnChange)
scope.snOnChange(e);
} else if (e.removed) {
scope.$apply(function() {
scope.field.displayValue = '';
scope.field.value = '';
if (scope.snOnChange)
scope.snOnChange(e);
});
}
}
init();
},
controller: function($scope, $rootScope) {
$scope.rowSelected = function() {
$rootScope.$broadcast("@page.reference.selected", {
field: $scope.field,
});
};
}
};
});
;
;
