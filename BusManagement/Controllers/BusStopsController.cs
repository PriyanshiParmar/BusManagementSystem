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
    public class BusStopsController : ControllerBase
    {
        private readonly BusContext _context;

        public BusStopsController(BusContext context)
        {
            _context = context;
        }

        // GET: api/BusStops
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BusStop>>> GetBusStops()
        {
            return await _context.BusStops.ToListAsync();
        }

        // GET: api/BusStops/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BusStop>> GetBusStop(int id)
        {
            var busStop = await _context.BusStops.FindAsync(id);

            if (busStop == null)
            {
                return NotFound();
            }

            return busStop;
        }

        // PUT: api/BusStops/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBusStop(int id, BusStop busStop)
        {
            if (id != busStop.stopNo)
            {
                return BadRequest();
            }

            _context.Entry(busStop).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusStopExists(id))
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

        // POST: api/BusStops
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BusStop>> PostBusStop(BusStop busStop)
        {
            _context.BusStops.Add(busStop);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBusStop", new { id = busStop.stopNo }, busStop);
        }

        // DELETE: api/BusStops/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBusStop(int id)
        {
            var busStop = await _context.BusStops.FindAsync(id);
            if (busStop == null)
            {
                return NotFound();
            }

            _context.BusStops.Remove(busStop);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BusStopExists(int id)
        {
            return _context.BusStops.Any(e => e.stopNo == id);
        }
    }
}
