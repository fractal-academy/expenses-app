import { makeStyles } from '@material-ui/core/styles'
import MuiCustomTheme from 'app/config/qonsollTheme/MuiCustomTheme'
import COLOR from 'app/constants/colors'

export const useStyles = makeStyles((theme) => ({
  dateStyles: {
    backgroundColor: MuiCustomTheme.palette.background.paper,
    display: 'flex',

    '& span': {
      fontFamily: MuiCustomTheme.typography.fontFamily
    },
    '&> .rdrDateDisplayWrapper': {
      backgroundColor: 'transparent'
    },
    '& select': {
      color: MuiCustomTheme.palette.text.primary
    },
    '& .rdrMonths .rdrMonthsVertical': {
      width: '100%'
    },
    '& .rdrMonth': {
      width: '100%',
      boxSizing: 'border-box'
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
    '& .rdrDayToday .rdrDayNumber span:after': { display: 'none' },
    '& .rdrMonthAndYearPickers select option': {
      color: MuiCustomTheme.palette.text.secondary
    },
    '& .rdrDateInput': {
      backgroundColor: MuiCustomTheme.palette.background.paper
    }
  }
}))
