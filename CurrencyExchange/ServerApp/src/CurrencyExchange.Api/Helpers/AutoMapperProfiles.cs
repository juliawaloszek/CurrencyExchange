using AutoMapper;
using CurrencyExchange.Api.Dtos;
using CurrencyExchange.Api.Models;

namespace CurrencyExchange.Api.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
        }   
    }
}