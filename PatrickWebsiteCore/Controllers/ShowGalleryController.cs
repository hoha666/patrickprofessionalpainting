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
    public class ShowGalleryController : Controller
    {
        private readonly ILogger<ShowGalleryController> _logger;
        private readonly ApplicationDbContext _db;

        public ShowGalleryController(ILogger<ShowGalleryController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        public IActionResult Index(string UrlText)
        {
            var gallery = _db.Galleries.FirstOrDefault(q => q.UrlText == UrlText);
            List<GalleryItem> items = _db.GalleryItems.Where(q => q.GalleryId == gallery.id).ToList<GalleryItem>();
            ViewBag.Gname = gallery.Title;
            return View(items);
        }
 

    }
}
