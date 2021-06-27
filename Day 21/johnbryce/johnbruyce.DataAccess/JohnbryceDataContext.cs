using johnbryce.DataModel;
using Microsoft.EntityFrameworkCore;

namespace johnbryce.DataAccess
{
    public class JohnbryceDataContext : DbContext
    {
        public DbSet<TodoGroup> TodoGroups { get; set; }
        public DbSet<TodoItem> TodoItems { get; set; }

        public JohnbryceDataContext()
        {

        }
        public JohnbryceDataContext(DbContextOptions<JohnbryceDataContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=CAMPUTER-PC\\SQLEXPRESS;Initial Catalog=johnbryce-2021;Integrated Security=True");
            }
        }

    }
}
