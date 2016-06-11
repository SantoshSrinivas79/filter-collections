Package.describe({
    summary: "Filter, paging and sort for Meteor collections with hooks and Iron Router support.",
    version: "1.0.3",
    name: "deeeed:filter-collections",
    git: "https://github.com/deeeed/filter-collections"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0.2.1');

    api.use('underscore', ['client', 'server']);

    api.addFiles('filter-collections-client.js', ['client']);
    api.addFiles('filter-collections-server.js', ['server']);
    api.export('FilterCollections');
});
