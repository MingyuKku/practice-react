import { Link } from 'react-router-dom';
import routes from '../routes';

const Header = () => {
  return (
    <div className='common-header'>
      {routes.map(route => (
        <Link key={ route.name } to={ route.path }>{ route.name }</Link>
      ))}
    </div>
  )
}

export default Header