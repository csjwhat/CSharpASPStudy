using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HelloSpa.Controllers
{
    public class HelloController : ApiController
    {
        // Get:Hello
        public string GetHello()
        {
            return "Hello (" + DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")+")" ;
        }

        // Get:HelloWithName
        [Route("api/Hello/Plus")]
        public string GetPlus()
        {
            throw new InvalidOperationException("このWebAPIは廃止されました");
            // return "Hello Plus!";
        }

        // Get:HelloWithName
        [Route("api/Hello/HelloWithName/{name}/{name2}")]
        public string GetHelloWithName(string name, string name2)
        {
            return "Hello " + name + "!" + name2;
        }

        // Get:InEnabled
        [Route("api/Hello/IsEnabled/{clientVersion}")]
        public bool GetIsEnabled(int clientVersion)
        {
            return (clientVersion >= 1);
        }
    }
}
