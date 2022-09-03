import { Header } from "./index";

// with every react component we always get acess to a special props called children
// basically whenever we call a layout component like this:
//  <Layout></Layout>
// and whatever we put into it that something is going to be displayed into {children}

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
