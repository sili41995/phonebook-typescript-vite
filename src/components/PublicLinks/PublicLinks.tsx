import { NavLink } from 'react-router-dom';
import { PagePaths } from '@/constants';
import { List, ListItem } from './PublicLinks.styled';

const PublicLinks = () => {
  const signUpPagePath = `/${PagePaths.signUpPath}`;
  const signInPagePath = `/${PagePaths.signInPath}`;

  return (
    <List>
      <ListItem>
        <NavLink to={signUpPagePath}>Sign up</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={signInPagePath}>Sign in</NavLink>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
