import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import MailIcon from "@material-ui/icons/Mail";

const textColor = {
  fontWeight: 700,
};

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText
          primary={primary}
          primaryTypographyProps={{ style: textColor }}
        />
      </ListItem>
    </li>
  );
}

const MainNavItems = () => {
  const navLinks = [
    {
      linkText: "Home",
      linkPath: "/",
      icon: <MailIcon />,
    },
    {
      linkText: "About",
      linkPath: "/about",
      icon: <MailIcon />,
    },
  ];

  return (
    <List>
      {navLinks.map((navLink) => {
        return (
          <ListItemLink
            to={navLink.linkPath}
            primary={navLink.linkText}
            icon={navLink.icon}
          />
        );
      })}
    </List>
  );
};

export default MainNavItems;
