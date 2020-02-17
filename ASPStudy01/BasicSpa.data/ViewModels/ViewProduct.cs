using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicSpa.Data.ViewModels
{
    public class ViewProduct
    {
        #region プロパティ

        public int Id { get; set; }

        [Required]
        public string Title { get; set; }
        public string ProductUrl { get; set; }
        public string DownloadUrl { get; set; }
        public string Description { get; set; }
        public string Publisher { get; set; }
        public string PublisherUrl { get; set; }
        public string ImageUrl { get; set; }
        public string Price { get; set; }

        #endregion

        public ViewProduct()
        {
            this.Title = null;
        }

        #region 静的メソッド

        /// <summary>
        /// View Model(VM) Product のプロパティの値を、Model(M) Product のプロパティにコピーします。
        /// </summary>
        /// <param name="from">View Model(VM) Product のインスタンスを指定します。</param>
        /// <param name="to">Model(M) Product のインスタンスを指定します。</param>
        public static void SetProperties(ViewProduct from, BasicSpa.data.Products to)
        {

            if (from == null) throw new ArgumentNullException("from");
            if (to == null) throw new ArgumentNullException("to");

            to.Id = from.Id;
            to.Title = from.Title?.Trim();
            to.ProductUrl = from.ProductUrl?.Trim();
            to.DownloadUrl = from.DownloadUrl?.Trim();
            to.Description_ = from.Description?.Trim();
            to.Publisher = from.Publisher?.Trim();
            to.PublisherUrl = from.PublisherUrl?.Trim();
            to.ImageUrl = from.ImageUrl?.Trim();

            Func<string, decimal?> toDecimal = text =>
            {
                if (string.IsNullOrWhiteSpace(text)) return null;
                if (text == "FREE") return 0;
                if (text == "無料") return 0;

                return Convert.ToDecimal(text.Replace(",", ""));
            };

            to.Price = toDecimal(from.Price?.Trim());
        } // end sub

        /// <summary>
        /// Model(M) Product のプロパティの値を、View Model(VM) Product のプロパティにコピーします。
        /// </summary>
        /// <param name="from">Model(M) Product のインスタンスを指定します。</param>
        /// <param name="to">View Model(VM) Product のインスタンスを指定します。</param>
        public static void SetProperties(BasicSpa.data.Products from, ViewProduct to)
        {
            to.Id = from.Id;
            to.Title = from.Title;
            to.ProductUrl = from.ProductUrl;
            to.DownloadUrl = from.DownloadUrl;
            to.Description = from.Description_;
            to.Publisher = from.Publisher;
            to.PublisherUrl = from.PublisherUrl;
            to.ImageUrl = from.ImageUrl;

            if (from.Price.HasValue && from.Price.Value <= 0)
            {
                to.Price = "FREE";
            }
            else
            {
                to.Price = from.Price?.ToString("C") ?? "FREE";
            } // end if

        } // end sub

        /// <summary>
        /// Model(M) Product のプロパティの値を元に、View Model(VM) Product の新しいインスタンスを初期化して返します。
        /// </summary>
        /// <param name="from">Model(M) Product のインスタンスを指定します。</param>
        /// <returns>新しい View Model(VM) Product のインスタンスを返します。</returns>
        public static ViewProduct FromProduct(BasicSpa.data.Products from)
        {
            var to = new ViewProduct();
            ViewProduct.SetProperties(from, to);
            return to;
        } // end function

        #endregion

    } // end class
}
