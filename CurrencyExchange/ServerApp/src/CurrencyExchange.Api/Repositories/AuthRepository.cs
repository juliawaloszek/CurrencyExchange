using System;
using System.Threading.Tasks;
using CurrencyExchange.Api.Data;
using CurrencyExchange.Api.Models;

namespace CurrencyExchange.Api.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly CurrencyExchangeContext _context;
        public AuthRepository(CurrencyExchangeContext context)
        {
            _context = context;

        }

        public Task<User> Login(string username, string password)
        {
            throw new System.NotImplementedException();
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hamac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hamac.Key;
                passwordHash = hamac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public Task<bool> UserExists(string username)
        {
            throw new System.NotImplementedException();
        }
    }
}