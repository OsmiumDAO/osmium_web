import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
  IconButton,
  // makeStyles,
} from '@mui/material'
import React from 'react'
import { GrClose } from 'react-icons/gr'
// import Controls from './controls/Controls'
// import CloseIcon from '@mui/icons-material/Close'

// const useStyles = makeStyles((theme) => ({
//   dialogWrapper: {
//     padding: theme.spacing(2),
//     position: 'absolute !important',
//     top: theme.spacing(2),
//   },
// }))

function Popup(props) {
  const { title, children, open, setOpen } = props
  // const classes = useStyles()
  return (
    <Dialog
      TransitionComponent={Transition}
      transitionDuration={700}
      open={open}
      onClose={() => setOpen(false)}
      maxWidth='md'
      className='dialogWrapper'
      // classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle sx={{ p: { xs: '5px', md: '10px' } }}>
        <div
          style={{
            minWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h6' component={'div'}>
            {title}
          </Typography>
          <IconButton
            onClick={() => setOpen(false)}
            color='secondary'
            style={{ marginLeft: '16px' }}
          >
            <GrClose className='dialog__close' />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  )
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide direction='down' ref={ref} mountOnEnter unmountOnExit {...props} />
  )
})

export default Popup
