import { createMuiTheme } from '@material-ui/core'
// import QonsollTheme from 'app/config/QonsollTheme'
import Colors from './core/colors'
import BorderRadiuses from './core/borderRadiuses.js'
import fontSizes from './core/fontSizes'
import { fontFamilies, fontWeights } from './core'

const MuiCustomTheme = createMuiTheme({
  palette: {
    common: {
      black: '',
      white: ''
    },
    primary: {
      light: Colors.primary.lighten[3],
      main: Colors.primary.main,
      dark: Colors.primary.darken[3],
      contrastText: Colors.primary.accent
    },
    // secondary: {
    //   light: '',
    //   main: '',
    //   dark: '',
    //   contrastText: ''
    // },
    background: {
      // paper: Colors.grey[1],
      // main: Colors.grey[2]
    },

    // secondary: {
    // light: colors.,
    //
    // main:,
    // dark:
    // contrastText:
    // #fff
    // }
    // error: {
    // light:,
    // main:,
    // dark:,
    // contrastText:,
    // },
    warning: {
      light: Colors.warning.lighten[3],
      main: Colors.warning.main,
      dark: Colors.warning.darken[3],
      contrastText: Colors.warning.contrastText
    },
    info: {
      light: Colors.info.lighten[3],
      main: Colors.info.main,
      dark: Colors.info.darken[3],
      contrastText: Colors.info.accent
    },
    //     success: Object
    // light:
    // #81c784
    // main:
    // #4caf50
    // dark:
    // #388e3c
    // contrastText:
    //     rgba(0, 0, 0, 0.87)
    // grey: Object
    // 50: colors.grey[1],
    // 100:colors.grey[2],
    // #f5f5f5
    // 200:
    // #eeeeee
    // 300:
    // #e0e0e0
    // 400:
    // #bdbdbd
    // 500:
    // #9e9e9e
    // 600:
    // #757575
    // 700:
    // #616161
    // 800:
    // #424242
    // 900:
    // #212121
    // A100:
    // #d5d5d5
    // A200:
    // #aaaaaa
    // A400:
    // #303030
    // A700:
    // #616161
    text: {
      primary: Colors.text.primary,
      secondary: Colors.text.secondary
      // disabled: Colors.text.primary,
      // hint: Colors.text.primary
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
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em'
    },
    // h2: {},
    // h3: {},
    // h4: {},
    h5: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em'
    },
    // h6: {},
    // subtitle1: {},
    // subtitle2: {},
    body1: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: 0
    },
    // ,
    body2: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.75rem',
      letterSpacing: 0
    },
    button: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    },
    caption: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    },
    overline: {
      fontFamily: fontFamilies.fontFamily.helvetica,
      fontWeight: fontWeights.fontWeight.regular,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    }
  }
})

export default MuiCustomTheme
