'use strict';

$.extend($.summernote.plugins, {
  myVideoDialog: function(context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;
    
    context.memo('button.myVideo', function () {
      return ui.button({
        contents: ui.icon(options.icons.video),
        tooltip: lang.video.video,
        click: function() {
          ui.showDialog(self.$dialog);
        }
      }).render();
    });
    
    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = '<div class="form-group note-group-select-from-files">' +
        '<label>Select video</label>' +
        '<input class="note-image-input form-control" type="file" name="file" accept="video/*" />' +
        '</div>';
      var footer = '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>' + lang.video.insert + '</button>';

      this.$dialog = ui.dialog({
        title: lang.video.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };
  }
});

$(document).ready(function() {
  $('#summernote').summernote({
    height: 400,
    focus: true,
    placeholder: 'Describe your product',
    toolbar: [
      ['fontsize', ['fontsize']],
      ['insert', ['picture', 'myVideo']],
      ['misc', ['codeview']]
    ],
    popover: {
      image: [
        ['remove', ['removeMedia']]
      ]
    }
  });
});
