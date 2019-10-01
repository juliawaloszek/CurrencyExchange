using System.Collections.Generic;

namespace CurrencyExchange.Api.Models
{
    public class User : Base
    {
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Role { get; set; }
        public ICollection<Currency> Currencies {get; set;}

    }
}