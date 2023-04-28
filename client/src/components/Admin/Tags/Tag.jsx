import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { BsImage } from 'react-icons/bs';
import { useState } from 'react';
import './Tags.scss';
import AdminModal from '../Modal/Modal.jsx';
import {
  createTags,
  deleteSingleTag,
  updateSingleTag,
  updateSingleTagStatus,
} from '../../../redux/Shop/Action/TagAction.jsx';

const Tag = () => {
  const dispatch = useDispatch();
  const [adminModal, setAdminModal] = useState(false);
  const [input, setInput] = useState({
    name: '',
    image: null,
  });
  const [edit, setEdit] = useState({
    updateId: '',
    editModal: false,
  });

  // Get Brands Data from state
  const { tags } = useSelector((state) => state.shop);

  // Handle Create Form Submit
  const handleCreateFormSubmit = (e) => {
    e.preventDefault();

    dispatch(createTags({ name: input.name, setInput, setAdminModal }));
  };

  // handler for Delete
  const handleDeleteBtn = (id) => {
    dispatch(deleteSingleTag(id));
  };

  // handler for Update
  const handleUpdateBtn = (id) => {
    const data = tags.find((item) => item._id == id);

    setInput((prevState) => ({ ...prevState, name: data.name }));
    setEdit((prevState) => ({ ...prevState, updateId: id, editModal: true }));
  };

  // Handle Update Form Submit
  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();

    dispatch(updateSingleTag({ name: input.name, id: edit.updateId, setEdit, setInput }));
  };

  // Handle Status
  const handleStatusBtn = (status, id) => {
    const data = tags.find((item) => item._id == id);

    dispatch(updateSingleTagStatus({ data: { name: data.name, status: !status }, id }));
  };

  return (
    <section className='tag-section'>
      {/* -------- Update Admin Modal Start -------- */}
      <AdminModal title='Update Brand' adminModal={edit.editModal} setAdminModal={setEdit} setInput={setInput}>
        <Form className='add-modal' onSubmit={handleUpdateFormSubmit}>
          <Form.Control
            type='name'
            value={input.name}
            onChange={(e) => setInput((prevState) => ({ ...prevState, name: e.target.value }))}
            placeholder='type brand name'
          />

          <Button className='form-control' type='submit'>
            Update Now
          </Button>
        </Form>
      </AdminModal>
      {/* -------- Update Admin Modal End -------- */}

      {/* -------- Create Admin Modal Start -------- */}
      <AdminModal title='Add Tag' adminModal={adminModal} setAdminModal={setAdminModal} setInput={setInput}>
        <Form className='add-modal' onSubmit={handleCreateFormSubmit}>
          <Form.Control
            type='name'
            value={input.name}
            onChange={(e) => setInput((prevState) => ({ ...prevState, name: e.target.value }))}
            placeholder='type tag name'
          />

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
            <h2>Tags</h2>
          </Col>
          <Col md='6' className='d-flex justify-content-end'>
            <Button onClick={() => setAdminModal(true)}>Add New Tag</Button>
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
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tags?.reverse().map((item, index) => {
                  return (
                    <tr className='align-middle' key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>

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

export default Tag;
