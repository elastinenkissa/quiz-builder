using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.Domains
{
    public class Quiz
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public ICollection<QuizQuestion> QuizQuestions { get; set; } = [];
    }
}