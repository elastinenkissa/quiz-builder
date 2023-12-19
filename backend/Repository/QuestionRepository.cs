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
    }
}