using NorthwindDevExtremeWeb.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NorthwindDevExtremeWeb.Controllers
{
    public class CategoryController : Controller
    {
        NorthwindDbContext _db = new NorthwindDbContext();
        // GET: Category
        public ActionResult List()
        {
            return Json(new
            {
                Status = "OK",
                listCategory = _db.Categories.Select(i => new { i.CategoryID, i.CategoryName, i.Description})
            }, JsonRequestBehavior.AllowGet);
        }

        public void Insert(Categories model)
        {
            _db.Categories.Add(model);
            _db.SaveChanges();
        }

        public void Update(Categories model)
        {
            var category = _db.Categories.Single(i => i.CategoryID == model.CategoryID);
            category.CategoryName = model.CategoryName;
            category.Description = model.Description;
            _db.Entry(category).State = EntityState.Modified;
            _db.SaveChanges();
        }

        public void Delete(int CategoryID)
        {
            _db.Categories.Remove(_db.Categories.Single(i => i.CategoryID == CategoryID));
            _db.SaveChanges();
        }
    }
}