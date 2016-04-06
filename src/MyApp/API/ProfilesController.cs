using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MyApp.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyApp.API
{
    [Route("api/[controller]")]
    public class ProfilesController : Controller
    {
        //fake database
        static List<Profile> _profiles = new List<Profile>
        {
            new Profile {Id = 1, Name= "Jason deNevers", Age=24, Location="Lake Stevens, WA" },
            new Profile {Id = 2, Name= "Scott Stewart", Age=34, Location="Lake Stevens, WA" },
            new Profile {Id = 3, Name= "Orion Weldon", Age=26, Location="Snohomish, WA" },
            new Profile {Id = 4, Name= "Mike Larson", Age=30, Location="Arlington, WA" },
        };

        
        // GET: api/values
        [HttpGet]
        public IEnumerable<Profile> Get()
        {
            return _profiles;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Profile Get(int id)
        {
            var profile = _profiles.Find(p => p.Id == id);
            return profile;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Profile data)
        {
            _profiles.Add(data);
            return Created("/profiles" + data.Id, data);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
