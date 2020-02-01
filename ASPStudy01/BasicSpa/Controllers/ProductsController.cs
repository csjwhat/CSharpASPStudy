using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BasicSpa.Data.ViewModels;
using BasicSpa.data;

namespace BasicSpa.Controllers
{
    public class ProductsController : Controller
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


        public ActionResult Index()
        {
            return View();
        }
    }
}