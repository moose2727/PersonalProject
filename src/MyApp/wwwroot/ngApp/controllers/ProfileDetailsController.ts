namespace MyApp.Controllers {
    export class ProfileDetailsController {
        public file;

        constructor(private filepickerService: any, private $scope: ng.IScope) {

        }

        public pickFile() {
            this.filepickerService.pick({
                mimetype: 'image/*'
            }, this.fileUploaded.bind(this));
        }

        private fileUploaded(file) {
            this.file = file;
            this.$scope.$apply();
        }
    }
}