using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CurrencyExchange.Api.Data;
using CurrencyExchange.Api.Dtos;
using CurrencyExchange.Api.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CurrencyExchange.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ICurrencyExchangeRepository _repo;
        private readonly IMapper _mapper;

        // public UsersController(CurrencyExchangeContext context, 
        //                        CurrencyExchangeRepository repo, 
        //                        IMapper mapper)
        public UsersController(ICurrencyExchangeRepository repo)
        {
            _repo = repo;
        }


        // GET api/users
        [HttpGet]
        public  async Task<IActionResult> Get()
        {
            var users = await _repo.GetUsers();
            return Ok(users);
            // var users = await _repo.GetUsers();
            // var usersToReturn = _mapper.Map<IEnumerable <UserForListDto>>(users);
            // return Ok(usersToReturn);
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _repo.GetUser(id);
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