import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import globalStyle from "~/styles/global.css";

export function meta() {
  return {
    title: "Remix Blog",
    description: "Cool blog built with remix",
    keywords: "remix, react, javascript",
  };
}

export const links = () => [{ rel: "stylesheet", href: globalStyle }];

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

const Document = ({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
};

export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
}
