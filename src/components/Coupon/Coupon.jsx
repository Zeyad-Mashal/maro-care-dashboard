import React from "react";
import "./Coupon.css";
const Coupon = () => {
  return (
    <div className="coupon-container">
      <div className="addCoupon-box">
        <h3>اضف كوبون خصم</h3>
        <div className="coupon-box">
          <input type="text" placeholder="كود الكوبون" />
          <input type="text" placeholder="نسبة خصم الكوبون" />
        </div>
        <div className="date-box">
          <label htmlFor="startDate">
            <p>تاريخ البداية</p>
            <input type="date" name="startDate" />
          </label>
          <label htmlFor="endDate">
            <p>تاريخ النهاية</p>
            <input type="date" name="endDate" />
          </label>
        </div>
        <div className="add-btn">
          <button>اضافة</button>
        </div>
      </div>
      <div className="table-view">
        <table>
          <tr>
            <th>الكوبون</th>
            <th>تاريخ البداية</th>
            <th>تاريخ النهاية</th>
            <th>تعديل</th>
            <th>حذف</th>
            <th>إيقاف</th>
          </tr>
          <tr>
            <td>
              <h4>zeyad10</h4>
            </td>
            <td>
              <p>2024/3/10</p>
            </td>
            <td>2024/3/30</td>
            <td className="coupon-btns">
              <button className="update-coupon">تعديل</button>
            </td>
            <td className="coupon-btns">
              <button className="delete-coupon">حذف</button>
            </td>
            <td className="coupon-btns">
              <button className="stop-coupon">إيقاف</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Coupon;
