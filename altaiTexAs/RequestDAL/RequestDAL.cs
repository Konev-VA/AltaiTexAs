using altaiTexAs.Models;
using Dapper;
using Microsoft.Data.Sqlite;
using System.Data;

namespace altaiTexAs.RequestDAL
{
    public class RequestDAL : IRequestDAL
    {
        private string _connectionString;
        public RequestDAL(string connectionString)
        {
            _connectionString = connectionString;

            using (IDbConnection db = new SqliteConnection(_connectionString))
            {
                string query = $@"CREATE TABLE IF NOT EXISTS Requests (
                                                                         {nameof(Request.Id)} INTEGER PRIMARY KEY AUTOINCREMENT
                                                                       , {nameof(Request.Name)} TEXT
                                                                       , {nameof(Request.Description)} TEXT
                                                                       , {nameof(Request.Telephone)} TEXT
                                                                       , {nameof(Request.Email)} TEXT
                                                                       , {nameof(Request.DateTime)} TEXT );";
                db.Open();

                db.QueryAsync(query);
            }
        }

        public async Task<int> CreateRequest(Request request)
        {
            using (IDbConnection db = new SqliteConnection(_connectionString))
            {
                string query = $@"insert into Requests( {nameof(Request.Name)} 
                                                       , {nameof(Request.Description)}
                                                       , {nameof(Request.Telephone)}
                                                       , {nameof(Request.Email)}
                                                       , {nameof(Request.DateTime)}
                                                        )
                                values(@Name, @Description, @Telephone, @Email, @DateTime)
                                returning Id;";
                db.Open();

                var temp = await db.QueryFirstOrDefaultAsync<int>(query, request);
                return temp;
            }
        }
    }
}
