import React, { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "../../organisms/sidebar/Sidebar";
// import Modal from "../../organisms/modal/Modal";
import "./ManageOrder.scss";
import { Button, Table, Form, Modal } from "react-bootstrap";
import CustomModal from "../../organisms/modal/CustomModal";
import Toolbar from "../../organisms/toolbar/Toolbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HandlingStatus = ({ id_order, id_status, dataArr, setDataArr }) => {
  const changeStatus = (id_order, id_status) => {
    axios
      .put("http://localhost:8000/api/orders/" + id_order, {
        id_status: String(1 + id_status),
      })
      .then((res) => {
        dataArr.find((item) => item.id_order == id_order).id_status = String(
          1 + id_status
        );
        setDataArr(dataArr);
        alert("Đổi trạng thái đơn hàng thành công");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelOrder = (id_order) => {
    axios
      .put("http://localhost:8000/api/orders/" + id_order, {
        id_status: "4",
      })
      .then((res) => {
        dataArr.find((item) => item.id_order == id_order).id_status = "4";
        setDataArr(dataArr);
        alert("Hủy đơn hàng thành công");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  switch (id_status) {
    case 1:
      return (
        <>
          <Button
            variant="outline-success"
            className="mr-3"
            onClick={() => changeStatus(id_order, id_status)}
          >
            <i class="bi bi-pencil-fill"></i>
            Xác nhận
          </Button>{" "}
          <Button
            variant="outline-danger"
            onClick={() => cancelOrder(id_order)}
          >
            <i class="bi bi-trash3-fill"></i>Hủy đơn
          </Button>{" "}
        </>
      );
    case 2:
      return (
        <>
          <Button
            variant="outline-success"
            className="mr-3"
            onClick={() => changeStatus(id_order, id_status)}
          >
            <i class="bi bi-pencil-fill"></i>
            Đã giao
          </Button>{" "}
          <Button
            variant="outline-danger"
            onClick={() => cancelOrder(id_order)}
          >
            <i class="bi bi-trash3-fill"></i>Hủy đơn
          </Button>{" "}
        </>
      );
    case 3:
      return <>Đã giao</>;
    case 4:
      return <>Đã hủy</>;
    default:
      return <></>;
  }
};

const ManageOrder = () => {
  let navigate = useNavigate();

  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [dataArr, setDataArr] = useState([]);
  const [userArr, setUserArr] = useState([]);

  const handleAddClose = () => setAddShow(false);
  const handleEditClose = () => setEditShow(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const handleAddShow = () => setAddShow(true);
  // const handleEditShow = () => setEditShow(true);
  // const handleDeleteShow = () => setDeleteShow(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user")
      .then((res) => {
        // console.log(res.data);
        setUserArr(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8000/api/orders")
      .then((res) => {
        // console.log(res.data);
        setDataArr(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="manage-order">
      <Sidebar />
      <div className="content">
        <Toolbar
          name="QUẢN LÝ ĐƠN HÀNG"
          handleAddShow={handleAddShow}
          type="no-add"
        ></Toolbar>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên KH</th>
              <th>SĐT</th>
              <th>Tổng tiền</th>
              <th>Ngày tạo</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {dataArr.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    {userArr.find((el) => el.id_user === item.id_user)
                      ? userArr.find((el) => el.id_user === item.id_user).name
                      : "Khác"}
                  </td>
                  <td>
                    {" "}
                    {userArr.find((el) => el.id_user === item.id_user)
                      ? userArr.find((el) => el.id_user === item.id_user).phone
                      : "Khác"}
                  </td>
                  <td>{item.total}</td>
                  <td>{item.created_at}</td>
                  <td>
                    {
                      <HandlingStatus
                        id_status={item.id_status}
                        id_order={item.id_order}
                        dataArr={dataArr}
                        setDataArr={setDataArr}
                      />
                    }
                  </td>
                  <td>
                    <Button
                      variant="outline-info"
                      className="mr-3"
                      onClick={() => {
                        //chuyển qua trang info

                        navigate(`/admin/manage-order/${item.id_order}`);
                      }}
                    >
                      <i class="bi bi-pencil-fill"></i>
                      Xem chi tiết
                    </Button>
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
        type="delete-order"
        show={deleteShow}
        handleClose={handleDeleteClose}
      />
    </div>
  );
};

export default ManageOrder;
