using System.Collections.Generic;

namespace CurrencyExchange.Api.Models
{
    public class Wallet : Base
    {
        public ICollection<Currency> Currencies {get; set;}
        public User User { get; set; }
        public int UserId { get; set; }

    }
}