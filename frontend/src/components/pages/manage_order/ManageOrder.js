import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "../../organisms/sidebar/Sidebar";
// import Modal from "../../organisms/modal/Modal";
import "./ManageOrder.scss";
import { Button, Table, Form, Modal } from "react-bootstrap";
import CustomModal from "../../organisms/modal/CustomModal";
// import "bootstrap/dist/css/bootstrap.css";
const DATA = [
  {
    username: "Nguyễn Văn A",
    phone: "0909090990",
    total: "900000 vnđ",
    date: "21/20/1989",
    status: "Đang giao",
  },
  {
    username: "Nguyễn Văn B",
    phone: "0909090990",
    total: "900000 vnđ",
    date: "21/20/1989",
    status: "Đang giao",
  },
  {
    username: "Nguyễn Văn A",
    phone: "0909090990",
    total: "900000 vnđ",
    date: "21/20/1989",
    status: "Đang giao",
  },
  {
    username: "Nguyễn Văn A",
    phone: "0909090990",
    total: "900000 vnđ",
    date: "21/20/1989",
    status: "Đang giao",
  },
  {
    username: "Nguyễn Văn A",
    phone: "0909090990",
    total: "900000 vnđ",
    date: "21/20/1989",
    status: "Đang giao",
  },
  {
    username: "Nguyễn Văn A",
    phone: "0909090990",
    total: "900000 vnđ",
    date: "21/20/1989",
    status: "Đang giao",
  },
];

const ManageOrder = () => {
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
    <div className="manage-order">
      <Sidebar />
      <div className="content">
        <div className="toolbar">
          <h2>QUẢN LÝ ĐƠN HÀNG</h2>
          <Button variant="outline-info" onClick={handleAddShow}>
            <i class="bi bi-plus-lg"></i>
            Thêm
          </Button>{" "}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên KH</th>
              <th>SĐT</th>
              <th>Tỏng tiền</th>
              <th>Ngày tạo</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.phone}</td>
                  <td>{item.total}</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
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

export default ManageOrder;
