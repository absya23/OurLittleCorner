import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "../../organisms/sidebar/Sidebar";
// import Modal from "../../organisms/modal/Modal";
import "./ManageProduct.scss";
import { Button, Table, Form, Modal } from "react-bootstrap";
import CustomModal from "../../organisms/modal/CustomModal";
import Toolbar from "../../organisms/toolbar/Toolbar";

const DATA = [
  {
    name: "bút chì",
    type: "bút",
    price: "3000 vnđ",
    image: "",
    description: "Bút viết ra mực",
    sold: "100",
    left: "50",
  },
  {
    name: "bút chì",
    type: "bút",
    price: "3000 vnđ",
    image: "",
    description: "Bút viết ra mực",
    sold: "100",
    left: "50",
  },
  {
    name: "bút chì",
    type: "bút",
    price: "3000 vnđ",
    image: "",
    description: "Bút viết ra mực",
    sold: "100",
    left: "50",
  },
  {
    name: "bút chì",
    type: "bút",
    price: "3000 vnđ",
    image: "",
    description: "Bút viết ra mực",
    sold: "100",
    left: "50",
  },
  {
    name: "bút chì",
    type: "bút",
    price: "3000 vnđ",
    image: "",
    description: "Bút viết ra mực",
    sold: "100",
    left: "50",
  },
  {
    name: "bút chì",
    type: "bút",
    price: "3000 vnđ",
    image: "",
    description: "Bút viết ra mực",
    sold: "100",
    left: "50",
  },
];
const ManageProduct = () => {
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
    <div className="manage-product">
      <Sidebar />
      <div className="content">
        <Toolbar
          name="QUẢN LÝ SẢN PHẨM"
          handleAddShow={handleAddShow}
        ></Toolbar>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Loại sản phẩm</th>
              <th>Giá</th>
              <th>Ảnh</th>
              <th>Mô tả</th>
              <th>Còn lại</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                  <td>{item.image}</td>
                  <td>{item.description}</td>
                  <td>{item.left}</td>
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
        type="add-product"
        show={addShow}
        handleClose={handleAddClose}
      />
      <CustomModal
        type="edit-product"
        show={editShow}
        handleClose={handleEditClose}
      />
      <CustomModal
        type="delete-product"
        show={deleteShow}
        handleClose={handleDeleteClose}
      />
    </div>
  );
};

export default ManageProduct;
