import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ textColor = "text-headingColor" }) => {
  // Default color is text-headingColor
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-lg py-4">
      <ul className="flex items-center space-x-2">
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className={`text-lg font-medium ${
              location.pathname === "/" ? "text-buttonColor" : textColor // Use dynamic color here
            }`}
          >
            Home
          </Link>
        </li>

        {/* Dynamically generated breadcrumb links */}
        {pathnames.map((value, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="flex gap-1 items-center">
              {/* Separator with dynamic color */}
              <span
                className={`text-lg ${
                  location.pathname === routeTo ? "text-buttonColor" : textColor
                }`}
              >
                /
              </span>
              {isLast ? (
                <span className={`text-buttonColor capitalize`}>
                  {value.replace("-", " ")}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className={`text-lg font-normal ${
                    location.pathname === routeTo
                      ? "text-buttonColor"
                      : textColor // Use dynamic color here
                  }`}
                >
                  {value.replace("-", " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
