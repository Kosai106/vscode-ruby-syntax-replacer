const { commands, window, workspace, WorkspaceEdit, Range, Selection, TextEdit } = require("vscode");

exports.activate = function(context) {
  let disposable = commands.registerCommand("extension.rubyReplace", () => {
    if (!window.activeTextEditor) {
      return null;
    }

    const editor = window.activeTextEditor;
    const document = editor.document;

    if (
      (editor && document.languageId === "ruby") ||
      document.languageId === "haml" ||
      document.languageId === "erb" ||
      document.languageId === "html.erb"
    ) {
      const arrows = /:?("?(\w+|([\w+]*-[\w+]*)+)"?)\s?=>\s?/g;
      const trails = /(\})\//g;

      let edit = new WorkspaceEdit();

      if (editor.selection.isEmpty) {
        const formatted = document.getText().replace(arrows, "$1: ").replace(trails, "$1");
        const fullRange = new Range(
          document.positionAt(0),
          document.positionAt(document.getText().length)
        );
        edit.replace(document.uri, fullRange, formatted);
        window.setStatusBarMessage("Ruby syntax replaced", 3000);
        return workspace.applyEdit(edit);
      } else {
        const position = editor.selection;
        const selectionRange = new Range(position.start, position.end);
        const formatted = document.getText(selectionRange).replace(arrows, "$1: ").replace(trails, "$1");
        edit.replace(document.uri, selectionRange, formatted);
        window.setStatusBarMessage("Ruby syntax replaced", 3000);
        return workspace.applyEdit(edit);
      }
    } else {
      window.showErrorMessage("Not a Ruby file");
    }
  });

  context.subscriptions.push(disposable);
};
