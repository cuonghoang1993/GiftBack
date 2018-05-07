import React, { Component } from 'react';

class AsideMenu extends Component {
  render() {
    return (
      <div className='m-grid__item m-aside-left m-aside-left--skin-dark'>
        <button className='m-aside-left-close m-aside-left-close--skin-dark'>
          <i className='la la-close' />
        </button>
        <div className='m-grid__item	m-aside-left m-aside-left--skin-dark'>
          <div className='m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark'>
            <ul className='m-menu__nav m-menu__nav--dropdown-submenu-arrow'>
              <li className="m-menu__section">
                <h4 className="m-menu__section-text">Danh sách</h4>
                <i className="m-menu__section-icon flaticon-more-v3"></i>
              </li>
              <li className='m-menu__item'>
                <a className='m-menu__link'>
                  <i className='m-menu--link-icon flaticon-layers'></i>
                  <span className='m-menu__link-text'>Danh mục quà tặng</span>
                </a>
              </li>
              <li className='m-menu__item'>
                <a className='m-menu__link'>
                  <i className='m-menu--link-icon flaticon-layers'></i>
                  <span className='m-menu__link-text'>Danh sách đối tác</span>
                </a>
              </li>
              <li className='m-menu__item'>
                <a className='m-menu__link'>
                  <i className='m-menu--link-icon flaticon-layers'></i>
                  <span className='m-menu__link-text'>Danh sách quà đã đổi</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AsideMenu;
