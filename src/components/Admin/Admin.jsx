import React from "react";
import "./Admin.css";
const Admin = () => {
  return (
    <div className="admin_container">
      <div className="admin_box">
        <div className="admin_header">
          <h3>لوحة التحكم الخاصة بال Admin</h3>
          <div className="admin_header_content">
            <input
              type="text"
              placeholder="قم بإضافة موظف اخر : الايميل الخاص به"
            />
            <input type="text" placeholder="قم بإضافة الباسورد الخاص به" />
            <div className="employee_position">
              <select>
                <option value="1">
                  موظف ( تحكم في : جميع خصائص الطلبات و المنتجات و اضافة فيلتر و
                  المرتجعات)
                </option>
                <option value="2">
                  المحاسب ( تحكم في : الارباح و المرتجعات و الطلبات عرض فقط و
                  المنتجات عرض فقط و التحكم في الكوبونات و خصم البراندات)
                </option>
              </select>
            </div>
          </div>
          <div>
            <button className="btns_admin">تنفيذ العملية</button>
          </div>
        </div>
        <div className="employee_content">
          <table>
            <tr>
              <th>اسم الموظف</th>
              <th>الوظيفة</th>
              <th>الايميل</th>
              <th>الباسورد</th>
              <th>تعديل</th>
              <th className="delete">حذف</th>
            </tr>
            <tr>
              <td>زياد احمد مشعل</td>
              <td>front end</td>
              <td>example@gmail.com</td>
              <td>123456789</td>
              <td>
                <button className="upate_employee">تعديل البيانات</button>
              </td>
              <td>
                <button className="delete_employee">حذف البيانات </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
