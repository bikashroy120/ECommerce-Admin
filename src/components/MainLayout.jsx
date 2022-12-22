import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {Outlet} from "react-router-dom"
import {AiOutlineDashboard, AiOutlineUser} from "react-icons/ai"
import {FaCartArrowDown} from "react-icons/fa"
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const naviget = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({key})=>{
            if(key==="signout"){

            }else{
              naviget(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashborad',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser />,
              label: 'Customers',
            },
            {
              key: 'Catalog',
              icon: <FaCartArrowDown/>,
              label: 'Catalog',
              children:[
                {
                  key:"product",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Add Product"
                },
                {
                  key:"product-list",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Product List"
                },
                {
                  key:"brand",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Add Drand"
                },
                {
                  key:"brand-list",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Drand List"
                },
                {
                  key:"category",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Add category"
                },
                {
                  key:"category-list",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Category List"
                },
                {
                  key:"color",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Add Color"
                },
                {
                  key:"color-list",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Color List"
                },
              ],
            },
            {
              key: 'orders',
              icon: <AiOutlineUser />,
              label: 'Orders',
            },
            {
              key: 'Blog',
              icon: <FaCartArrowDown/>,
              label: 'Blog',
              children:[
                {
                  key:"blog",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Add Blog"
                },
                {
                  key:"blog-list",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Blog List"
                },
                {
                  key:"blog-category",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Add Blog Category"
                },
                {
                  key:"blog-category-list",
                  icon: <AiOutlineDashboard className='fs-4' />,
                  label:"Blog Category List"
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: "#eee"
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: "#eee"
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;