const { commands, window, workspace, WorkspaceEdit, Range } = require("vscode");

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
      const pattern = /([^:]|^):(\w+)\s?(\s*)=>\s?(\s*)/g;
      const replacement = "$1$2: $3$4";

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
        console.log(edit);
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
        console.log(edit);
      }
      window.setStatusBarMessage('Ruby syntax replaced', 3000);
      return workspace.applyEdit(edit);
    } else {
      window.showErrorMessage("Not a Ruby file");
    }
  });

  context.subscriptions.push(disposable);
};
