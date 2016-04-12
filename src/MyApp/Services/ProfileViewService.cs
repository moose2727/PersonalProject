using CoderCamps;
using MyApp.Models;
using MyApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Services
{
    public class ProfileViewService
    {
        IGenericRepository _repo;
        public ProfileViewService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public ProfileViewModel GetUserInfo(int id) {

            var songs = _repo.Query<Song>().Where(s => s.Id == id).ToList();

            var Profile = new ProfileViewModel
            {
                Songs = songs
            };
            return Profile;
        }

    }
}
