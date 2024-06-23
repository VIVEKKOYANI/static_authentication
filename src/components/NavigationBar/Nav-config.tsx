import { useDispatch } from "react-redux";
import { PATH_AUTH, PATH_DASHBOARD } from "../../routes/paths";
import { logout } from "../../redux/slices/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import constants from "../../utils/constants";

const NavConfig = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate(`${PATH_AUTH.login}`);
  };

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  const navConfigMenu = [
    {
      name: `${constants.menus.dashboard}`,
      href: `${PATH_DASHBOARD.root}`,
      access: ["superadmin", "employee"],
    },
    {
      name: `${constants.menus.workspace}`,
      href: `${PATH_DASHBOARD.workspace.root}`,
      access: ["superadmin"],
    },
    {
      name: `${constants.menus.employee}`,
      href: `${PATH_DASHBOARD.employee.root}`,
      access: ["superadmin", "workspace"],
    },
  ];

  const userNavigation = [
    { name: `${constants.menus.yourProfile}`, href: `${PATH_DASHBOARD.profile.root}` },
    { name: `${constants.menus.signOut}`, href: `${PATH_AUTH.login}`, onclick: handleLogout  },
  ];

  return {
    navConfigMenu,
    userNavigation,
    classNames,
    pathname
  };
};

export default NavConfig;