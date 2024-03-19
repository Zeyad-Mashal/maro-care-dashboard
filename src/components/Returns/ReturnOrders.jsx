import React from "react";
import "./ReturnOrders.css";
const ReturnOrders = () => {
  const openDeleteReturn = () => {
    document
      .querySelector(".delete_return_popup")
      .classList.replace("d-none", "d-flex");
  };
  const closeReturnDelete = () => {
    document
      .querySelector(".delete_return_popup")
      .classList.replace("d-flex", "d-none");
  };
  return (
    <div className="return_container">
      <div className="return_box">
        <div className="search_box">
          <input type="text" placeholder="بحث" />
          <button>بحث</button>
        </div>
        <div className="review_return_table">
          <table>
            <tr>
              <th>اسم العميل</th>
              <th>رقم الهاتف</th>
              <th>رقم الطلب</th>
              <th>سبب الاسترجاع</th>
              <th>حذف</th>
            </tr>
            <tr>
              <td>زياد احمد محمد مشعل</td>
              <td>1234567891463</td>
              <td>12345678</td>
              <td className="problem">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                amet modi voluptate ex neque magni veritatis velit, suscipit
                natus blanditiis debitis, sint minima veniam facere dignissimos
                eius aut dolores nemo!
              </td>
              <td className="delete">
                <button className="delete_return" onClick={openDeleteReturn}>
                  حذف
                </button>
              </td>
            </tr>
          </table>
        </div>
        {/* delete return */}
        <div className="delete-coupon-popup delete_return_popup d-none ">
          <h3>هل تريد حذف هذا المرتجع ؟</h3>
          <p>Error is here</p>
          <div className="delete-btns">
            <button>
              حذف
              {/* {delteCouponLoading ? <span className="loaderAdd"></span> : "حذف"} */}
            </button>
            <button onClick={closeReturnDelete}>لا</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnOrders;
