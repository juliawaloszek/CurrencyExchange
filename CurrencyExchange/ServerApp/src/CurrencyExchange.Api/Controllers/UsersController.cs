using System.Collections.Generic;
using System.Linq;
using CurrencyExchange.Api.Data;
using Microsoft.AspNetCore.Mvc;

namespace CurrencyExchange.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly CurrencyExchangeContext _context;

        public UsersController(CurrencyExchangeContext context)
        {
            _context = context;
        }


        // GET api/users
        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = _context.User.ToList();
            return Ok(users);
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _context.User.FirstOrDefault(x => x.Id ==id);
            return Ok(user);
        }

        // POST api/users
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}