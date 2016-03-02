using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ReactSpa
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RegisterRoutes();
        }

        public static void RegisterRoutes()
        {
            RouteTable.Routes.MapRoute("api", "api/{controller}/{action}");
            RouteTable.Routes.MapRoute("web", "{*url}", new { controller = "Application", action = "Application", });
        }
    }
}
