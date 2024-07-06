import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  if (pathnames.length === 0) {
    // If the current route is the home route ('/'), do not render the breadcrumbs
    return null;
  }

  return (
    <div className="breadcrumbs text-white p-2 bg-slate-950 w-fit rounded-br-md">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        // console.log(pathnames, breadcrumbPath);

        return isLast ? (
          <span key={breadcrumbPath}> &gt; {name}</span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            &gt; <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
