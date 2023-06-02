using BusManagement.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusManagement.Models
{
    public class BusSchedule
    {
        [Key]
        public int scheduleId { get; set; }

        //[ForeignKey("driver_id")]
        public int DriverId { get; set; }

        //[ForeignKey("conductor_id")]
        public int ConductorId { get; set; }

        public DateTime arrivalTime { get; set; }
        public DateTime departureTime { get; set; }

        //[ForeignKey("BusNo")]
        //[Required]
        /*public int busNo { get; set; }*/
        public int busScheduledNo { get; set; }

        //[ForeignKey("RouteNo")]
        //[Required]
        /*public int routeNo { get; set; }*/
        public int routeToBeFollowedRouteNo { get; set; }
    }
}
