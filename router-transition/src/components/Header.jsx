import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  const onClickLink = (e, path) => {
    if (path === pathname) return e.preventDefault();
  }

  return (
    <div>
      <Link style={{marginRight: '10px'}} onClick={ (e) => onClickLink(e, '/') } to="/">인덱스</Link>
      <Link style={{marginRight: '10px'}} onClick={ (e) => onClickLink(e, '/admin') } to="/admin">admin</Link>
      <Link style={{marginRight: '10px'}} onClick={ (e) => onClickLink(e, '/faq') } to="/faq">faq</Link>
      <Link style={{marginRight: '10px'}} onClick={ (e) => onClickLink(e, '/qna') } to="/qna">qna</Link>
      <Link style={{marginRight: '10px'}} onClick={ (e) => onClickLink(e, '/member') } to="/member">member</Link>
      <Link style={{marginRight: '10px'}} onClick={ (e) => onClickLink(e, '/notice') } to="/notice">notice</Link>
      <Link onClick={ (e) => onClickLink(e, '/second') } to="/second">second</Link>
    </div>
  )
}

export default Header