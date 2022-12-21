import React, { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "../../organisms/sidebar/Sidebar";
// import Modal from "../../organisms/modal/Modal";
import "./ManageProduct.scss";
import { Button, Table, Form, Modal } from "react-bootstrap";
import CustomModal from "../../organisms/modal/CustomModal";
import Toolbar from "../../organisms/toolbar/Toolbar";
import axios from "axios";

const ManageProduct = () => {
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [dataArr, setDataArr] = useState([]);
  const [catArr, setCatArr] = useState([]);
  const [typeArr, setTypeArr] = useState([]);
  const [idToEdit, SetIdToEdit] = useState("");
  const [idToDelete, SetIdToDelete] = useState("");

  //tắt modal
  const handleAddClose = () => setAddShow(false);
  const handleEditClose = () => setEditShow(false);
  const handleDeleteClose = () => setDeleteShow(false);

  //hiển thị modal
  const handleAddShow = () => setAddShow(true);
  const handleEditShow = (id) => {
    setEditShow(true);
    SetIdToEdit(id);
  };
  const handleDeleteShow = (id) => {
    setDeleteShow(true);
    SetIdToDelete(id);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/types")
      .then((res) => {
        // console.log(res.data);
        setTypeArr(res.data.filter((item) => item.del_flag == 0));
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        // console.log(res.data);
        setDataArr(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
              {/* <th>Mô tả</th> */}
              <th>Còn lại</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {dataArr
              .filter((item) => item.del_flag == 0)
              .map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      {typeArr.find((el) => el.id_type === item.id_type)
                        ? typeArr.find((el) => el.id_type === item.id_type).name
                        : "Khác"}
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <img src={item.image} width="100px" />
                    </td>
                    {/* <td>{item.description}</td> */}
                    <td>{item.quantity}</td>
                    <td>
                      <Button
                        variant="outline-success"
                        className="mr-3"
                        onClick={() => handleEditShow(item.id_prod)}
                      >
                        <i class="bi bi-pencil-fill"></i>
                        Sửa
                      </Button>{" "}
                      <Button
                        variant="outline-danger"
                        onClick={() => handleDeleteShow(item.id_prod)}
                      >
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
        dataArr={dataArr}
      />
      <CustomModal
        type="edit-product"
        show={editShow}
        handleClose={handleEditClose}
        id_prod={idToEdit}
        dataArr={dataArr}
      />
      <CustomModal
        type="delete-product"
        show={deleteShow}
        handleClose={handleDeleteClose}
        id_prod={idToDelete}
        dataArr={dataArr}
      />
    </div>
  );
};

export default ManageProduct;
