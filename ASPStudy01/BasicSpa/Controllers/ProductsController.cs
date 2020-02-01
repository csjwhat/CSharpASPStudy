using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BasicSpa.Data.ViewModels;
using BasicSpa.data;
using System.Net;
using System.Net.Http;
using System.Web.Http;



namespace BasicSpa.Controllers
{
    public class ProductsController : ApiController
    {
        // GET: Products
        [Route("api/Products")]
        public IEnumerable<ViewProduct> GetProducts()
        {
            using (var db = new Entities2())
            {
                var results =
                    from p in (from p in db.Products select p).ToList()
                    select ViewProduct.FromProduct(p);

                return results;
            }
        }
    }
}