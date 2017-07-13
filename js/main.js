requirejs.config({
    baseUrl: "js",
    paths: {
        "jquery": "vendor/jquery.min",
        "flexslider": "vendor/jquery.flexslider",
        "uniform": "vendor/jquery.uniform",
        "foundation": "vendor/foundation"
    },
    shim: {
        "flexslider": {
            deps: ["jquery"],
            exports: "flexslider"
        },
        "uniform": {
            deps: ["jquery"],
            exports: "uniform"
        }
    },
});

var modules = [
    'jquery',
    'flexslider',
    'uniform',
    'foundation',
    'modules/slider',
];



require(modules, function (jquery, flexslider, uniform, foundation, slider) {
    slider.initialize();
});
