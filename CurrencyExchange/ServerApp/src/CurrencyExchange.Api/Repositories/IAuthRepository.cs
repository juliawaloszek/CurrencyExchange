using System.Collections.Generic;
using System.Threading.Tasks;
using CurrencyExchange.Api.Models;

namespace CurrencyExchange.Api.Repositories
{
    public interface IAuthRepository
    {
        Task <User> Register(User user, string password);
        Task <User> Login(string username, string password);
        Task <bool> UserExists(string username);     
    }
}