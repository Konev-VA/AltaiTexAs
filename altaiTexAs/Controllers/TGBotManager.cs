using altaiTexAs.Models;
using Telegram.Bot;

namespace altaiTexAs.Controllers
{
    public static class TGBotManager
    {
        static string token = "6082597746:AAGdj3WiM9dbV-Htk3xli64Oj3NGy5XJSi8";

        static long chatId = Int64.Parse(new ConfigurationBuilder().AddJsonFile("appsettings.json")
                                                                .Build()
                                                                .GetSection("TGBotSettings")["OwnerChatId"]);

        static ITelegramBotClient notificationBot = new TelegramBotClient(token);

        public static void NotifyOwner(Request request)
        {
            notificationBot.SendTextMessageAsync(
                new Telegram.Bot.Types.ChatId(chatId),
                $"Поступила новая заявка от {request.Name}. \n Текст заявки \" {request.Description} \". \n Контакты: {request.Email}, {request.Telephone}. \n Дата создания заявки: {request.DateTime}");
        }
    }
}
