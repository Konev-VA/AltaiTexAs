using altaiTexAs.RequestBLL;
using altaiTexAs.RequestDAL;

namespace altaiTexAs
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddSingleton<IRequestBLL, RequestBLL.RequestBLL>();

            builder.Services.AddSingleton<IMailManager, MailManager>();

            builder.Services.AddSingleton<IRequestDAL, RequestDAL.RequestDAL>(provider => new RequestDAL.RequestDAL("Data Source=./dataBase.db;"));

            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen();

            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      policy.AllowAnyOrigin()
                                            .AllowAnyMethod()
                                            .AllowAnyHeader();
                                  });
            });

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.UseCors(MyAllowSpecificOrigins);

            app.Run();
        }
    }
}