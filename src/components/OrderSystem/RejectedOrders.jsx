import React from "react";
import image from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import "./RejectedOrders.css";
import { Link } from "react-router-dom";
const RejectedOrders = () => {
  const openDeleteproduct = () => {
    document
      .querySelector(".delete-product")
      .classList.replace("d-none", "d-block");
    document
      .querySelector(".rejected-ordes-holder")
      .classList.replace("d-block", "d-none");
  };
  const closeDeleteProduct = () => {
    document
      .querySelector(".delete-product")
      .classList.replace("d-block", "d-none");
    document
      .querySelector(".rejected-ordes-holder")
      .classList.replace("d-none", "d-block");
  };
  return (
    <div className="orders-container">
      <div className="search-box">
        <input type="text" placeholder="ابحث بالباركود او الاسم" />
      </div>
      <div className="rejected-orders">
        <div className="rejected-ordes-holder">
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
              <td className="td-rejected">
                <p className="rejected">ملغية</p>
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
                      <Link to={"/order/rejected/details"}>تفاصيل الطلب</Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </table>
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

export default RejectedOrders;
