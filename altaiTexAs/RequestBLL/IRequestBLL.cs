using altaiTexAs.Models;

namespace altaiTexAs.RequestBLL
{
    public interface IRequestBLL
    {
        Task<int> CreateRequest(Request request);
    }
}
