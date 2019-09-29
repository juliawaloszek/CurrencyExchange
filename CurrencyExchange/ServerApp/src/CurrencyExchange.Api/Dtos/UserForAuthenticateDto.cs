namespace CurrencyExchange.Api.Dtos
{
    public class UserForAuthenticateDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }        
    }
}