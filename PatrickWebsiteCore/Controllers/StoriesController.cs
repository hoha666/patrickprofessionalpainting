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
using Newtonsoft.Json;
using PatrickWebsiteCore.Data;

namespace PatrickWebsiteCore.Controllers
{
    [Authorize]
    public class StoriesController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IHostingEnvironment _env;

        public StoriesController(ApplicationDbContext context, IHostingEnvironment env)
        {
            _context = context;
            _env = env;
        }

        public IActionResult GetAll()
        {
            return Json(new { data = _context.Stories.Select(p => new { p.id, p.Title, p.Slogan, p.Tags, p.IconURL, p.PicURL }).ToList() });
        }

        // GET: Stories
        public async Task<IActionResult> Index()
        {
            return View(await _context.Stories.ToListAsync());
        }

        // GET: Stories/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var story = await _context.Stories
                .FirstOrDefaultAsync(m => m.id == id);
            if (story == null)
            {
                return NotFound();
            }

            return View(story);
        }

        // GET: Stories/Create
        public IActionResult Create()
        {
            return View();
        }

        public string InsertOneFile(IFormFile file)
        {
            try
            {
                if (file == null || file.Length <= 0L)
                    return (string)null;
                using (FileStream fileStream = System.IO.File.Create(_env.WebRootPath + "\\images\\Projects\\" + file.FileName))
                {
                    file.CopyTo((Stream)fileStream);
                    fileStream.Flush();
                }
                return "/images/projects/" + file.FileName;
            }
            catch (Exception ex)
            {
                ex.Message.ToString();
                return (string)null;
            }
        }

        // POST: Stories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Create([Bind("id,Title,Slogan,MainHtml,Created,Tags,IconUpload,PicUpload")] Story story)
        {
            if (ModelState.IsValid)
            {
                story.IconURL = InsertOneFile(story.IconUpload);
                story.PicURL = InsertOneFile(story.PicUpload);
                story.PublishDate = story.Created;
                _context.Add(story);
                await _context.SaveChangesAsync();
                string str = "با موفقیت ذخیره شد";
                bool flag = true;
                return Content(Newtonsoft.Json.JsonConvert.SerializeObject(new { success = flag, message = str }), "Application/Ajax");
            }
            return View(story);
        }

        // GET: Stories/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var story = await _context.Stories.FindAsync(id);
            if (story == null)
            {
                return NotFound();
            }
            return View(story);
        }

        // POST: Stories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Edit(int id, [Bind("id,Title,Slogan,MainHtml,Created,Tags,IconUpload,PicUpload,IconURL,PicURL")] Story story)
        {
            if (id != story.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    
                    if (story.IconUpload != null)
                        story.IconURL = InsertOneFile(story.IconUpload);
                  
                    if (story.PicUpload != null)
                        story.PicURL = InsertOneFile(story.PicUpload);
                   
                    story.LastModified = DateTime.Now;                 
                   
                    _context.Update(story);
                  
                    int num = await _context.SaveChangesAsync();
                    string str = "با موفقیت ذخیره شد";
                    bool flag = true;
                    string tUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}" + "/stories";
                    return Content(Newtonsoft.Json.JsonConvert.SerializeObject(new { success = flag, message = str, redirectUrl = tUrl }), "Application/Ajax");
                }
                catch (Exception ex)
                {                    
                    if (!StoryExists(story.id))
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
            return View(story);
        }

        // GET: Stories/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var story = await _context.Stories
                .FirstOrDefaultAsync(m => m.id == id);
            if (story == null)
            {
                return NotFound();
            }

            return View(story);
        }

        // POST: Stories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var story = await _context.Stories.FindAsync(id);
            _context.Stories.Remove(story);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool StoryExists(int id)
        {
            return _context.Stories.Any(e => e.id == id);
        }
    }
}
