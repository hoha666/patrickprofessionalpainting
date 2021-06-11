using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PatrickWebsiteCore.Data;
using PatrickWebsiteCore.Models;

namespace PatrickWebsiteCore.Controllers
{
    public class PaintingGalleryController : Controller
    {
        private readonly ILogger<PaintingGalleryController> _logger;
        private readonly ApplicationDbContext _db;

        public PaintingGalleryController(ILogger<PaintingGalleryController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        public IActionResult Index()
        {
            List<Gallery> a = _db.Galleries.ToList<Gallery>();
            //a.Sort();
            return View(a);
        }

    }
}
