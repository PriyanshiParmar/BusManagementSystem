using BusManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace BusManagement.Models
{
    public class BusContext : DbContext
    {
        public BusContext(DbContextOptions<BusContext> options) : base(options)
        {

        }

        /*protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(@"Server=(localDb)\MSSQLLocalDB;Database=BusMngmt;Trusted_Connection=True;");
        }*/

        protected void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<BusSchedule>().HasOne<Employee>(bs => bs.Conductor).WithMany(e => e.Schedules).HasForeignKey(bs => bs.conductorId);
            //modelBuilder.Entity<BusSchedule>().HasOne<Employee>(bs => bs.Driver).WithMany(e => e.Schedules).HasForeignKey(bs => bs.driverId);
            /*modelBuilder.Entity<Route>().HasOne(r => r.begStop).WithMany().OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Route>().HasOne(r => r.endStop).WithMany().OnDelete(DeleteBehavior.NoAction);*/
            //modelBuilder.Entity<Route>().HasOne(r => r.begStop).WithMany().OnDelete(DeleteBehavior.Cascade);
            //modelBuilder.Entity<Route>().HasOne(r => r.endStop).WithMany().OnDelete(DeleteBehavior.Cascade);
        }

        public DbSet<Bus> Buses { get; set; }
        public DbSet<Route> Routes { get; set; }
        public DbSet<BusSchedule> Schedules { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Conductor> Conductors { get; set; }
        public DbSet<BusStop> BusStops { get; set; }
    }
}
