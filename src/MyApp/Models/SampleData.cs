using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace MyApp.Models
{
    public class SampleData
    {
        public static void Initialize(IServiceProvider sp)
        {
            var db = sp.GetService<ApplicationDbContext>();

            if (!db.Songs.Any())
            {
                var songs = new Song[] {

                    new Song {
                        Name = "How Nice",
                        Uploader = "Northern Oil Burner",
                        Lyrics = "5:22",
                        Genre = "Progressive Rock",
                        Comments = new List<SongComment>
                        {
                            new SongComment { Message = "Nice bass line" }
                        }
                    },
                    new Song {
                        Name = "CSM",
                        Uploader = "Northern Oil Burner",
                        Lyrics = "10:14",
                        Genre = "Progressive Rock",
                        Comments = new List<SongComment>
                        {
                            new SongComment { Message = "pretty awesome" }
                        }
                    },
                    new Song {
                        Name = "Plan A",
                        Uploader = "The Herdsmens Staff",
                        Lyrics = "4:05",
                        Genre = "Rock",
                        Comments = new List<SongComment>
                        {
                            new SongComment { Message = "pretty awesome" }
                        }
                    },
                    new Song {
                        Name = "Being You",
                        Uploader = "Beyond All Hope",
                        Lyrics = "4:32",
                        Genre = "Alternative",
                        Comments = new List<SongComment>
                        {
                            new SongComment { Message = "Vocals could use work" }
                        }
                    },

                    new Song {
                        Name = "Change Absolute",
                        Uploader = "Mike Larson Project",
                        Lyrics = "3:36",
                        Genre = "Alternative",
                        Comments = new List<SongComment>
                        {
                            new SongComment { Message = "pretty awesome" }
                        }
                    }
                };
                db.Songs.AddRange(songs);
                db.SaveChanges();
            }
        }
    }
}
