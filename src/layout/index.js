import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import HeaderAppBar from "./Header";
import SidebarDrawer from "./Sidebar";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    backgroundColor: "#2196F3",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  contentNoPadding: {
    flexGrow: 1
  }
}));

export const Layout = ({ container, children, app }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderAppBar onDrawerToggle={handleDrawerToggle} classes={classes} />
      <SidebarDrawer
        mobileOpen={mobileOpen}
        container={container}
        theme={theme}
        classes={classes}
        onDrawerToggle={handleDrawerToggle}
      />
      <main className={app.padded ? classes.content : classes.contentNoPadding}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    app: state.app
  };
}

export default connect(mapStateToProps)(Layout);
