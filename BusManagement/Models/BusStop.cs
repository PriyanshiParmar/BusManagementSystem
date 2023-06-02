using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace BusManagement.Models
{
    public class BusStop
    {
        [Key]
        public int stopNo { get; set; }

        [Required]
        public string stopName { get; set; }
    }
}
