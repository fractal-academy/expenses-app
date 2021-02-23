import { makeStyles } from '@material-ui/core/styles'
import MuiCustomTheme from 'app/config/qonsollTheme/MuiCustomTheme'
import COLOR from 'app/constants/colors'
import { yellow } from '@material-ui/core/colors'

export const useStyles = makeStyles((theme) => ({
  dateStyles: {
    // backgroundColor: pink
    backgroundColor: MuiCustomTheme.palette.background.paper,
    width: '100%',
    '&> .rdrDateDisplayWrapper': {
      backgroundColor: 'transparent'
    },
    '& select': {
      color: MuiCustomTheme.palette.text.primary
    },
    '& .rdrMonth': {
      width: '100%'
    },
    '& .rdrNextPrevButton': {
      backgroundColor: COLOR.CORAL.color
    },
    '& .rdrDayPassive .rdrDayNumber span': {
      color: MuiCustomTheme.palette.text.hint
    },
    '& .rdrDayNumber span': {
      color: MuiCustomTheme.palette.text.primary,
      fontFamily: MuiCustomTheme.typography.fontFamily.helvetica
    },
    '& .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span': {
      color: MuiCustomTheme.palette.common.black
    },
    '& .rdrDayToday .rdrDayNumber span': {
      color: COLOR.CORAL.color,
      fontWeight: MuiCustomTheme.typography.fontWeightBold
    },
    '& .rdrDayToday .rdrDayNumber span:after': { display: 'none' }
  }
}))
