using System.ComponentModel.DataAnnotations;

namespace BusManagement.Models
{
    public class Driver : Employee
    {
        [StringLength(16, MinimumLength =16)]
        public string licenseNo { get; set; }

    }
}
