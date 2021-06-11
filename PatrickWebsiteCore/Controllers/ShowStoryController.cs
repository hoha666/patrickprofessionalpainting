using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PatrickWebsiteCore.Data;
using PatrickWebsiteCore.Models;

namespace PatrickWebsiteCore.Controllers
{
    public class ShowStoryController : Controller
    {
        private readonly ILogger<ShowStoryController> _logger;
        private readonly ApplicationDbContext _db;

        public ShowStoryController(ILogger<ShowStoryController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        [Route("ShowStory/{id:int}")]
        public IActionResult Index(int id)
        {
            Story a = _db.Stories.FirstOrDefault(X => X.id == id);
            return View(a);
        }

    }
}
