namespace CurrencyExchange.Api.Dtos
{
    public class UserForRegisterDto
    {
        // [Required]
        public string Username { get; set; }

        // [Required]
        // [StringLength(15, MinimumLength = 6, ErrorMessage = "You must specify password beetween 6 and 15 caracters")]
        public string Password { get; set; }        
    }
}