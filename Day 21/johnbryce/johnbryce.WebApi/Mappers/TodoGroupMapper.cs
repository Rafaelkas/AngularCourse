using johnbryce.DataModel;
using johnbryce.WebApi.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace johnbryce.WebApi.Mappers
{
    public class TodoGroupMapper
    {
        public static TodoGroupDto Map(TodoGroup group)
        {
            TodoGroupDto dto = new TodoGroupDto(group.Id, group.Name, group.Items.Select(x => x.Name).ToList());
            return dto;
        }
    }
}
