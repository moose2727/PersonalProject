namespace MyApp.Controllers {

    export class StudioController {
        public songs;

        constructor(private songService: MyApp.Services.SongService) {
            this.songs = this.songService.getSongs();
        }

        

    }

}