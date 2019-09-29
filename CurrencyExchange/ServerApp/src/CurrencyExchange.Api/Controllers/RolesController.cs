
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;
using CurrencyExchange.Api.Data;
using CurrencyExchange.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CurrencyExchange.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {

        // GET api/roles
        [HttpGet]
        public IActionResult Get()
        {
            Type t = typeof(Role);
            FieldInfo[] fields = t.GetFields(BindingFlags.Static | BindingFlags.Public);
            var roles = new List<KeyValuePair<string, string>>();

            foreach (FieldInfo fi in fields)
            {
                roles.Add(new KeyValuePair<string, string>(fi.Name, fi.GetValue(null).ToString()));
            }
            return Ok(roles);
        }

    }
}