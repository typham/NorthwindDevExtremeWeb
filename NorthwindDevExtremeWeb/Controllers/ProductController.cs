using NorthwindDevExtremeWeb.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NorthwindDevExtremeWeb.Controllers
{
    public class ProductController : Controller
    {
        NorthwindDbContext _db = new NorthwindDbContext();
        // GET: Product
        public ActionResult List()
        {
            return Json(new {
                Status = "OK",
                listProduct = _db.Products.Select(i => new {
                    i.ProductID,
                    i.ProductName,
                    i.CategoryID,
                    i.SupplierID,
                }),
                listCategory = _db.Categories.Select(i => new { i.CategoryID, i.CategoryName}),
                listSupplier = _db.Suppliers.Select(i => new { i.SupplierID, i.CompanyName })
            }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Insert(Products model)
        {
            _db.Products.Add(model);
            _db.SaveChanges();
            return Json(_db.Products.OrderByDescending(i => i.ProductID).FirstOrDefault(),JsonRequestBehavior.AllowGet);
        }

        public void Update(Products model)
        {
            var product = _db.Products.Single(i => i.ProductID == model.ProductID);
            product.ProductName = model.ProductName;
            product.CategoryID = model.CategoryID;
            product.SupplierID = model.SupplierID;
            _db.Entry(product).State = EntityState.Modified;
            _db.SaveChanges();
        }

        public void Delete(int ProductID)
        {
            _db.Products.Remove(_db.Products.Single(i => i.ProductID == ProductID));
            _db.SaveChanges();
        }
    }
}