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
      const text = document.getText();
      const arrows = /:?("?(\w+|([\w+]*-[\w+]*)+)"?)\s?=>\s?/g;
      const trails = /(\})\//g;

      const formatted = text.replace(arrows, "$1: ").replace(trails, "$1");

      const fullRange = new Range(
        document.positionAt(0),
        document.positionAt(text.length)
      );

      const edit = new WorkspaceEdit();
      edit.replace(document.uri, fullRange, formatted);
      window.setStatusBarMessage("Ruby syntax replaced", 3000);
      return workspace.applyEdit(edit);
    } else {
      window.showErrorMessage("Not a Ruby file");
    }
  });

  context.subscriptions.push(disposable);
};
