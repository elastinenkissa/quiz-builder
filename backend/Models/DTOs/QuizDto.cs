using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models.Domains;

namespace backend.Models.DTOs
{
    public class QuizDto
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required ICollection<QuestionDto>? Questions { get; set; }
    }
}