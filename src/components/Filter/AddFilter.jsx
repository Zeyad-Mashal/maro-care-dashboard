import React, { useEffect, useState } from "react";
import "./AddFilter.css";
import getFilter from "../../api/getFilter.api";
import addFilter from "../../api/addFilter.api";
import deleteFilter from "../../api/deleteFilter.api";
const AddFilter = () => {
  useEffect(() => {
    getFilter(setAllFilter);
  }, []);

  const [allFilter, setAllFilter] = useState([]);
  const [filterAr, setFilterAr] = useState("");
  const [filterEn, setFilterEn] = useState("");
  const [loading, setLoading] = useState(false);
  const [Deleteloading, setDelteLoading] = useState(false);
  const [filterError, setFilterError] = useState("");
  const [DeletefilterError, setDeleteFilterError] = useState("");
  const [filterId, setFilterId] = useState("");

  const openUpdateproduct = () => {
    document
      .querySelector(".filter-input-udpate")
      .classList.replace("d-none", "d-block");
  };
  const closeUpdateProduct = () => {
    document
      .querySelector(".filter-input-udpate")
      .classList.replace("d-block", "d-none");
  };
  const openDeleteproduct = (filterId) => {
    setFilterId(filterId);
    document
      .querySelector(".delete-product")
      .classList.replace("d-none", "d-block");
  };
  const closeDeleteProduct = () => {
    document
      .querySelector(".delete-product")
      .classList.replace("d-block", "d-none");
  };
  const addFilterHandle = () => {
    setFilterError("");
    setFilterEn("");
    setFilterAr("");
    const data = {
      filterName_Ar: filterAr,
      filterName_En: filterEn,
    };
    addFilter(data, setLoading, setFilterError, setAllFilter);
  };

  const handleDeleteFilter = () => {
    deleteFilter(filterId, setDelteLoading, setDeleteFilterError, setAllFilter);
  };

  return (
    <div className="filter-container">
      <div className="addFillter-box">
        <h1>اضف قسم جديد في الفيلتر</h1>

        <div className="filter-input">
          <input
            type="text"
            placeholder="اضف الفيلتر    مثال: خالي من ..."
            className="filter-ar"
            value={filterAr}
            onChange={(e) => setFilterAr(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Filter"
            className="filter-en"
            value={filterEn}
            onChange={(e) => setFilterEn(e.target.value)}
          />
          <p className="error-filter">{filterError}</p>
          <button onClick={addFilterHandle}>
            {loading ? <span className="loaderAdd"></span> : "حفظ"}
          </button>
        </div>
      </div>

      <div className="filter-view">
        <h2>عناصر الفيلتر المضافة</h2>
        <table>
          <tr>
            <th>اسم الفيلتر</th>
            <th>Filter Name</th>
            <th>تعديل</th>
            <th>حذف</th>
          </tr>
          {allFilter.map((item) => {
            return (
              <tr className="filter-col">
                <td key={item.filterName_Ar}>{item.filterName_Ar}</td>
                <td key={item.filterName_En}>{item.filterName_En}</td>
                <td>
                  <button
                    className="update-filter-btn"
                    onClick={openUpdateproduct}
                  >
                    تعديل
                  </button>
                </td>
                <td>
                  <button
                    className="delete-filter-btn"
                    onClick={() => openDeleteproduct(item._id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      {/* update filter */}
      <div className="filter-input-udpate d-none ">
        <h1>تعديل الفيلتر</h1>
        <input
          type="text"
          placeholder="اضف الفيلتر    مثال: خالي من ..."
          className="filter-ar"
        />
        <input type="text" placeholder="Add Filter" className="filter-en" />
        <button>حفظ</button>
        <button onClick={closeUpdateProduct}>إلغاء</button>
      </div>

      {/* delete product popup */}
      <div className="delete-product d-none ">
        <h1>هل تريد حذف هذا الفيلتر ؟</h1>
        <p className="error-filter text-center">{DeletefilterError}</p>
        <div>
          <button onClick={handleDeleteFilter}>
            {Deleteloading ? <span className="loaderAdd"></span> : "نعم"}
          </button>
          <button onClick={closeDeleteProduct}>لا</button>
        </div>
      </div>
    </div>
  );
};

export default AddFilter;
