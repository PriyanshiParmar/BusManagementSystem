using BusManagement.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusManagement.Models
{
    public class Route
    {
        [Key]
        public int routeNo { get; set; }
        public int noOfStops { get; set; }

        [ForeignKey("begStop")]
        public int begStopNo { get; set; }
        /*public BusStop begStop { get; set; }*/


        [ForeignKey("endStop")]
        public int endStopNo { get; set; }
        /*public BusStop endStop { get; set; }*/

        
    }
}
