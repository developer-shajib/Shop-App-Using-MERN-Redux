import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import './Product.scss';
import { useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { BsFillTrashFill, BsImage } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AdminModal from '../Modal/Modal.jsx';
import styles from './Product.module.scss';
import { useState } from 'react';

const Product = () => {
  const { loading, products, categories, brands, tags } = useSelector((state) => state.shop);
  const [adminModal, setAdminModal] = useState(false);
  const [input, setInput] = useState({
    name: '',
    regular_price: '',
    sale_price: '',
    stock: '',
    short_desc: '',
    long_desc: '',
    photo: null,
    gallery: null,
  });

  const handleGalImg = (e) => {
    const gallery_files = Array.from(e.target.files);
    setInput((prevState) => ({ ...prevState, gallery: gallery_files }));
  };

  return (
    <>
      {/* -------- Create Admin Modal Start -------- */}
      <AdminModal size='lg' title='Add Brand' adminModal={adminModal} setAdminModal={setAdminModal} setInput={setInput}>
        <Form
          className='add-product'
          //    onSubmit={handleCreateFormSubmit}
        >
          <div className='form-wrap'>
            <div className='form-left'>
              <Form.Control
                type='name'
                value={input.name}
                onChange={(e) => setInput((prevState) => ({ ...prevState, name: e.target.value }))}
                placeholder='type brand name'
              />
              <Form.Control
                type='name'
                value={input.regular_price}
                onChange={(e) => setInput((prevState) => ({ ...prevState, regular_price: e.target.value }))}
                placeholder='regular price'
              />{' '}
              <Form.Control
                type='name'
                value={input.sale_price}
                onChange={(e) => setInput((prevState) => ({ ...prevState, sale_price: e.target.value }))}
                placeholder='sale price'
              />{' '}
              <Form.Control
                type='number'
                value={input.stock}
                onChange={(e) => setInput((prevState) => ({ ...prevState, stock: e.target.value }))}
                placeholder='Stock'
              />
              <span>Feature Photo</span>
              <br />
              <label style={{ fontSize: '40px' }} htmlFor='add-file'>
                <BsImage />
              </label>
              <Form.Control
                style={{ display: 'none' }}
                onChange={(e) => setInput((prevState) => ({ ...prevState, photo: e.target.files[0] }))}
                id='add-file'
                type='file'
              />
              {input.photo && (
                <img
                  style={{
                    width: 'auto',
                    height: '160px',
                    textAlign: 'center',
                    display: 'block',
                    marginBottom: '20px',
                  }}
                  src={URL.createObjectURL(input.photo)}
                  alt=''
                />
              )}
            </div>
            <div className='form-right'>
              <Form.Label>Categories</Form.Label>
              {categories?.map((item, index) => {
                return (
                  <label htmlFor='' key={index} className='d-block'>
                    <input value={item._id} type='checkbox' /> {item.name}
                  </label>
                );
              })}
              <Form.Label>Tags</Form.Label>
              {tags?.map((item, index) => {
                return (
                  <label htmlFor='' key={index} className='d-block'>
                    <input value={item._id} type='checkbox' /> {item.name}
                  </label>
                );
              })}
              <Form.Label>Brands</Form.Label>
              <select name='' id='' className='form-control'>
                <option value=''>-select-</option>
                {brands?.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <Form.Control className='mt-4' type='file' multiple onChange={handleGalImg} />
              <div className='gal_wrap d-flex flex-wrap gap-3'>
                {input.gallery &&
                  input.gallery.map((item) => {
                    return (
                      <img
                        style={{
                          width: '60px',
                          height: '60px',
                          textAlign: 'center',
                          display: 'block',
                          marginBottom: '20px',
                        }}
                        src={URL.createObjectURL(item)}
                        alt=''
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          <Button className='add-new-product-btn form-control' type='submit'>
            Add New
          </Button>
        </Form>
      </AdminModal>
      {/* -------- Create Admin Modal End -------- */}

      <section className='product-section'>
        <Container>
          {/* -------- Table Title Section Start -------- */}

          <Row className='t_title d-flex justify-content-between'>
            <Col md='6'>
              <h2>Products</h2>
            </Col>
            <Col md='6' className='d-flex justify-content-end'>
              <Button onClick={() => setAdminModal(true)}>Add New Product</Button>
            </Col>
          </Row>
          {/* -------- Table Title Section End -------- */}

          {/* -------- Table  Start -------- */}
          <Row>
            <Col md='12' className='pt-5'>
              <Table className='table-wrap' striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Photo</th>
                    <th>Category</th>
                    <th>Tag</th>
                    <th>Brand</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.reverse().map((item, index) => {
                    return (
                      <tr className='align-middle' key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          {item.sale_price ? (
                            <>
                              <del>{item.sale_price}</del>&nbsp;/&nbsp;
                              <span>{item.regular_price}</span>
                            </>
                          ) : (
                            <span>{item.regular_price}</span>
                          )}
                        </td>
                        <td>
                          {item.photo ? (
                            <img
                              style={{ width: '40px', height: '40px' }}
                              src={`http://localhost:5050/image/productImg/${item.photo}`}
                              alt=''
                            />
                          ) : (
                            <p
                              style={{
                                marginBottom: '0',
                                height: '40px',
                                width: '40px',
                                background: 'var(--primary-color)',
                                fontSize: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              empty
                            </p>
                          )}
                        </td>
                        <td>Category</td>
                        <td>tag</td>
                        <td>brand</td>
                        <td className='status' style={{ display: 'flex', alignItems: 'center' }}>
                          <Form.Check
                            onClick={() => handleStatusBtn(item.status, item._id)}
                            checked={item.status == true ? true : false}
                            type='switch'
                            id='custom-switch'
                          />
                          {item.status ? (
                            <p style={{ color: 'green', width: '40px' }}>Published</p>
                          ) : (
                            <p style={{ color: 'red', width: '40px' }}>Unpublished</p>
                          )}
                        </td>
                        <td>
                          <Button onClick={() => handleUpdateBtn(item._id)} className='edit-btn'>
                            <FiEdit />
                          </Button>
                          &nbsp;&nbsp;
                          <Button onClick={() => handleDeleteBtn(item._id)} className='delete-btn'>
                            <BsFillTrashFill />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
          {/* -------- Table  End -------- */}
        </Container>
      </section>
    </>
  );
};

export default Product;
