using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.Domains
{
    public class QuestionDto
    {
        public Guid? Id { get; set; }
        public required string Content { get; set; }
        public required string Answer { get; set; }
    }
}