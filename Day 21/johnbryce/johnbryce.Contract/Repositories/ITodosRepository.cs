using johnbryce.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace johnbryce.Contract.Repositories
{
    public interface ITodosRepository
    {
        Task<List<TodoGroup>> GetAllGroups(bool includeItems);
    }
}
