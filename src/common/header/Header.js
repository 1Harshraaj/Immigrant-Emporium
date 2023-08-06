import './Header.css'
import React, { useState } from 'react';
import { Button, Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Headers() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleOpenMobileMenu = () => {
        setMobileMenuOpen(true);
    };

    const handleCloseMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <Button type="link" size="large" className="navbar-toggle" onClick={handleOpenMobileMenu}>
                        <MenuOutlined />
                    </Button>
                    <div className="logo">Your Logo</div>
                </div>
                <div className="navbar-right">
                    <Button onClick={handleCloseMobileMenu} className="navbar-close-button" />
                    <Menu mode="horizontal" className="navbar-menu">
                        {/* Menu items */}
                    </Menu>
                </div>
            </div>
            <Drawer
                title=""
                placement="top"
                closable={false}
                onClose={handleCloseMobileMenu}
                visible={isMobileMenuOpen}
                className="mobile-menu"
            >
                <Menu mode="vertical">
                    {/* Menu items */}
                </Menu>
            </Drawer>
        </>
    );
};


//     );
// }

export default Headers