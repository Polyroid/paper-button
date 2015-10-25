Package.describe({
    name: 'polyroid:paper-button',
    version: '1.0.8',
    summary: 'Material design button',
    git: 'https://github.com/Polyroid/paper-button.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0',
        'polyroid:paper-ripple@1.0.0',
        'polyroid:paper-material@1.0.0',
        'polyroid:paper-behaviors@1.0.0',
        'polyroid:iron-flex-layout@1.0.0'
    ], 'client');

    api.addAssets([
        'paper-button.html'
    ], 'client');
});
