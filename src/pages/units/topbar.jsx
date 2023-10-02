import React, { useContext } from "react";
import { ThemeModeContext, token } from "../../theme_mode";
import { Box, useTheme, IconButton } from "@mui/material";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationOutLinedIcon from "@mui/icons-material/NotificationOutlined";
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Topbar = () => {
  const themeMode = useContext(ThemeModeContext);
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box>
      <Box>
        <InputBase />
      </Box>
    </Box>
  );
};

export default Topbar;
