using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Interfaces;
using backend.Models.Domains;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly IQuestionRepository _questionsContext;

        public QuestionsController(IQuestionRepository questionRepository)
        {
            _questionsContext = questionRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var questions = await _questionsContext.GetAll();

            var questionDtos = new List<QuestionDto>();

            foreach (var question in questions)
            {
                questionDtos.Add(
                    new QuestionDto
                    {
                        Id = question.Id,
                        Content = question.Content,
                        Answer = question.Answer
                    }
                );
            }

            return Ok(questionDtos);
        }
    }
}