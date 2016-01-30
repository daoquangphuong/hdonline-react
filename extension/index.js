var self = require('sdk/self');

var httpSniffer = require('./lib/httpSniffer');
// to by pass using query httpSniffer=bypass;
httpSniffer.sniffer.push({
    regex: {pattern: 'https?:\/\/hdonline\.vn\/', option: 'im'},
    break: true,
    response: {
        new: function () {
            return self.data.load('layout.html');
        }
    }
});
httpSniffer.register();

require('sdk/tabs').activeTab.url = 'http://hdonline.vn';

var pageMod = require('sdk/page-mod');

pageMod.PageMod({
    include: /https?:\/\/hdonline\.vn\/?.*/,
    contentScriptWhen: 'end',
    attachTo: ['existing', 'top', 'frame'],
    contentStyleFile: [
        self.data.url('css/style.css')
    ],
    contentScriptFile: [
        self.data.url('js/app.js')
    ]
});

