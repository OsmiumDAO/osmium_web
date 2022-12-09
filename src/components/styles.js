import { makeStyles } from '@mui/material'

export const useStyles = makeStyles((theme) => ({
  largeButton: {
    padding: theme.spacing(1) + ' ' + theme.spacing(2.5),
    border: theme.spacing(1.5) + ' solid white shadow',
    cursor: 'pointer;',
    transition: 'transform 0.3s ease;',
    backgroundColor: 'var(--bg-dark)',
  },
}))
