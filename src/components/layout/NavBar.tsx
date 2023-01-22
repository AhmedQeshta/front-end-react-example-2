import { IMAGES } from '../../utils/constants';
import { Input } from '../ui';
import '../../assets/styles/navBar.css';
import { NavbarLinks, SocialMedia } from '../navBar';
import { useCallback, useEffect, useState } from 'react';
import { useNavBar } from '../../hooks/useNavBar';

export const NavBar = () => {
  const { isMobile, isShowMobile, setIsShowMobile } = useNavBar();

  const handleShowMobile = useCallback(() => {
    setIsShowMobile((prev) => !prev);
  }, [setIsShowMobile]);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={IMAGES.LOGO} alt="logo" />
      </div>

      {!isMobile ? (
        <div className="navbar-others">
          <NavbarLinks />
          <div className="search-container">
            <Input type="search" placeholder="Search" className="search-input" />
          </div>
          <SocialMedia />
        </div>
      ) : (
        <button className="nav-bar-burger" onClick={handleShowMobile}>
          <img src={IMAGES.Bar} alt="burger" />
        </button>
      )}

      {isShowMobile && (
        <div className="mobile">
          <button className="nav-bar-close" onClick={handleShowMobile}>
            <img src={IMAGES.Close} alt="burger" />
          </button>
          <NavbarLinks />
          <div className="search-container">
            <Input type="search" placeholder="Search" className="search-input" />
          </div>
          <SocialMedia />
        </div>
      )}
    </nav>
  );
};
