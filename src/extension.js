const { commands, window, workspace, WorkspaceEdit, Range } = require("vscode");

const activate = context => {
  let disposable = commands.registerCommand("extension.rubyReplace", () => {
    if (!window.activeTextEditor) {
      return null;
    }

    const editor = window.activeTextEditor;
    const document = editor.document;

    if (editor && document.languageId === "ruby" || document.languageId === "haml") {
      const text = document.getText();
      const regex = /:("?(\w+|([\w+]*-[\w+]*)+)"?)\s?=>\s?/g;

      const formatted = text.replace(regex, '$1: ');
      
      const fullRange = new Range(
          document.positionAt(0),
          document.positionAt(text.length)
      );

      let edit = new WorkspaceEdit();
      edit.replace(document.uri, fullRange, formatted);
      window.setStatusBarMessage('Ruby syntax replaced', 3000);
      return workspace.applyEdit(edit);
    } else {
      window.showErrorMessage('Not a Ruby file');
    }
  });

  context.subscriptions.push(disposable);
};

exports.activate = activate;
