using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using taskr.models;

namespace taskr.Controllers
{
    [ApiController]
    [Route("api")]
    public class Controller
    {
        [HttpPost("addTask")]
        public async Task<ActionResult> AddTask(
            [FromBody] [Required] TaskModel task)
        {
            System.Console.WriteLine(task.Name);

            return new OkResult();
        }
    }
}
