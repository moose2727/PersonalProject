using MyApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.ViewModels
{
    public class ProfileViewModel
    {
        public IList<Song> Songs { get; set; }
    }
}
