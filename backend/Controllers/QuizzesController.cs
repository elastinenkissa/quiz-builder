using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Interfaces;
using backend.Models.Domains;
using backend.Models.DTOs;
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

            ICollection<QuizHomepageDto> quizDtos = [];

            foreach (var quiz in quizzes)
            {
                quizDtos.Add(
                    new QuizHomepageDto
                    {
                        Id = quiz.Id,
                        Name = quiz.Name
                    }
                );
            }

            return Ok(quizDtos);
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

            var quizDto = new QuizDto
            {
                Id = quiz.Id,
                Name = quiz.Name,
                Questions = quiz.QuizQuestions?.Select(qq => new QuestionDto
                {
                    Id = qq.Question.Id,
                    Content = qq.Question.Content,
                    Answer = qq.Question.Answer
                }).ToList() ?? []
            };


            return Ok(quizDto);
        }

    }
}