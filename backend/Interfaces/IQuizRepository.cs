using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models.Domains;
using backend.Models.DTOs;

namespace backend.Interfaces
{
    public interface IQuizRepository
    {
        Task<ICollection<Quiz>> GetAll();
        Task<Quiz?> GetById(Guid id);
        Task<Quiz> Create(string name);
    }
}