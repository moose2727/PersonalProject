using CoderCamps;
using MyApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Services
{
    public class SongService : ISongService
    {
        IGenericRepository _repo;
        public SongService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public List<Song> getSongs()
        {
            return _repo.Query<Song>().ToList();
        }

        public Song getSong(int id)
        {
            return _repo.Query<Song>().Where(s => s.Id == id).Include(s => s.Comments).FirstOrDefault();
        }

        public void saveSong(Song songToSave)
        {
            if(songToSave.Id == 0)
            {
                 _repo.Add(songToSave);
            }
            else
            {
                var original = _repo.Query<Song>().Where(s => s.Id == songToSave.Id).FirstOrDefault();
                original.Name = songToSave.Name;
                original.Url = songToSave.Url;
                original.Lyrics = songToSave.Lyrics;
                original.Genre = songToSave.Genre;
                _repo.SaveChanges();
            }
        }

        public void deleteSong(int id)
        {
            var song = _repo.Query<Song>().Where(s => s.Id == id).FirstOrDefault();
            _repo.Delete<Song>(song);
        }

    }
}
