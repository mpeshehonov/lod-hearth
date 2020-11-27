import React from 'react';
import {Layout, Menu, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {UserOutlined} from '@ant-design/icons';
import './Header.scss';

const Header = () => {
  return (
    <Layout.Header className="header site-layout-background">
      <div className="logo">Сердце</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Пациенты</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/redactor">Редактор</Link>
        </Menu.Item>
      </Menu>
      <div className="user">
        <Avatar icon={<UserOutlined />} />
        &nbsp;
        Максим
      </div>
    </Layout.Header>
  );
};

export default Header;
