using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PatrickWebsiteCore.Data;
using PatrickWebsiteCore.Models;

namespace PatrickWebsiteCore.Controllers
{
    public class ShowProjectController : Controller
    {
        private readonly ILogger<ShowProjectController> _logger;
        private readonly ApplicationDbContext _db;

        public ShowProjectController(ILogger<ShowProjectController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        [Route("ShowProject/{id:int}")]
        public IActionResult Index(int id)
        {
            Project a = _db.Projects.FirstOrDefault(X => X.id == id);
            return View(a);
        }

    }
}
