namespace MyApp.Controllers {
    export class SongDetailsController {
        public song;
        public comment;
        constructor(
            private songService: MyApp.Services.SongService,
            private $stateParams: ng.ui.IStateParamsService) {

            this.getSong();
        }

        getSong() {
            let songId = this.$stateParams['id'];
            this.song = this.songService.getSong(songId);
        }
    }
}