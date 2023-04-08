using altaiTexAs.Models;
using altaiTexAs.RequestDAL;

namespace altaiTexAs.RequestBLL
{
    public class RequestBLL : IRequestBLL
    {
        IRequestDAL _requestDAL;

        public RequestBLL(IRequestDAL requestDAL)
        {
            _requestDAL = requestDAL;
        }

        public async Task<int> CreateRequest(Request request)
        {
            return await _requestDAL.CreateRequest(request);
        }
    }
}
