import { Header, HeaderNav, NavigationLink } from './NavigationBar.styled';

export default function NavigationBar() {
  return (
    <Header>
      <div className="container">
        <HeaderNav>
          <NavigationLink to="/" end>
            Home
          </NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </HeaderNav>
      </div>
    </Header>
  );
}
