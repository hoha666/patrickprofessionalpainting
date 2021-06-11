using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PatrickWebsiteCore.Data;

namespace PatrickWebsiteCore.Controllers
{
    [Authorize]
    public class HomePagesController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IHostingEnvironment _env;

        public HomePagesController(ApplicationDbContext context, IHostingEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // GET: HomePages
        public async Task<IActionResult> Index()
        {
            return View(await _context.HomePages.ToListAsync());
        }

        // GET: HomePages/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var homePage = await _context.HomePages
                .FirstOrDefaultAsync(m => m.Id == id);
            if (homePage == null)
            {
                return NotFound();
            }

            return View(homePage);
        }

        // GET: HomePages/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: HomePages/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,MainVideoURL,BrandsVideoURL,FavIconURL,SiteName,SiteSlogan,SiteTitle,SiteMeta,OgTitle,OgType,OgImageURL,OgSiteURL")] HomePage homePage)
        {
            if (ModelState.IsValid)
            {
                _context.Add(homePage);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(homePage);
        }

        // GET: HomePages/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var homePage = await _context.HomePages.FindAsync(id);
            if (homePage == null)
            {
                return NotFound();
            }
            return View(homePage);
        }

        public string InsertOneFile(IFormFile file, string localFolder, string localAddress)
        {
            try
            {
                if (file == null || file.Length <= 0L)
                    return (string)null;
                using (FileStream fileStream = System.IO.File.Create(_env.WebRootPath + "\\images\\" + localFolder + "\\" + file.FileName))
                {
                    file.CopyTo((Stream)fileStream);
                    fileStream.Flush();
                }
                var baseURL = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";
                return baseURL + "/images/" + localAddress + "/" + file.FileName;
            }
            catch (Exception ex)
            {
                ex.Message.ToString();
                return (string)null;
            }
        }

        // POST: HomePages/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Edit(int id, [Bind("Id,MainVideoURL,BrandsVideoURL,FavIconURL,SiteName,SiteSlogan,SiteTitle,SiteMeta,OgTitle,OgType,OgImageURL,OgSiteURL,OgImageUpload,MainVideoUpload,BrandsVideoUpload,FavIconUpload")] HomePage homePage)
        {
            if (id != homePage.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    if (homePage.OgImageUpload != null)
                        homePage.OgImageURL = InsertOneFile(homePage.OgImageUpload, "home\\og", "home/og");

                    if (homePage.MainVideoUpload != null)
                        homePage.MainVideoURL = InsertOneFile(homePage.MainVideoUpload, "home\\mainvideo", "home/mainvideo");

                    if (homePage.BrandsVideoUpload != null)
                        homePage.BrandsVideoURL = InsertOneFile(homePage.BrandsVideoUpload, "home\\brandvideo", "home/brandvideo");

                    if (homePage.FavIconUpload != null)
                        homePage.FavIconURL = InsertOneFile(homePage.FavIconUpload, "home\\favicon", "home/favicon");

                    _context.Update(homePage);

                    int num = await _context.SaveChangesAsync();
                    string str = "با موفقیت ذخیره شد";
                    bool flag = true;
                    string tUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}" + "/homepages";
                    return Content(Newtonsoft.Json.JsonConvert.SerializeObject(new { success = flag, message = str, redirectUrl = tUrl }), "Application/Ajax");

                    _context.Update(homePage);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!HomePageExists(homePage.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(homePage);
        }

        // GET: HomePages/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var homePage = await _context.HomePages
                .FirstOrDefaultAsync(m => m.Id == id);
            if (homePage == null)
            {
                return NotFound();
            }

            return View(homePage);
        }

        // POST: HomePages/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var homePage = await _context.HomePages.FindAsync(id);
            _context.HomePages.Remove(homePage);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool HomePageExists(int id)
        {
            return _context.HomePages.Any(e => e.Id == id);
        }
    }
}
