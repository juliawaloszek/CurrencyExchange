using System.Collections.Generic;
using System.Threading.Tasks;
using CurrencyExchange.Api.Data;
using CurrencyExchange.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CurrencyExchange.Api.Repositories
{
    public class CurrencyExchangeRepository : ICurrencyExchangeRepository
    {
        private readonly CurrencyExchangeContext _context;

        public CurrencyExchangeRepository(CurrencyExchangeContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            // var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            var user = await _context.Users.Include(p => p.Currencies).FirstOrDefaultAsync(u => u.Id == id);
            return user; 
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var user = await _context.Users.Include(p => p.Currencies).ToListAsync();
            return user;
        }

        public Task<bool> SaveAll()
        {
            throw new System.NotImplementedException();
        }
    }
}