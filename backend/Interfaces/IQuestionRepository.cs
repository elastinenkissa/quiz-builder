using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models.Domains;
using backend.Models.DTOs;

namespace backend.Interfaces
{
    public interface IQuestionRepository
    {
        Task<ICollection<Question>> GetAll();
        Task<bool> Create(ICollection<QuestionDto> questions, Quiz quiz);
        Task<bool> Update(ICollection<QuestionDto> questions, Quiz quiz);
    }
}