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
    public class QuizRepository : IQuizRepository
    {
        private readonly DatabaseContext _context;

        public QuizRepository(DatabaseContext context)
        {
            _context = context;

        }

        public async Task<ICollection<Quiz>> GetAll()
        {
            return await _context.Quizzes.ToListAsync();
        }

        public async Task<Quiz?> GetById(Guid id)
        {
            var quiz = await _context.Quizzes.Include(q => q.QuizQuestions).ThenInclude(qq => qq.Question).FirstOrDefaultAsync(q => q.Id == id);

            if (quiz == null)
            {
                return null;
            }

            return quiz;
        }


        public async Task<Quiz> Create(string name)
        {
            var newQuiz = new Quiz
            {
                Name = name
            };

            await _context.Quizzes.AddAsync(newQuiz);
            await _context.SaveChangesAsync();

            return newQuiz;
        }

        public async Task<bool> Delete(Quiz quiz)
        {
            var connectionTable = await _context.QuizQuestions.FirstOrDefaultAsync(qq => qq.QuizId == quiz.Id);

            _context.Quizzes.Remove(quiz);

            if (connectionTable != null)
            {
                _context.QuizQuestions.Remove(connectionTable);
            }

            var saved = await _context.SaveChangesAsync();

            return saved > 0;
        }

        public async Task<bool> Update(Quiz quiz, string name)
        {
            quiz.Name = name;

            var saved = await _context.SaveChangesAsync();

            return saved > 0;
        }
    }
}