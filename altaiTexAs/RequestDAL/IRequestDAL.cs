using altaiTexAs.Models;

namespace altaiTexAs.RequestDAL
{
    public interface IRequestDAL
    {
        Task<int> CreateRequest(Request request);
    }
}
