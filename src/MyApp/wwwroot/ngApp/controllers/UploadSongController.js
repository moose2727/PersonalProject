var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var UploadSongController = (function () {
            function UploadSongController(songService, $state, filepickerService, $scope) {
                this.songService = songService;
                this.$state = $state;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            UploadSongController.prototype.saveSong = function () {
                var _this = this;
                this.songService.saveSong(this.songToCreate).then(function () {
                    _this.$state.go('studio');
                });
            };
            UploadSongController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'audio/*'
                }, this.fileUploaded.bind(this));
            };
            UploadSongController.prototype.fileUploaded = function (file) {
                debugger;
                this.file = file;
                this.$scope.$apply();
                this.songToCreate.url = file.url;
            };
            return UploadSongController;
        }());
        Controllers.UploadSongController = UploadSongController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=UploadSongController.js.map