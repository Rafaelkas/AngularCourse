using johnbryce.DataAccess;
using johnbryce.Contract.Repositories;
using johnbryce.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace johnbryce.Services.Repositories
{
    public class SqlTodosRepository : ITodosRepository
    {
        private readonly JohnbryceDataContext _johnbryceDataContext;

        public SqlTodosRepository(JohnbryceDataContext johnbryceDataContext)
        {
            _johnbryceDataContext = johnbryceDataContext;
        }
        public async Task<List<TodoGroup>> GetAllGroups(bool includeItems)
        {
            //var r = ReadFromMemory();
            //_johnbryceDataContext.TodoGroups.AddRange(r);
            //await _johnbryceDataContext.SaveChangesAsync();

            if (includeItems)
            {
                var items = await _johnbryceDataContext.TodoGroups
                .Include(x => x.Items)
                .ToListAsync();
                return items;
            }
            else
            {
                var items = await _johnbryceDataContext.TodoGroups.ToListAsync();
                return items;
            }
        }
        private static List<TodoGroup> ReadFromMemory()
        {
            var todoGroup = new List<TodoGroup>();
            var globalCounter = 1;
            for (int i = 1; i < 5; i++)
            {
                TodoGroup group = new()
                {
                    //Id = i,
                    Name = $"Group No.{i}"
                };

                for (int j = 1; j < 3; j++)
                {
                    group.Items.Add(new TodoItem
                    {
                        //Id = globalCounter,
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
