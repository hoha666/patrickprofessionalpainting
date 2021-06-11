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
using static System.Net.Mime.MediaTypeNames;
using System.Drawing;
using LazZiya.ImageResize;

namespace PatrickWebsiteCore.Controllers
{
    [Authorize]
    public class GalleryItemsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IHostingEnvironment _env;

        public GalleryItemsController(ApplicationDbContext context, IHostingEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // GET: GalleryItems
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.GalleryItems.Include(g => g.Gallery);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: GalleryItems/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var galleryItem = await _context.GalleryItems
                .Include(g => g.Gallery)
                .FirstOrDefaultAsync(m => m.id == id);
            if (galleryItem == null)
            {
                return NotFound();
            }

            return View(galleryItem);
        }

        // GET: GalleryItems/Create
        public IActionResult Create()
        {
            ViewData["GalleryId"] = new SelectList(_context.Galleries, "id", "Title");
            return View();
        }

        public string InsertOneFile(IFormFile file, string gtitle)
        {
            try
            {
                if (file == null || file.Length <= 0L)
                    return (string)null;

                if (!Directory.Exists(_env.WebRootPath + "\\Gallery\\" + gtitle))
                {
                    Directory.CreateDirectory(_env.WebRootPath + "\\Gallery\\" + gtitle);
                }

                using (FileStream fileStream = System.IO.File.Create(_env.WebRootPath + "\\Gallery\\" + gtitle + "\\" + file.FileName))
                {
                    file.CopyTo((Stream)fileStream);
                    fileStream.Flush();               
                }
                var baseURL = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";
                return baseURL + "/gallery/" + gtitle + "/" + file.FileName;
            }
            catch (Exception ex)
            {
                ex.Message.ToString();
                return (string)null;
            }
        }

        // POST: GalleryItems/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Create([Bind("id,Title,UrlText,Type,Created,GalleryId,ImageUpload")] GalleryItem galleryItem)
        {
            if (ModelState.IsValid)
            {
                var gall = _context.Galleries.FirstOrDefault(q => q.id == galleryItem.GalleryId);
                galleryItem.UrlText = InsertOneFile(galleryItem.ImageUpload, gall.Title);
                galleryItem.Created = DateTime.Now;
                galleryItem.Type = "img";                
                _context.Add(galleryItem);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["GalleryId"] = new SelectList(_context.Galleries, "id", "Title", galleryItem.GalleryId);
            return View(galleryItem);
        }

        // GET: GalleryItems/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var galleryItem = await _context.GalleryItems.FindAsync(id);
            if (galleryItem == null)
            {
                return NotFound();
            }
            ViewData["GalleryId"] = new SelectList(_context.Galleries, "id", "Title", galleryItem.GalleryId);
            return View(galleryItem);
        }

        // POST: GalleryItems/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("id,Title,UrlText,Type,Created,GalleryId")] GalleryItem galleryItem)
        {
            if (id != galleryItem.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(galleryItem);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!GalleryItemExists(galleryItem.id))
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
            ViewData["GalleryId"] = new SelectList(_context.Galleries, "id", "Title", galleryItem.GalleryId);
            return View(galleryItem);
        }

        // GET: GalleryItems/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var galleryItem = await _context.GalleryItems
                .Include(g => g.Gallery)
                .FirstOrDefaultAsync(m => m.id == id);
            if (galleryItem == null)
            {
                return NotFound();
            }

            return View(galleryItem);
        }

        // POST: GalleryItems/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var galleryItem = await _context.GalleryItems.FindAsync(id);
            _context.GalleryItems.Remove(galleryItem);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool GalleryItemExists(int id)
        {
            return _context.GalleryItems.Any(e => e.id == id);
        }
    }
}
