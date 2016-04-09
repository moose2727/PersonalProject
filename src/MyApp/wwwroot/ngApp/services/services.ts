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

            return this.songResource.get({ id: id }).$promise;
        }
        public saveSong(songToSave) {
            return this.songResource.save(songToSave).$promise;
        }
        public deleteSong(id: number) {
            return this.songResource.remove({ id: id }).$promise;
        }
    }
    angular.module("MyApp").service("songService", SongService);

    export class SongCommentService {
        public songCommentResource;
        constructor(private $resource: ng.resource.IResourceService) {
            this.songCommentResource = this.$resource('/api/songcomment/:id');
        }

        public saveComment(commentToSave) {
            return this.songCommentResource.save(commentToSave).$promise;
        }
    }

    angular.module("MyApp").service("songCommentService", SongCommentService);
}