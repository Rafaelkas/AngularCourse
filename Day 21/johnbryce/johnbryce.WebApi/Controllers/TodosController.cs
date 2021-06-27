using johnbryce.Contract.Repositories;
using johnbryce.DataModel;
using johnbryce.WebApi.Mappers;
using johnbryce.WebApi.Models.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace johnbryce.WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly ITodosRepository _todosRepository;
        public TodosController(ITodosRepository todosRepository)
        {
            _todosRepository = todosRepository;
        }
        [HttpGet()]
        public async Task<ActionResult<List<TodoGroupDto>>> GetGroups()
        {
            var result = await _todosRepository.GetAllGroups(true);
            var response = result.Select(x => TodoGroupMapper.Map(x)).ToList();
            return Ok(response);
        }
    }

    // GET - Todos/wow
}
