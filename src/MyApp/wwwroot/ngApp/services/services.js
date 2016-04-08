var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var SongService = (function () {
            function SongService($resource) {
                this.$resource = $resource;
                this.songResource = this.$resource('/api/testsong/:id');
            }
            SongService.prototype.getSongs = function () {
                return this.songResource.query();
            };
            SongService.prototype.getSong = function (id) {
                return this.songResource.get({ id: id }).$promise;
            };
            SongService.prototype.saveSong = function (songToSave) {
                return this.songResource.save(songToSave).$promise;
            };
            return SongService;
        }());
        Services.SongService = SongService;
        angular.module("MyApp").service("songService", SongService);
        var SongCommentService = (function () {
            function SongCommentService($resource) {
                this.$resource = $resource;
                this.songCommentResource = this.$resource('/api/songcomment/:id');
            }
            SongCommentService.prototype.saveComment = function (commentToSave) {
                return this.songCommentResource.save(commentToSave).$promise;
            };
            return SongCommentService;
        }());
        Services.SongCommentService = SongCommentService;
        angular.module("MyApp").service("songCommentService", SongCommentService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map