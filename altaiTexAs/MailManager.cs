using altaiTexAs.Models;
using System.Net;
using System.Net.Mail;

namespace altaiTexAs
{
    public class MailManager : IMailManager
    {

        private string emailAddress = new ConfigurationBuilder().AddJsonFile("appsettings.json")
                                                                .Build()
                                                                .GetSection("EmailSettings")["EmailAddress"];

        private string ownerAddress = new ConfigurationBuilder().AddJsonFile("appsettings.json")
                                                                .Build()
                                                                .GetSection("EmailSettings")["OwnerAddress"];

        public async Task SendNotification(Request request)
        {
            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                //Логин и пароль должны быть созданы в настройках политики безопасности для каждого приложения отдельно
                Credentials = new NetworkCredential("AltaiTehAs", "qcytekztovfamfqz"),
                EnableSsl = true,
                UseDefaultCredentials = false
            };

            smtpClient.Send(
                from: emailAddress,
                recipients: ownerAddress,
                subject: "Новая заявка",
                body: $"Поступила новая заявка от {request.Name}. \n Текст заявки \" {request.Description} \". \n Контакты: {request.Email}, {request.Telephone}. \n Дата создания заявки: {request.DateTime}");

            if (request.Email != null)
                smtpClient.Send(
                    from: emailAddress,
                    recipients: request.Email,
                    subject: $"Подтверждение вашей заявки от {request.DateTime}",
                    body: $"Вы оставили заявку в приёмную \"АлтайТехАс\"с текстом \n \" {request.Description} \". \n Ожидайте ответа в течении суток.");
        }
    }
}
