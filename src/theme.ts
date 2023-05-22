import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { dark } from "@mui/material/styles/createPalette";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}
const theme = extendTheme({ config })
export default theme;