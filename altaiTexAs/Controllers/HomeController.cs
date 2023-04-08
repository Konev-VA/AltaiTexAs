using altaiTexAs.RequestBLL;
using Microsoft.AspNetCore.Mvc;

namespace altaiTexAs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        IRequestBLL _requestBLL;

        IMailManager _mailManager;

        public RequestController(IRequestBLL requestBLL, IMailManager mailManager)
        {
            _requestBLL = requestBLL;
            _mailManager = mailManager;
        }

        [HttpPost]
        [Route("CreateRequest")]
        public async Task<ActionResult> CreateRequestAsync(RequestDTO requestDTO)
        {
            var request = RequestMapper.DtoToRequest(requestDTO);

            request.Id = await _requestBLL.CreateRequest(request);

            await _mailManager.SendNotification(request);

            TGBotManager.NotifyOwner(request);

            return Ok(request.Id);
        }
    }
}
