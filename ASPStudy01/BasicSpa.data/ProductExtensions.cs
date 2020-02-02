using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicSpa.data
{
    /// <summary>
    /// Model(M) Product クラスに対する拡張メソッドを司るクラスです。
    /// </summary>
    public static class ProductExtensions
    {
        #region 拡張メソッド

        /// <summary>
        /// View Model(VM) Product のプロパティの値を、Model(M) Product のプロパティにコピーします。
        /// </summary>
        /// <param name="me">Model(M) Product のインスタンスを指定します。</param>
        /// <param name="from">View Model(VM) Product のインスタンスを指定します。</param>
        public static void SetProperties(this Products me, BasicSpa.Data.ViewModels.ViewProduct from)
        {
            // 第一引数のthis Products の記述によって、拡張メソッドであることを明示している。meには自分自身が必ず入る。
            // 呼びもとで指定される引数は 第2引数以降
            BasicSpa.Data.ViewModels.ViewProduct.SetProperties(from, me);
        } // end sub

        #endregion

    } // end class
}
