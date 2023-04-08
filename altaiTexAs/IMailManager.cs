using altaiTexAs.Models;

namespace altaiTexAs
{
    public interface IMailManager
    {
        Task SendNotification(Request request);
    }
}
