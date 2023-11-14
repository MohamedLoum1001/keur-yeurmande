import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './NavBar.css';
import logo from '../../assets/logo.png'; // Importez le chemin de votre image
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [current, setCurrent] = useState('mail');
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div className='container'>
      {/* Logo */}
      <div className='img-logo'>
        <img src={logo} alt="Logo" className="mobile-logo" style={{ display: 'flex', width: '50px', height: '50px' }} />
      </div>
      {/* Bouton toggle pour les petits écrans (mode mobile) */}
      <Button type="primary" onClick={showDrawer} className="drawer-toggle mobile-toggle">
        ☰
      </Button>
      {/* Barre de navigation pour les grands écrans (mode desktop) */}
      <div className="desktop-menu center-menu">
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="Accueil" className="hover-menu-item">
            <Link to="/">Accueil</Link>
          </Menu.Item>
          <Menu.Item key=" Qui sommes-nous ?" className="hover-menu-item">
            Qui sommes-nous ?
          </Menu.Item>
          <Menu.Item key="Programmes" className="hover-menu-item">
            Programmes
          </Menu.Item>
          <Menu.Item key="Demandes" className="hover-menu-item">
            Demandes
          </Menu.Item>
          <Menu.Item key="Galerie" className="hover-menu-item">
            Galerie
          </Menu.Item>
          <Menu.Item key="Contanctez" className="hover-menu-item">
            Contanctez
          </Menu.Item>
        </Menu>
      </div>
      <Button className='btn'>
        Faire un don
      </Button>


      {/* Barre de navigation pour les petits écrans (mode mobile) */}
      <Drawer
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={onClose} icon={<CloseOutlined />} style={{ border: 'none', padding: '0', fontSize: '16px' }} />
            {/* <span style={{ marginLeft: '10px' }}>Menu</span> */}
          </div>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
        headerStyle={{ display: 'block' }} // Pour masquer l'en-tête générée par Ant Design
      >
        <Menu onClick={handleClick} selectedKeys={[current]} mode="vertical">
          <Menu.Item key="Accueil">
            Accueil
          </Menu.Item>
          <Menu.Item key=" Qui sommes-nous ?">
            Qui sommes-nous ?
          </Menu.Item>
          <Menu.Item key="Programmes">
            Programmes
          </Menu.Item>
          <Menu.Item key="Demandes">
            Demandes
          </Menu.Item>
          <Menu.Item key="Galerie">
            Galerie
          </Menu.Item>
          <Menu.Item key="Contanctez">
            Contanctez
          </Menu.Item>
        </Menu>
        <Button className='btn'>
          Faire un don
        </Button>
      </Drawer>

    </div>
  );
}

export default NavBar;
