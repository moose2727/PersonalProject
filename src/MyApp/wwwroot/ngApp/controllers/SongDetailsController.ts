namespace MyApp.Controllers {
    export class SongDetailsController {
        public song;
        public comment;
        constructor(
            private songService: MyApp.Services.SongService,
            private $stateParams: ng.ui.IStateParamsService,
            private songCommentService: MyApp.Services.SongCommentService,
            private $state: ng.ui.IStateService,
            private $sce: ng.ISCEService) {
            let promise = this.songService.getSong(this.$stateParams['id']);
            promise.then(this.allowAudioUrl);
            this.comment = { message: "", songId: null };

        }

        //getSong() {

        //    //let songId = this.$stateParams['id'];
        //    this.song = this.songService.getSong(this.$stateParams['id']);
        //}

        saveComment() {
            this.comment.songId = this.song.id;
            this.songCommentService.saveComment(this.comment).then(() => {

                this.$state.reload();
            });
        }

        private allowAudioUrl = (data) => {
            let fileUrl = data.url;
            this.song = data;
            this.song.url = this.$sce.trustAsResourceUrl(fileUrl);
        }

    }
}