import { createMuiTheme } from '@material-ui/core'
import Colors from './core/colors'
import BorderRadiuses from './core/borderRadiuses.js'
import { fontFamilies, fontSizes, fontWeights } from './core'

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
      // default: Colors.grey[2]
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
    // divider: Colors.divider,
    // primaryAlternative: {
    //   c1: '#ee786c',
    //   c2: '#20bfa9',
    //   c3: '#c37fbc',
    //   c4: '#ffecce'
    // }
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
      lineHeight: 1.167,
      letterSpacing: '-0.01562em'
    },
    h2: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.light,
      fontSize: fontSizes.h2,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
      color: Colors.text.primary
    },
    h3: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.h3,
      lineHeight: 1.167,
      letterSpacing: '0em',
      color: Colors.text.primary
    },
    h4: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.h4,
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
      color: Colors.text.primary
    },
    h5: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.h5,
      lineHeight: 1.334,
      letterSpacing: '0em',
      color: Colors.text.primary
    },
    h6: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.medium,
      fontSize: fontSizes.h6,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
      color: Colors.text.primary
    },
    subtitle1: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: 400,
      fontSize: fontSizes.subtitle1,
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
      color: Colors.text.primary
    },
    subtitle2: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.medium,
      fontSize: fontSizes.subtitle2,
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
      color: Colors.text.primary
    },
    body1: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.body1,
      lineHeight: '1.5rem',
      letterSpacing: 0,
      color: Colors.text.primary
    },
    body2: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.body2,
      lineHeight: '1.75rem',
      letterSpacing: 0,
      color: Colors.text.primary
    },
    button: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: fontSizes.button,
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
      color: Colors.text.primary
    },
    caption: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
      color: Colors.text.primary
    },
    overline: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
      color: Colors.text.primary
    }
  }
})

export default MuiCustomTheme
