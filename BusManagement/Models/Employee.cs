using BusManagement.Models;
using System.ComponentModel.DataAnnotations;

namespace BusManagement.Models
{
    public class Employee
    {
        [Key]
        public int EmpId { get; set; }
        public string name { get; set; }
        public int age { get; set; }
        public string gender { get; set; }
        public string address { get; set; }
        [Range(6000000000, 9999999999)]
        public ulong mobileNo { get; set; }


        
    }
}
