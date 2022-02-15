using AptManagement.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace AptManagement.Entity
{
    public class ManagementContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public ManagementContext()
        {

        }


        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Data Source= localhost; Database = ManagementDB; integrated security = True;");
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Message>().ToTable("Message");
            modelBuilder.Entity<APIAuthority>().ToTable("APIAuthority");
            modelBuilder.Entity<Message>().ToTable("Message");
            modelBuilder.Entity<ApartmentInfo>().ToTable("ApartmentInfo");
            modelBuilder.Entity<Bills>().ToTable("Bills");

            //İlki Model'in ismi, ikincisi SQL Table ismi
        }

        public DbSet<User> User { get; set; }
        public DbSet<Message> Message { get; set; }
        public DbSet<APIAuthority> APIAuthority { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<ApartmentInfo> ApartmentInfo { get; set; }
        public DbSet<Bills> Bills { get; set; }
    }
}




