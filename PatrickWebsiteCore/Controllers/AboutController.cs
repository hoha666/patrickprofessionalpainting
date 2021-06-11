using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PatrickWebsiteCore.Data;
using PatrickWebsiteCore.Models;

namespace PatrickWebsiteCore.Controllers
{    
    public class AboutController : Controller
    {
        private readonly ILogger<AboutController> _logger;
        private readonly ApplicationDbContext _db;

        public AboutController(ILogger<AboutController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        public IActionResult Index()
        {
            return View();
        }

    }
}
