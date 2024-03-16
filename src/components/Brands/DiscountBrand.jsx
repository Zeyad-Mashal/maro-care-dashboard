import React, { useEffect, useState } from "react";
import "./DiscountBrand.css";
import brandAr from "../data/brand_ar";
import image from "../../images/logo.png";
import reviewDiscountBrand from "../../api/reviewDiscountBrand.api";
const DiscountBrand = () => {
  const [discount, setDiscount] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [brandSelect, setBrandSelect] = useState("");
  const [updateDiscount, setUpdateDiscount] = useState("");
  const [updateStartingDate, setUpdateStartingDate] = useState("");
  const [updateExpiryDate, setUpdateExpiryDate] = useState("");
  const [updateBrandSelect, setupdateBrandSelect] = useState("");
  const [discountError, setDiscountError] = useState("");
  const [discountLoading, setDiscountLoading] = useState(false);
  const [reviewProducts, setReviewProducts] = useState([]);
  const openUpdateBrand = () => {
    document
      .querySelector(".update_popup")
      .classList.replace("d-none", "d-flex");
  };
  const closeUpdateBrand = () => {
    document
      .querySelector(".update_popup")
      .classList.replace("d-flex", "d-none");
  };
  const openDeleteBrand = () => {
    document
      .querySelector(".delete_popup")
      .classList.replace("d-none", "d-flex");
  };
  const closeDeleteBrand = () => {
    document
      .querySelector(".delete_popup")
      .classList.replace("d-flex", "d-none");
  };
  const handleReviewBrand = () => {
    const data = {
      discount,
      brand: brandSelect,
      expiryDate,
      startingDate,
    };
    reviewDiscountBrand(
      data,
      setDiscountError,
      setDiscountLoading,
      setReviewProducts
    );
  };
  const closeReviewPopup = () => {
    document
      .querySelector(".review_popup")
      .classList.replace("d-block", "d-none");
  };
  return (
    <div className="brand-container">
      <div className="brand-box">
        <h3>إضافة خصم علي البراند</h3>
        <div className="content-brand">
          <input
            type="number"
            placeholder="قم بإدخال قيمة الخصم "
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <div className="label-dev">
            <label htmlFor="startBrand">
              تاريخ البداية
              <input
                type="date"
                name="startBrand"
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
              />
            </label>
            <label htmlFor="endBrand">
              تاريخ النهاية
              <input
                type="date"
                name="endBrand"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </label>
          </div>
          <select
            value={brandSelect}
            onChange={(e) => setBrandSelect(e.target.value)}
          >
            <option value="اختر البراند">اختر البراند</option>
            {brandAr.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <p className="error">{discountError}</p>
        <div className="done-btns">
          <button onClick={handleReviewBrand}>
            {discountLoading ? (
              <span className="loaderAdd"></span>
            ) : (
              "مراجعة المنتجات"
            )}
          </button>
        </div>
      </div>
      <div className="view-table-discount">
        <div className="table-view">
          <table>
            <tr>
              <th>البراند</th>
              <th>نسبة الخصم</th>
              <th>تاريخ البداية</th>
              <th>تاريخ النهاية</th>
              <th>منتهي الصلاحية</th>
              <th>تعديل</th>
              <th>حذف</th>
              <th>إيقاف</th>
            </tr>
            <tr>
              <td>
                <h4>البراند</h4>
              </td>
              <td>
                <h4>10%</h4>
              </td>
              <td>
                <p>123456</p>
              </td>
              <td>123456</td>
              <td>
                {/* {checkExpiration(item.startingDate, item.expiryDate)
                  ? "غير صالح"
                  : "صالح"} */}
              </td>
              <td className="coupon-btns">
                <button className="update-coupon" onClick={openUpdateBrand}>
                  تعديل
                </button>
              </td>
              <td className="coupon-btns">
                <button className="delete-coupon" onClick={openDeleteBrand}>
                  حذف
                </button>
              </td>
              <td className="coupon-btns">
                <button className="stop-coupon">
                  {/* {item.disable ? "تشغيل" : "إيقاف"} */}
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      {/* update brand */}
      <div className="brand-box update_popup d-none ">
        <h3>تعديل خصم علي البراند</h3>
        <div className="content-brand">
          <input
            type="number"
            placeholder="قم بإدخال قيمة الخصم "
            value={updateDiscount}
            onChange={(e) => setUpdateDiscount(e.target.value)}
          />
          <div className="label-dev">
            <label htmlFor="startBrand">
              تاريخ البداية
              <input
                type="date"
                name="startBrand"
                value={updateStartingDate}
                onChange={(e) => setUpdateStartingDate(e.target.value)}
              />
            </label>
            <label htmlFor="endBrand">
              تاريخ النهاية
              <input
                type="date"
                name="endBrand"
                value={updateExpiryDate}
                onChange={(e) => setUpdateExpiryDate(e.target.value)}
              />
            </label>
          </div>
          <select
            value={updateBrandSelect}
            onChange={(e) => setupdateBrandSelect(e.target.value)}
          >
            <option value="اختر البراند">اختر البراند</option>
            {brandAr.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="done-btns">
          <button>حفظ</button>
          <button className="close_update" onClick={closeUpdateBrand}>
            إلغاء
          </button>
        </div>
      </div>
      {/* delete brand */}
      <div className="delete_popup d-none ">
        <h3>هل تريد حذف هذا المنتج ؟</h3>
        <div>
          <button>نعم</button>
          <button onClick={closeDeleteBrand}>لا</button>
        </div>
      </div>
      {/* review brand products */}
      <div className="review_popup d-none">
        <div className="review_popup_box">
          <h3>قم بتأكيد المنتجات قبل تنفيذ الخصم</h3>
          <div className="reviwe_table_popup">
            <table>
              <tr>
                <th>الصورة</th>
                <th>الاسم</th>
                <th>الباركود</th>
                <th>السعر</th>
                <th>تأكيد</th>
              </tr>
              {reviewProducts.map((item) => {
                return (
                  <tr>
                    <td>
                      <img src={item.images[0]} width={120} height={200} />
                    </td>
                    <td>{item.translation.ar.productName}</td>
                    <td>{item.productCode}</td>
                    <td>{item.price}</td>
                    <td>
                      <input type="checkbox" defaultChecked="true"></input>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <button>تمت المراجعة</button>
        <button className="close" onClick={closeReviewPopup}>
          إلغاء
        </button>
      </div>
    </div>
  );
};

export default DiscountBrand;
