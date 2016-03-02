using System.Threading;
using System.Web.Mvc;

namespace ReactSpa.Controllers
{
    public class StartController : Controller
    {
        public ActionResult Load()
        {
            Thread.Sleep(1500);
            return Json(new { Message = "from server" }, JsonRequestBehavior.AllowGet);
        }
    }
}