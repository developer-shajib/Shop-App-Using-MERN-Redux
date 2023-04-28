import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { BsFillTrashFill } from 'react-icons/bs';
import { useState } from 'react';
import { BsImage } from 'react-icons/bs';
import AdminModal from '../Modal/Modal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import './Brand.scss';
import {
  createBrands,
  deleteSingleBrand,
  updateSingleBrand,
  updateSingleBrandStatus,
} from '../../../redux/Shop/Action/BrandAction.jsx';

const Brand = () => {
  const dispatch = useDispatch();
  const [adminModal, setAdminModal] = useState(false);
  const [input, setInput] = useState({
    name: '',
    image: null,
  });
  const [edit, setEdit] = useState({
    updateId: '',
    dataBaseImage: '',
    editModal: false,
  });

  // Get Brands Data from state
  const { brands } = useSelector((state) => state.shop);

  // Handle Create Form Submit
  const handleCreateFormSubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append('name', input.name);
    input.image && form_data.append('brand-photo', input.image);

    dispatch(createBrands({ data: form_data, setInput, setAdminModal }));
  };

  // handler for Delete
  const handleDeleteBtn = (id) => {
    dispatch(deleteSingleBrand(id));
  };

  // handler for Update
  const handleUpdateBtn = (id) => {
    const data = brands.find((item) => item._id == id);

    setInput((prevState) => ({ ...prevState, name: data.name }));
    setEdit((prevState) => ({ ...prevState, updateId: id, dataBaseImage: data.photo, editModal: true }));
  };

  // Handle Update Form Submit
  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append('name', input.name);
    input.image && form_data.append('brand-photo', input.image);

    dispatch(updateSingleBrand({ data: form_data, id: edit.updateId, setEdit, setInput }));
  };

  // Handle Status
  const handleStatusBtn = (status, id) => {
    const data = brands.find((item) => item._id == id);
    const form_data = new FormData();
    form_data.append('name', data.name);
    form_data.append('status', !status);
    dispatch(updateSingleBrandStatus({ data: form_data, id }));
  };

  return (
    <section className='brand-section'>
      {/* -------- Update Admin Modal Start -------- */}
      <AdminModal title='Update Brand' adminModal={edit.editModal} setAdminModal={setEdit} setInput={setInput}>
        <Form className='add-modal' onSubmit={handleUpdateFormSubmit}>
          <Form.Control
            type='name'
            value={input.name}
            onChange={(e) => setInput((prevState) => ({ ...prevState, name: e.target.value }))}
            placeholder='type brand name'
          />
          <label htmlFor='add-file'>
            <BsImage />
          </label>
          <Form.Control
            onChange={(e) => setInput((prevState) => ({ ...prevState, image: e.target.files[0] }))}
            id='add-file'
            type='file'
          />

          {input.image ? (
            <img
              style={{ width: 'auto', height: '200px', textAlign: 'center', display: 'block', marginBottom: '20px' }}
              src={URL.createObjectURL(input.image)}
              alt=''
            />
          ) : edit.dataBaseImage ? (
            <img
              style={{ width: 'auto', height: '200px', textAlign: 'center', display: 'block', marginBottom: '20px' }}
              src={`http://localhost:5050/image/brand/${edit.dataBaseImage}`}
              alt=''
            />
          ) : null}
          <Button className='form-control' type='submit'>
            Update Now
          </Button>
        </Form>
      </AdminModal>
      {/* -------- Update Admin Modal End -------- */}

      {/* -------- Create Admin Modal Start -------- */}
      <AdminModal title='Add Brand' adminModal={adminModal} setAdminModal={setAdminModal} setInput={setInput}>
        <Form className='add-modal' onSubmit={handleCreateFormSubmit}>
          <Form.Control
            type='name'
            value={input.name}
            onChange={(e) => setInput((prevState) => ({ ...prevState, name: e.target.value }))}
            placeholder='type brand name'
          />
          <label htmlFor='add-file'>
            <BsImage />
          </label>
          <Form.Control
            onChange={(e) => setInput((prevState) => ({ ...prevState, image: e.target.files[0] }))}
            id='add-file'
            type='file'
          />

          {input.image && (
            <img
              style={{ width: 'auto', height: '200px', textAlign: 'center', display: 'block', marginBottom: '20px' }}
              src={URL.createObjectURL(input.image)}
              alt=''
            />
          )}
          <Button className='form-control' type='submit'>
            Add New
          </Button>
        </Form>
      </AdminModal>
      {/* -------- Create Admin Modal End -------- */}

      <Container>
        {/* -------- Table Title Section Start -------- */}
        <Row className='t-title d-flex justify-content-between'>
          <Col md='6'>
            <h2>Brand</h2>
          </Col>
          <Col md='6' className='d-flex justify-content-end'>
            <Button onClick={() => setAdminModal(true)}>Add New Brand</Button>
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
                  <th>Photo</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {brands?.reverse().map((item, index) => {
                  return (
                    <tr className='align-middle' key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        {item.photo ? (
                          <img
                            style={{ width: '40px', height: '40px' }}
                            src={`http://localhost:5050/image/brand/${item.photo}`}
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
  );
};

export default Brand;
