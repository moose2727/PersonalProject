namespace MyApp.Services {

    export class SongService {
        public songResource;

        constructor(private $resource: angular.resource.IResourceService) {
            this.songResource = this.$resource('/api/testsong/:id');
        }
        public getSongs() {
            return this.songResource.query();
        }
        public getSong(id) {

            return this.songResource.get({ id: id });
        }
        public saveSong(songToSave) {
            return this.songResource.save(songToSave).$promise;
        }
    }
    angular.module("MyApp").service("songService", SongService);

    
}