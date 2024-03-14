import React from "react";
import image from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import "./NewOrder.css";
import OrderDetails from "./OrderDetails";
import { Link } from "react-router-dom";
const NewOrder = () => {
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
    <div className="orders-container">
      <div className="search-box">
        <input type="text" placeholder="ابحث بالباركود او الاسم" />
      </div>
      <div className="new-orders">
        <div className="new-ordes-holder">
          <table>
            <tr>
              <th>الاسم</th>
              <th>حالة الطلب</th>
              <th>السعر</th>
              <th>التاريخ</th>
              <th>كود الطلب</th>
              <th>التفاصيل</th>
            </tr>
            <tr>
              <td>
                <h5>اسم العميل</h5>
              </td>
              <td className="td-new">
                <p className="new">جديد</p>
              </td>
              <td>400</td>
              <td>2024/3/6</td>
              <td>A12b24d</td>
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
                    <li>
                      <Link to={"/order/new/details"}>تفاصيل الطلب</Link>
                    </li>
                    <li onClick={opneCheckedproduct}>تأكيد الطلب</li>
                    <li onClick={opneRejectedproduct}>إلغاء الطلب</li>
                  </ul>
                </div>
              </td>
            </tr>
          </table>
        </div>
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
      {/* pagination */}
      <div className="pagination-controls">
        <button>التالي</button>
        <button>السابق</button>
      </div>
    </div>
  );
};

export default NewOrder;
