using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PatrickWebsiteCore.Data;
using PatrickWebsiteCore.Models;

namespace PatrickWebsiteCore.Controllers
{
    public class PaintingStoriesController : Controller
    {
        private readonly ILogger<PaintingStoriesController> _logger;
        private readonly ApplicationDbContext _db;

        public PaintingStoriesController(ILogger<PaintingStoriesController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        public IActionResult Index()
        {
            var stories = _db.Stories.ToList<Story>().OrderByDescending(x => x.id).ToList();
            return View(stories);
        }

    }
}
