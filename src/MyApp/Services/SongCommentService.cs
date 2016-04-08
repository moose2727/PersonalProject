using CoderCamps;
using MyApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Services
{
    public class SongCommentService : ISongCommentService
    {
        IGenericRepository _repo;
        public SongCommentService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public void saveComment(SongComment commentToSave)
        {
            var song = _repo.Query<Song>().Where(s => s.Id == commentToSave.SongId).FirstOrDefault();
            if (song != null)
            {
                var commentToCreate = new SongComment { Message = commentToSave.Message, SongId = commentToSave.SongId};
                _repo.Add<SongComment>(commentToCreate);
            }
        }
    }
}
