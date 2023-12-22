using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models.Domains;

namespace backend.Models.DTOs
{
    public class QuizRequestDto
    {
        public required string Name { get; set; }
        public ICollection<QuestionDto> Questions { get; set; } = [];
    }
}