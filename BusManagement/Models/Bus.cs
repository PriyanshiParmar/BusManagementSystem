using System.ComponentModel.DataAnnotations;

namespace BusManagement.Models
{
    public class Bus
    {
        [Key]
        public int busNo { get; set; }
        [Range(000000,999999)]
        public int chassisNo { get; set; }
        public int capacity { get; set; }
        public string manufacturer { get; set; }
        public string model { get; set; }

        
    }
}
