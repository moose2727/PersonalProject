var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProfileDetailsController = (function () {
            function ProfileDetailsController(filepickerService, $scope) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            ProfileDetailsController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            ProfileDetailsController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            return ProfileDetailsController;
        }());
        Controllers.ProfileDetailsController = ProfileDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=ProfileDetailsController.js.map