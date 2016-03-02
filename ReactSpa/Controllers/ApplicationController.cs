using System.Web.Mvc;

namespace ReactSpa.Controllers
{
    public class ApplicationController : Controller
    {
        // GET: Application
        public ActionResult Application()
        {
            // ReSharper disable once Mvc.ViewNotResolved
            return View();
        }
    }
}