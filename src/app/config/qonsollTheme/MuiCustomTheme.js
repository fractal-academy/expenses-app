import { createMuiTheme } from '@material-ui/core'
import Colors from './core/colors'
import BorderRadiuses from './core/borderRadiuses.js'
import { fontFamilies, fontSizes, fontWeights, lineHeights } from './core'
import { formConfigurator } from 'mui-form-generator-fractal-band-2'

const MuiCustomTheme = createMuiTheme({
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    primary: {
      light: Colors.primary.lighten[3],
      main: Colors.primary.main,
      dark: Colors.primary.darken[3],
      contrastText: Colors.primary.accent
    },
    background: {
      paper: '#2c2c34'
    },
    grey: {
      50: Colors.grey[1],
      100: Colors.grey[2],
      200: Colors.grey[3],
      300: Colors.grey[4],
      400: Colors.grey[5],
      500: Colors.grey[6],
      600: Colors.grey[7],
      700: Colors.grey[8],
      800: Colors.grey[9],
      900: Colors.grey[10],
      A100: Colors.grey[11],
      A200: Colors.grey[12],
      A400: Colors.grey[13],
      A700: Colors.grey[14]
    },
    secondary: {
      light: Colors.secondary.light,
      main: Colors.secondary.main,
      dark: Colors.secondary.dark,
      contrastText: Colors.secondary.contrastText
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: 'd32f2f',
      contrastText: '#ffffff'
    },
    warning: {
      light: Colors.warning.light,
      main: Colors.warning.main,
      dark: Colors.warning.dark,
      contrastText: Colors.warning.contrastText
    },
    info: {
      light: Colors.info.lighten[3],
      main: Colors.info.main,
      dark: Colors.info.darken[3],
      contrastText: Colors.info.accent
    },
    text: {
      primary: Colors.text.primary,
      secondary: Colors.text.secondary,
      disabled: Colors.text.disabled,
      hint: Colors.text.hint
    }
  },
  shape: {
    borderRadius: BorderRadiuses.shape.borderRadius
  },
  typography: {
    fontFamily: fontFamilies.fontFamily.helvetica,
    fontWeightLight: fontWeights.fontWeight.light,
    fontWeightRegular: fontWeights.fontWeight.regular,
    fontWeightMedium: fontWeights.fontWeight.medium,
    fontWeightBold: fontWeights.fontWeight.bold,

    h1: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.light,
      fontSize: fontSizes.h1,
      lineHeight: lineHeights.h1
    },
    h2: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.light,
      fontSize: fontSizes.h2,
      lineHeight: lineHeights.h2,
      color: Colors.text.primary
    },
    h3: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.h3,
      lineHeight: lineHeights.h3,
      color: Colors.text.primary
    },
    h4: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.h4,
      lineHeight: lineHeights.h4,
      color: Colors.text.primary
    },
    h5: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.h5,
      lineHeight: lineHeights.h5,
      color: Colors.text.primary
    },
    h6: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.medium,
      fontSize: fontSizes.h6,
      lineHeight: lineHeights.h6,
      color: Colors.text.primary
    },
    subtitle1: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.subtitle1,
      lineHeight: lineHeights.subtitle1,
      color: Colors.text.primary
    },
    subtitle2: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.medium,
      fontSize: fontSizes.subtitle2,
      lineHeight: lineHeights.subtitle2,
      color: Colors.text.primary
    },
    body1: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.body1,
      lineHeight: lineHeights.body1,
      color: Colors.text.primary
    },
    body2: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.body2,
      lineHeight: lineHeights.body2,
      color: Colors.text.primary
    },
    button: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.button,
      lineHeight: lineHeights.button,
      color: Colors.text.primary
    },
    caption: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.caption,
      lineHeight: lineHeights.caption,
      color: Colors.text.primary
    },
    overline: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.body2,
      lineHeight: lineHeights.overline,
      color: Colors.text.secondary
    }
  },
  overrides: {
    MuiInput: {
      root: {
        color: Colors.text.primary
      },
      underline: {
        '&:before': {
          borderBottom: `1px solid ${Colors.text.primary}`
        }
      }
    },
    MuiIconButton: {
      root: {
        color: Colors.primary.main
      }
    },
    MuiSelect: {
      icon: {
        color: Colors.text.primary
      }
    }
  }
})

formConfigurator.config({ theme: MuiCustomTheme })

export default MuiCustomTheme
