import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "../../organisms/sidebar/Sidebar";
// import Modal from "../../organisms/modal/Modal";
import "./ManageCatalog.scss";
import { Button, Table, Form, Modal } from "react-bootstrap";
import CustomModal from "../../organisms/modal/CustomModal";
import Toolbar from "../../organisms/toolbar/Toolbar";

const DATA = [
  {
    name: "bút chì",
    type: "bút",
  },
  {
    name: "viết mực",
    type: "viết",
  },
  {
    name: "thước kẻ dẻo",
    type: "thước",
  },
  {
    name: "dây thun",
    type: "dây",
  },
  {
    name: "bình đựng nước",
    type: "đồ gia dụng",
  },
  {
    name: "chảo chống dính",
    type: "đồ dùng bếp",
  },
];

const ManageCatalog = () => {
  // const [modalOpen, setModalOpen] = useState(false);
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
    <div className="manage-catalog">
      <Sidebar />
      <div className="content">
        <Toolbar
          name="QUẢN LÝ DANH MỤC"
          handleAddShow={handleAddShow}
        ></Toolbar>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên danh mục</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
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

export default ManageCatalog;
