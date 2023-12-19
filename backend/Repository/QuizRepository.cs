using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Interfaces;
using backend.Models.Domains;
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
    }
}