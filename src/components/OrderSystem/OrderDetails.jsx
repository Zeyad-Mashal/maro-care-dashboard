import React from "react";
import image from "../../images/logo.png";
import "./OrderDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const OrderDetails = () => {
  const opneCheckedproduct = () => {
    document
      .querySelector(".checked_order")
      .classList.replace("d-none", "d-block");
  };
  const opneRejectedproduct = () => {
    document
      .querySelector(".rejected_check")
      .classList.replace("d-none", "d-block");
  };
  const closeCheckedproduct = () => {
    document
      .querySelector(".checked_order")
      .classList.replace("d-block", "d-none");
  };
  const closeRejectedproduct = () => {
    document
      .querySelector(".rejected_check")
      .classList.replace("d-block", "d-none");
  };
  return (
    <div className="order-container">
      <div className="order-box">
        <div className="img-holder">
          <img src={image} width={250} />
          <img src={image} width={250} />
          <img src={image} width={250} />
        </div>
        <div className="order-details">
          <h1>تفاصيل الطلب</h1>
          <h4>اسم العميل: زياد احمد</h4>
          <h5>كود الطلب: Ab12356</h5>
          <h5>اجمالي المبلغ: 500 ريال</h5>
          <h5>تاريخ الطلب: 2024/3/6</h5>
          <h5>المدينة التي يتم الشحن لها: الرياض</h5>
        </div>
        <div className="order-btns">
          <button>تأكيد الطلب</button>
          <button>إلغاء</button>
        </div>
      </div>
      <div className="new-ordes-holder new-orders_details">
        <table>
          <tr>
            <th>الصورة</th>
            <th>الباركود</th>
            <th>البراند</th>
            <th>الفئة</th>
            <th>اجمالي السعر</th>
            <th>الكمية المطلوبة</th>
            <th>الالوان المطلوبة</th>
            <th>التفاصيل</th>
          </tr>
          <tr>
            <td>
              <img src={image} width={100} />
            </td>
            <td>123456794426</td>
            <td>البراند</td>
            <td>الفئة</td>
            <td>500</td>
            <td>2</td>
            <td>#000</td>
            <td>
              <div class="btn-group dropend w-100">
                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
                <ul class="dropdown-menu">
                  <li onClick={opneCheckedproduct}>تأكيد الطلب</li>
                  <li onClick={opneRejectedproduct}>إلغاء الطلب</li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </div>
      {/* checked */}
      <div className="checked_order d-none ">
        <h3>هل تريد تأكيد الطلب ؟</h3>
        <div>
          <button>نعم</button>
          <button onClick={closeCheckedproduct}>لا</button>
        </div>
      </div>
      {/* rejected */}
      <div className="checked_order rejected_check d-none ">
        <h3>هل تريد إلغاء الطلب ؟</h3>
        <div>
          <button>نعم</button>
          <button onClick={closeRejectedproduct}>لا</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
