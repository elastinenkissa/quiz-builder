using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models.Domains;

namespace backend.Interfaces
{
    public interface IQuizRepository
    {
        Task<ICollection<Quiz>> GetAll();
        Task<Quiz?> GetById(Guid id);
    }
}