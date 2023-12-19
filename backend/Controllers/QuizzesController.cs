using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Interfaces;
using backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizzesController : ControllerBase
    {
        private readonly IQuizRepository _quizContext;

        public QuizzesController(IQuizRepository quizRepository)
        {
            _quizContext = quizRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var quizzes = await _quizContext.GetAll();

            return Ok(quizzes);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var quiz = await _quizContext.GetById(id);

            if (quiz == null)
            {
                return NotFound();
            }

            return Ok(quiz);
        }

    }
}