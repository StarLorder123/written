require.config({ paths: { 'vs': '../node_modules/monaco-editor/min/vs' } });
var editorArray = [];
var real = false
require(['vs/editor/editor.main'], function () {
  var editor = monaco.editor.create(document.getElementById('container'), {
    value: [
      '<div>',
      '</div>',
      '<script>',
      '\talert("Hello world!");',
      '<\/script>',
    ].join('\n'),
    language: 'html',
    theme: 'vs-dark',
    minimap: {
      enabled: false
    },
  });
  editorArray.push(editor)
});
