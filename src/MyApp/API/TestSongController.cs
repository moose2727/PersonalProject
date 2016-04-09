using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MyApp.Services;
using MyApp.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyApp.API
{
    [Route("api/[controller]")]
    public class TestSongController : Controller
    {
        ISongService _repo;

        public TestSongController(ISongService repo)
        {
            this._repo = repo;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_repo.getSongs());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_repo.getSong(id));
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Song value)
        {
            _repo.saveSong(value);
            return Ok();
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
            _repo.deleteSong(id);
        }
    }
}
