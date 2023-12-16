using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.Domains
{
    public class QuizQuestion
    {
        public Guid QuizId { get; set; }
        public required Quiz Quiz { get; set; }
        public Guid QuestionId { get; set; }
        public required Question Question { get; set; }
    }
}