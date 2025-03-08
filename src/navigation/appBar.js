import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { login, logout } from "../firebase/buttons";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [user] = useAuthState(auth);
  const profile = user?.providerData[0];
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link to={"/home"}>
                <Button variant="text" color="info" size="small">
                  Home
                </Button>
              </Link>
              <Link to={"/images"}>
                <Button variant="text" color="info" size="small">
                  Images
                </Button>
              </Link>
              <Link to={"/videos"}>
                <Button variant="text" color="info" size="small">
                  Videos
                </Button>
              </Link>
              <Link to={"/search"}>
                <Button variant="text" color="info" size="small">
                  Search
                </Button>
              </Link>
              <Link to={"/favorites"}>
                <Button variant="text" color="info" size="small">
                  Favorites
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {user ? (
              <>
                <Link to={"/profile"}>
                  <Tooltip title={profile.displayName}>
                    {" "}
                    <Avatar alt={profile.displayName} src={profile.photoURL} />
                  </Tooltip>
                </Link>
                <Button
                  onClick={logout}
                  color="primary"
                  variant="text"
                  size="small"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={login}
                color="primary"
                variant="contained"
                size="small"
              >
                Sign in
              </Button>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Link to={"/home"}>
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link to={"/images"}>
                  <MenuItem>Images</MenuItem>
                </Link>
                <Link to={"/videos"}>
                  <MenuItem>Videos</MenuItem>
                </Link>
                <Link to={"/search"}>
                  <MenuItem>Search</MenuItem>
                </Link>
                <Link to={"/favorites"}>
                  <MenuItem>Favorites</MenuItem>
                </Link>
                <Divider sx={{ my: 3 }} />
                {user ? (
                  <MenuItem>
                    <Link to={"/profile"}>
                      <Tooltip title={profile.displayName}>
                        <Avatar
                          alt={profile.displayName}
                          src={profile.photoURL}
                        />
                      </Tooltip>
                    </Link>
                    <Button
                      onClick={logout}
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      Logout
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <Button
                      onclick={login}
                      color="primary"
                      variant="outlined"
                      fullWidth
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                )}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
