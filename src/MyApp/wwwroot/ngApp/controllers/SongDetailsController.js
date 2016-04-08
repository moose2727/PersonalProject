var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SongDetailsController = (function () {
            function SongDetailsController(songService, $stateParams, songCommentService, $state, $sce) {
                var _this = this;
                this.songService = songService;
                this.$stateParams = $stateParams;
                this.songCommentService = songCommentService;
                this.$state = $state;
                this.$sce = $sce;
                this.allowAudioUrl = function (data) {
                    var fileUrl = data.url;
                    _this.song = data;
                    _this.song.url = _this.$sce.trustAsResourceUrl(fileUrl);
                };
                var promise = this.songService.getSong(this.$stateParams['id']);
                promise.then(this.allowAudioUrl);
                this.comment = { message: "", songId: null };
            }
            //getSong() {
            //    //let songId = this.$stateParams['id'];
            //    this.song = this.songService.getSong(this.$stateParams['id']);
            //}
            SongDetailsController.prototype.saveComment = function () {
                var _this = this;
                this.comment.songId = this.song.id;
                this.songCommentService.saveComment(this.comment).then(function () {
                    _this.$state.reload();
                });
            };
            return SongDetailsController;
        }());
        Controllers.SongDetailsController = SongDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=SongDetailsController.js.map