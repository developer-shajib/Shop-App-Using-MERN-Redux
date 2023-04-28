import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { GiShoppingBag } from 'react-icons/gi';
import { BiCategoryAlt } from 'react-icons/bi';
import { AiFillTags } from 'react-icons/ai';
import { SiBrandfolder } from 'react-icons/si';
import { FiLogOut } from 'react-icons/fi';
import './Admin.scss';

const Admin = () => {
  return (
    <>
      <section className='admin'>
        <Container className='container-warp' fluid>
          <Row>
            {/* ------ DashBoard Menu Start -------  */}
            <Col md='3' className='menu'>
              <ul>
                <li>
                  <NavLink to='dashboard'>
                    <span>
                      <RxDashboard />
                    </span>
                    <p>DashBoard</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='product'>
                    <span>
                      <GiShoppingBag />
                    </span>
                    <p>Products</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='category'>
                    <span>
                      <BiCategoryAlt />
                    </span>
                    <p> Categories</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='tag'>
                    <span>
                      <AiFillTags />
                    </span>
                    <p> Tags</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='brand'>
                    <span>
                      <SiBrandfolder />
                    </span>
                    <p> Brands</p>
                  </NavLink>
                </li>
              </ul>
              <Link className='logout-btn'>
                <span>
                  <FiLogOut />
                </span>
                <p> Log Out</p>
              </Link>
            </Col>
            {/* ------ DashBoard Menu End ------- */}

            {/* ------ DashBoard Content Start ------- */}
            <Col md='9' className='content'>
              <Outlet />
            </Col>
            {/* ------ DashBoard Content End ------- */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Admin;
