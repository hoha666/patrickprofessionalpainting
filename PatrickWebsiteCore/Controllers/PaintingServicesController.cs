using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PatrickWebsiteCore.Data;
using PatrickWebsiteCore.Models;

namespace PatrickWebsiteCore.Controllers
{
    public class PaintingServicesController : Controller
    {
        private readonly ILogger<PaintingServicesController> _logger;
        private readonly ApplicationDbContext _db;

        public PaintingServicesController(ILogger<PaintingServicesController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        public IActionResult Index()
        {
            var projects = _db.Projects.ToList<Project>().OrderByDescending(x => x.id).ToList();
            return View(projects);
        }

    }
}
