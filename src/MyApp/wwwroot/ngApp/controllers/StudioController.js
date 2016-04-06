var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var StudioController = (function () {
            function StudioController(songService) {
                this.songService = songService;
                this.songs = this.songService.getSongs();
            }
            return StudioController;
        }());
        Controllers.StudioController = StudioController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=StudioController.js.map