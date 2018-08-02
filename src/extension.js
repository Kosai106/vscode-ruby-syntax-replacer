const { commands, window, workspace, WorkspaceEdit, Range } = require("vscode");

exports.activate = function(context) {
  let disposable = commands.registerCommand("extension.rubyReplace", () => {
    if (!window.activeTextEditor) {
      return null;
    }

    const editor = window.activeTextEditor;
    const document = editor.document;

    if (editor && document.languageId === "ruby" || document.languageId === "haml" || document.languageId === "erb") {
      // const pattern = /([^:]|^):(\w+)\s?(\s*)=>\s?(\s*)/g;
      // const pattern = /([^:]|^):?(("|')?(\w+)("|')?)\s?(\s*)=>\s?(\s*)/g;
      // const pattern = /:?("?(\w+|([\w+]*-[\w+]*)+)"?)\s?=>\s?/g
      const pattern = /:?(["|']?[\w-?]+["|']?)+\s*?=>\s*/g
      const replacement = "$1: ";

      let edit = new WorkspaceEdit();

      if (editor.selection.isEmpty) {
        edit.replace(
          document.uri,
          new Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
          ),
          document.getText().replace(pattern, replacement)
        );
      } else {
        editor.selections.map(select => {
          const position = select;
          const selectionRange = new Range(position.start, position.end);
          edit.replace(
            document.uri,
            selectionRange,
            document.getText(selectionRange).replace(pattern, replacement)
          );
        })
      }
      window.setStatusBarMessage('Ruby syntax replaced', 3000);
      return workspace.applyEdit(edit);
    } else {
      window.showErrorMessage("Not a Ruby file");
    }
  });

  context.subscriptions.push(disposable);
};
