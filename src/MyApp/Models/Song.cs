using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Lyrics { get; set; }
        public string Uploader { get; set; }
        public string Genre { get; set; }
        public ICollection<SongComment> Comments { get; set; }
        public string Url { get; set; }
    }
}
