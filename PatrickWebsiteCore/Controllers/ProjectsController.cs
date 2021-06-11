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
    public class ProjectsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IHostingEnvironment _env;

        public ProjectsController(ApplicationDbContext context, IHostingEnvironment env)
        {
            _context = context;
            _env = env;
        }

        public IActionResult GetAll()
        {
            return Json(new { data = _context.Projects.Select(p => new { p.id, p.Title, p.Brief, p.StartDate, p.IconURL, p.PicURL }).ToList() });
        }

        // GET: Projects
        public async Task<IActionResult> Index()
        {
            return View(await _context.Projects.ToListAsync());
        }

        // GET: Projects/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var project = await _context.Projects
                .FirstOrDefaultAsync(m => m.id == id);
            if (project == null)
            {
                return NotFound();
            }

            return View(project);
        }

        // GET: Projects/Create
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

        // POST: Projects/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Create([Bind("id,Title,Brief,Introduction,StartDate,EndDate,IconUpload,PicUpload")] Project project)
        {
            if (ModelState.IsValid)
            {
                project.IconURL = InsertOneFile(project.IconUpload);
                project.PicURL = InsertOneFile(project.PicUpload);
                _context.Add(project);
                int num = await _context.SaveChangesAsync();
                string str = "با موفقیت ذخیره شد";
                bool flag = true;
                return Content(Newtonsoft.Json.JsonConvert.SerializeObject(new { success = flag, message = str }), "Application/Ajax");
            }
            return View(project);
        }

        // GET: Projects/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                return NotFound();
            }
            return View(project);
        }

        // POST: Projects/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Edit(int id, [Bind("id,Title,Brief,Introduction,StartDate,EndDate,IconUpload,PicUpload,IconURL,PicURL")] Project project)
        {
            if (id != project.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {

                    if (project.IconUpload != null)
                        project.IconURL = InsertOneFile(project.IconUpload);

                    if (project.PicUpload != null)
                        project.PicURL = InsertOneFile(project.PicUpload);


                    _context.Update(project);
                    int num = await _context.SaveChangesAsync();
                    string str = "با موفقیت ذخیره شد";
                    bool flag = true;
                    string tUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}" + "/projects";
                    return Content(Newtonsoft.Json.JsonConvert.SerializeObject(new { success = flag, message = str, redirectUrl = tUrl }), "Application/Ajax");
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProjectExists(project.id))
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
            return View(project);
        }

        // GET: Projects/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var project = await _context.Projects
                .FirstOrDefaultAsync(m => m.id == id);
            if (project == null)
            {
                return NotFound();
            }

            return View(project);
        }

        // POST: Projects/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var project = await _context.Projects.FindAsync(id);
            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProjectExists(int id)
        {
            return _context.Projects.Any(e => e.id == id);
        }
    }
}
