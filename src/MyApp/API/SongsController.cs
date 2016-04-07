using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MyApp.Models;
using CoderCamps;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyApp.API
{
    [Route("api/[controller]")]
    public class SongsController : Controller
    {
        private ApplicationDbContext _db;
        public SongsController(ApplicationDbContext db)
        {
            this._db = db;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Song> Get()
        {
            return _db.Songs.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Song Get(int id)
        {
            var song = (from s in _db.Songs where s.Id == id select s).FirstOrDefault();
            return song;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Song data)
        {
            if (ModelState.IsValid)
            {
                if (data.Id == 0)
                {
                    _db.Songs.Add(data);
                    _db.SaveChanges();
                }
                else
                {
                    var songToEdit = _db.Songs.Where(s => s.Id == data.Id).FirstOrDefault();
                    songToEdit.Name = data.Name;
                    _db.SaveChanges();
                }

                return Created("/songs/" + data.Id, data);
            }
            return HttpBadRequest();
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
