using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BusManagement.Models;

namespace BusManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConductorsController : ControllerBase
    {
        private readonly BusContext _context;

        public ConductorsController(BusContext context)
        {
            _context = context;
        }

        // GET: api/Conductors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Conductor>>> GetConductors()
        {
            return await _context.Conductors.ToListAsync();
        }

        // GET: api/Conductors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Conductor>> GetConductor(int id)
        {
            var conductor = await _context.Conductors.FindAsync(id);

            if (conductor == null)
            {
                return NotFound();
            }

            return conductor;
        }

        // PUT: api/Conductors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConductor(int id, Conductor conductor)
        {
            if (id != conductor.EmpId)
            {
                return BadRequest();
            }

            _context.Entry(conductor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConductorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Conductors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Conductor>> PostConductor(Conductor conductor)
        {
            _context.Conductors.Add(conductor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConductor", new { id = conductor.EmpId }, conductor);
        }

        // DELETE: api/Conductors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConductor(int id)
        {
            var conductor = await _context.Conductors.FindAsync(id);
            if (conductor == null)
            {
                return NotFound();
            }

            _context.Conductors.Remove(conductor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConductorExists(int id)
        {
            return _context.Conductors.Any(e => e.EmpId == id);
        }
    }
}
