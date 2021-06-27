using johnbryce.Contract.Repositories;
using johnbryce.DataModel;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace johnbryce.Services.Repositories
{
    public class JsonTodosRepository : ITodosRepository
    {
        private readonly string jsonUrl;

        public JsonTodosRepository(IConfiguration configuration)
        {
            this.jsonUrl = configuration["jsonUrl"];
        }
        public async Task<List<TodoGroup>> GetAllGroups(bool includeItems)
        {
            await Task.Delay(1000);
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", jsonUrl);
            var jsonContect = File.ReadAllText(filePath);
            return JsonConvert.DeserializeObject<List<TodoGroup>>(jsonContect);
        }
        private static List<TodoGroup> ReadFromMemory()
        {
            var todoGroup = new List<TodoGroup>();
            var globalCounter = 1;
            for (int i = 1; i < 5; i++)
            {
                TodoGroup group = new()
                {
                    Id = i,
                    Name = $"Group No.{i}"
                };

                for (int j = 1; j < 3; j++)
                {
                    group.Items.Add(new TodoItem
                    {
                        Id = globalCounter,
                        Name = $"Todo {j} Group {i}",
                        Description = "Desc",
                        GroupId = i,
                        IsCompleted = false
                    });
                    globalCounter++;
                }
                todoGroup.Add(group);
            }
            return todoGroup;
        }
    }
}
