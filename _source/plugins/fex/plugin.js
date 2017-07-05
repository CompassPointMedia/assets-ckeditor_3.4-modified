CKEDITOR.plugins.add('fex',
{
    init: function(editor)
    {
        var pluginName = 'fex';
        CKEDITOR.dialog.add(pluginName, this.path + 'dialogs/fex.js');
        editor.addCommand(pluginName, new CKEDITOR.dialogCommand(pluginName));
        editor.ui.addButton('FileExplorer',
            {
                label: 'File Explorer',
                click: pluginName,
				icon : CKEDITOR.plugins.getPath('fex')+'fex.png';
            });	}
});