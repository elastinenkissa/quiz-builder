using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Interfaces;
using backend.Models.Domains;
using backend.Models.DTOs;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly DatabaseContext _context;

        public QuestionRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<ICollection<Question>> GetAll()
        {
            return await _context.Questions.ToListAsync();
        }

        public async Task<bool> Create(ICollection<QuestionDto> questions, Quiz quiz)
        {
            foreach (var question in questions)
            {
                var existingQuestion = await _context.Questions.FindAsync(question.Id);

                if (existingQuestion == null)
                {
                    var newQuestion = new Question
                    {
                        Content = question.Content,
                        Answer = question.Answer
                    };
                    _context.Questions.Add(newQuestion);

                    var quizQuestion = new QuizQuestion
                    {
                        Question = newQuestion,
                        Quiz = quiz
                    };
                    _context.QuizQuestions.Add(quizQuestion);
                }

                if (existingQuestion != null)
                {
                    var quizQuestion = new QuizQuestion
                    {
                        Question = existingQuestion,
                        Quiz = quiz
                    };
                    _context.QuizQuestions.Add(quizQuestion);
                }
            }

            var saved = await _context.SaveChangesAsync();

            return saved > 0;
        }

        public async Task<bool> Update(ICollection<QuestionDto> questions, Quiz quiz)
        {
            var connectionTables = await _context.QuizQuestions.Where(qq => qq.QuizId == quiz.Id).ToListAsync();

            if (connectionTables == null)
            {
                return false;
            }

            foreach (var question in questions)
            {
                foreach (var connectionTable in connectionTables)
                {
                    if (connectionTable.QuestionId != question.Id)
                    {
                        _context.QuizQuestions.Remove(connectionTable);
                    }
                }
            }

            return await Create(questions, quiz);
        }
    }
}