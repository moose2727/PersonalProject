using System.Collections.Generic;
using MyApp.Models;

namespace MyApp.Services
{
    public interface ISongService
    {
        void deleteSong(int id);
        Song getSong(int id);
        List<Song> getSongs();
        void saveSong(Song songToSave);
    }
}