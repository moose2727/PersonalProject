using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Data.Entity;
using Microsoft.AspNet.Identity;
using System.Security.Claims;

namespace MyApp.Models
{
    public class SampleData
    {
        public async static void Initialize(IServiceProvider sp)
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

            var userManager = sp.GetService<UserManager<ApplicationUser>>();
            db.Database.Migrate();


            var stephen = await userManager.FindByNameAsync("Moose@Hotmail.com");
            if (stephen == null)
            {
                // create user
                stephen = new ApplicationUser
                {
                    UserName = "Moose@Hotmail.com",
                    Email = "Moose@Hotmail.com",
                    FirstName = "Jason",
                    LastName = "deNevers",
                    Age = 24,
                    Image = "dkgnebgikopmn"

                };
                await userManager.CreateAsync(stephen, "Secret123!");

                // add claims
                await userManager.AddClaimAsync(stephen, new Claim("IsAdmin", "true"));
            }

            // Ensure Mike (not IsAdmin)
            var mike = await userManager.FindByNameAsync("Jason@whatever.com");
            if (mike == null)
            {
                // create user
                mike = new ApplicationUser
                {
                    UserName = "Jason@whatever.com",
                    Email = "Jason@whatever.com",
                    FirstName = "Dan",
                    LastName = "deNevers",
                    Age = 34
                };
                await userManager.CreateAsync(mike, "Secret123!");
            }
        }
    }
}
