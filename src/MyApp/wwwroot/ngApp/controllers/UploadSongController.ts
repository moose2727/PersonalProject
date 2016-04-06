namespace MyApp.Controllers {
    export class UploadSongController {
        public songToCreate;
        public file;

        constructor(
            private songService: MyApp.Services.SongService,
            private $state: ng.ui.IStateService,
            private filepickerService,
            private $scope: ng.IScope) {
        }

        saveSong() {
            this.songService.saveSong(this.songToCreate).then(() => {
                debugger;
                this.$state.go('studio');
            })
        }

        public pickFile() {
            this.filepickerService.pick({
                mimetype: 'audio/*'
            }, this.fileUploaded.bind(this));
        }

        private fileUploaded(file) {
            debugger;
            this.file = file;
            this.$scope.$apply();
            this.songToCreate.url = file.url;
        }
    }
}