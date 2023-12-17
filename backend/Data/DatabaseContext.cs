using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models.Domains;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuizQuestion> QuizQuestions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QuizQuestion>().HasKey(qq => new { qq.QuizId, qq.QuestionId });
            modelBuilder.Entity<QuizQuestion>().HasOne(q => q.Quiz).WithMany(qq => qq.QuizQuestions).HasForeignKey(q => q.QuizId);
            modelBuilder.Entity<QuizQuestion>().HasOne(q => q.Question).WithMany(qq => qq.QuizQuestions).HasForeignKey(q => q.QuestionId);
        }
    }
}