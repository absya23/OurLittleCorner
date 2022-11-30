import React, { useState } from "react";
import "./modal.scss";
import { Button, Table, Form, Modal } from "react-bootstrap";

function CustomModal({ type, show, handleClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  switch (type) {
    //Thêm danh mục
    case "add-catalog":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm danh mục</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên danh mục</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên danh mục..."
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Thêm
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Sửa danh mục
    case "edit-catalog":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sửa danh mục</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên danh mục</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên danh mục..."
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Xóa danh mục
    case "delete-catalog":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa danh mục</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc xóa?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Thêm loại sản phẩm
    case "add-product-type":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm loại sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên loại sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên loại sản phẩm..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Danh mục</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên danh mục..."
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Thêm
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Sửa loại sản phẩm
    case "edit-product-type":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sửa loại sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên loại sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên loại sản phẩm..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Danh mục</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập danh mục..."
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Xóa loại sản phẩm
    case "delete-product-type":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa loại sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc xóa?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Thêm sản phẩm
    case "add-product":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập danh mục..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Loại sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập loại sản phẩm..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Giá</Form.Label>
                <Form.Control type="text" placeholder="Nhập giá..." autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Ảnh</Form.Label>
                <Form.Control type="text" placeholder="Nhập ảnh..." autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Mô tả</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Sửa sản phẩm
    case "edit-product":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập danh mục..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Loại sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập loại sản phẩm..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Giá</Form.Label>
                <Form.Control type="text" placeholder="Nhập giá..." autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Ảnh</Form.Label>
                <Form.Control type="text" placeholder="Nhập ảnh..." autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Mô tả</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Xóa sản phẩm
    case "delete-product":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc xóa?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Xóa đơn hàng
    case "delete-order":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa đơn hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc xóa?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Thêm slide
    case "add-slide":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm slide</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Ảnh</Form.Label>
                {selectedImage && (
                  <div>
                    <img
                      alt="not fount"
                      width={"250px"}
                      src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                  </div>
                )}
                <Form.Control
                  type="file"
                  // multiple
                  placeholder="Nhập ảnh..."
                  autoFocus
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                />
                <button onClick={() => setSelectedImage(null)}>Remove</button>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên slide</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên danh mục..."
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Thêm
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Sửa slide
    case "edit-slide":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sửa slide</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Ảnh</Form.Label>
                <Form.Control type="text" placeholder="Nhập ảnh..." autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên slide</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên danh mục..."
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      );
    //Xóa slide
    case "delete-slide":
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa slide</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc xóa?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      );
  }
}
export default CustomModal;
