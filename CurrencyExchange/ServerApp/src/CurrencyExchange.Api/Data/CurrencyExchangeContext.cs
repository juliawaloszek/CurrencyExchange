using CurrencyExchange.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CurrencyExchange.Api.Data
{
    public class CurrencyExchangeContext : DbContext
    {
        public CurrencyExchangeContext (DbContextOptions<CurrencyExchangeContext> options) : base (options) {}

        
        public DbSet<User> Users {get; set; }       
    }
}