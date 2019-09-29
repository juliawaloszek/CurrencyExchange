namespace CurrencyExchange.Api.Models
{
    public class Currency : Base 
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public int Unit { get; set; }
        public float PurchasePrice { get; set; }
        public float SellPrice { get; set; }
        public float AveragePrice { get; set; }
        public Wallet Wallet { get; set; }
        public int WalletId { get; set; }
    }
}