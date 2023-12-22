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
        private readonly IQuestionRepository _questionContext;

        public QuizzesController(IQuizRepository quizRepository, IQuestionRepository questionRepository)
        {
            _quizContext = quizRepository;
            _questionContext = questionRepository;
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

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] QuizRequestDto quizRequestDto)
        {
            var newQuiz = await _quizContext.Create(quizRequestDto.Name);

            if (newQuiz == null)
            {
                return NotFound();
            }

            var questionsCreated = await _questionContext.Create(quizRequestDto.Questions, newQuiz);

            if (questionsCreated == false)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] QuizRequestDto quizRequestDto)
        {
            var quiz = await _quizContext.GetById(id);

            if (quiz == null)
            {
                return NotFound();
            }

            var quizUpdated = await _quizContext.Update(quiz, quizRequestDto.Name);

            var questionsUpdated = await _questionContext.Update(quizRequestDto.Questions, quiz);

            if (questionsUpdated == false || quizUpdated == false)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var deletingQuiz = await _quizContext.GetById(id);

            if (deletingQuiz == null)
            {
                return NotFound();
            }

            var state = await _quizContext.Delete(deletingQuiz);

            if (state == false)
            {
                return BadRequest();
            }

            return Ok();
        }


    }
}