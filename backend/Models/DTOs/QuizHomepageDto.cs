using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.DTOs
{
    public class QuizHomepageDto
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
    }
}