var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SongDetailsController = (function () {
            function SongDetailsController(songService, $stateParams) {
                this.songService = songService;
                this.$stateParams = $stateParams;
                this.getSong();
            }
            SongDetailsController.prototype.getSong = function () {
                var songId = this.$stateParams['id'];
                this.song = this.songService.getSong(songId);
            };
            return SongDetailsController;
        }());
        Controllers.SongDetailsController = SongDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=SongDetailsController.js.map