using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using PatrickWebsiteCore.Data;
using Microsoft.Extensions.Logging;


namespace ViewComponentSample.ViewComponents
{
    public class LayoutSettingsViewComponent : ViewComponent
    {
        private readonly ILogger<LayoutSettingsViewComponent> _logger;
        private readonly ApplicationDbContext _db;

        public LayoutSettingsViewComponent(ILogger<LayoutSettingsViewComponent> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        public async Task<IViewComponentResult> InvokeAsync(string TitleEnd)
        {
            HomePage a = _db.HomePages.FirstOrDefault(x => x.Id == 1);
            //a.SiteTitle += " : " + TitleEnd;
            a.SiteTitle = TitleEnd;            
            return View(a);
        }
        //private Task<List<TodoItem>> GetItemsAsync(int maxPriority, bool isDone)
        //{
        //    return db.ToDo.Where(x => x.IsDone == isDone &&
        //                         x.Priority <= maxPriority).ToListAsync();
        //}
    }
}