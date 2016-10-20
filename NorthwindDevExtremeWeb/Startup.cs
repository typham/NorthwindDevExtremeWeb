using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NorthwindDevExtremeWeb.Startup))]
namespace NorthwindDevExtremeWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
