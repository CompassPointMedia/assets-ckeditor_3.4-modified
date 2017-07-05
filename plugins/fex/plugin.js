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
                click: CKEDITOR_getFile,
				icon : this.path + 'images/fex.png'
            });	
	}
});