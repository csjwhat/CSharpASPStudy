using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HellpSpa.Controllers
{
    public class HelloController : ApiController
    {
        // Get: Hello
        public string GetHello()
        {
            return "Hello";
        }
    }
}
