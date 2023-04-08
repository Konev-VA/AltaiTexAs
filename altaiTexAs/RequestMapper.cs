using altaiTexAs.Models;

namespace altaiTexAs
{
    public static class RequestMapper
    {
        public static Request DtoToRequest(RequestDTO requestDTO)
        {
            return new Request()
            {
                Name = requestDTO.Name,
                Description = requestDTO.Description,
                Email = requestDTO.Email,
                Telephone = requestDTO.Telephone,
                DateTime = DateTime.Now
            };
        }
    }
}
