using System;
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
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _db;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        public IActionResult Index()
        {
            HomePageViewModel a = new HomePageViewModel();
            a.stories = _db.Stories.ToList<Story>().OrderByDescending(item => item.id).ToList();
            a.projects = _db.Projects.ToList<Project>().OrderByDescending(item => item.id).ToList();
            a.testimonials = _db.Testimonials.ToList<Testimonial>().OrderByDescending(item => item.id).ToList();

            HomePage b = _db.HomePages.FirstOrDefault(x => x.Id == 1);
            a.mainVideo = b.MainVideoURL;// must be mp4
            a.brandVideo = b.BrandsVideoURL;
            a.siteName = b.SiteName;
            a.siteSlogan = b.SiteSlogan;
            a.siteTitle = b.SiteTitle;

            return View(a);
        }
        
        public IActionResult Brands()
        {
            return View();
        }
        public IActionResult Terms()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
