using System.Collections.Generic;
using System.Threading.Tasks;
using CurrencyExchange.Api.Models;

namespace CurrencyExchange.Api.Repositories
{
    public class CurrencyExchangeRepository : ICurrencyExchangeRepository
    {
        public void Add<T>(T entity) where T : class
        {
            throw new System.NotImplementedException();
        }

        public void Delete<T>(T entity) where T : class
        {
            throw new System.NotImplementedException();
        }

        public Task<User> GetUser(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<User>> GetUsers()
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> SaveAll()
        {
            throw new System.NotImplementedException();
        }
    }
}