import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../organisms/sidebar/Sidebar";
import "./ManageCoupon.scss";
import { Button, Table, Form, Modal } from "react-bootstrap";
import CustomModal from "../../organisms/modal/CustomModal";
// import "bootstrap/dist/css/bootstrap.css";
const DATA = [
  {
    name: "THANG9",
    discount: "10000 vnđ",
    minimum: "1000000 vnđ",
    startdate: "01/09/1990",
    enddate: "30/09/1990",
    detail: "Giảm tất cả đơn hàng trong tháng 9",
  },
  {
    name: "KHAITRUONG",
    discount: "10000 vnđ",
    minimum: "1000000 vnđ",
    startdate: "01/09/1990",
    enddate: "30/09/1990",
    detail: "Giảm tất cả đơn hàng nhân dịp khai trương",
  },
  {
    name: "THANG9",
    discount: "10000 vnđ",
    minimum: "1000000 vnđ",
    startdate: "01/09/1990",
    enddate: "30/09/1990",
    detail: "Giảm tất cả đơn hàng trong tháng 9",
  },
  {
    name: "KHAITRUONG",
    discount: "10000 vnđ",
    minimum: "1000000 vnđ",
    startdate: "01/09/1990",
    enddate: "30/09/1990",
    detail: "Giảm tất cả đơn hàng nhân dịp khai trương",
  },
];

const ManageCoupon = () => {
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const handleAddClose = () => setAddShow(false);
  const handleEditClose = () => setEditShow(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const handleAddShow = () => setAddShow(true);
  const handleEditShow = () => setEditShow(true);
  const handleDeleteShow = () => setDeleteShow(true);
  return (
    <div className="manage-coupon">
      <Sidebar />
      <div className="content">
        <div className="toolbar">
          <h2>QUẢN LÝ KHUYẾN MÃI</h2>
          <Button variant="outline-info" onClick={handleAddShow}>
            <i class="bi bi-plus-lg"></i>
            Thêm
          </Button>{" "}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mã giảm giá</th>
              <th>Số tiền giảm</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Chi tiết</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.discount}</td>
                  <td>{item.startdate}</td>
                  <td>{item.enddate}</td>
                  <td>{item.detail}</td>
                  <td>
                    <Button
                      variant="outline-success"
                      className="mr-3"
                      onClick={handleEditShow}
                    >
                      <i class="bi bi-pencil-fill"></i>
                      Sửa
                    </Button>{" "}
                    <Button variant="outline-danger" onClick={handleDeleteShow}>
                      <i class="bi bi-trash3-fill"></i>Xóa
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <CustomModal
        type="add-catalog"
        show={addShow}
        handleClose={handleAddClose}
      />
      <CustomModal
        type="edit-catalog"
        show={editShow}
        handleClose={handleEditClose}
      />
      <CustomModal
        type="delete-catalog"
        show={deleteShow}
        handleClose={handleDeleteClose}
      />
    </div>
  );
};

export default ManageCoupon;
