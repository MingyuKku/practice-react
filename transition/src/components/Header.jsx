import React from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to="/">인덱스</NavLink> <br/>
      <NavLink to="/admin">어드민</NavLink>  <br/>
      <NavLink to="/admin/faq">faq</NavLink> <br/>
      <NavLink to="/admin/notice">notice</NavLink> <br/>
      <NavLink to="/admin/qna">qna</NavLink> <br/>
      <NavLink to="/admin/member">member</NavLink> <br/>
    </div>
  )
}

export default Header