import Auth from './util/Auth';
import { Redirect } from 'react-router-dom';

function Exit(){
  Auth.signout();
  return (
    <Redirect to="/login"/>
  )
}

export default Exit;