import { LoginState } from '@/Login/modules'
import {
  Avatar,
  createStyles,
  CssBaseline, FormControl,
  Paper,
  StyledComponentProps,
  Theme, Typography, withStyles,
  WithStyles,
} from '@material-ui/core'
import Button from '@material-ui/core/Button/Button'
import TextField from '@material-ui/core/TextField'
import LockIcon from '@material-ui/icons/LockOutlined'
import * as React from 'react'
import { SFC } from 'react'
import { RouteComponentProps } from 'react-router'
import { LoginAction } from './container'


const styles = ({ breakpoints, palette, spacing }: Theme) => createStyles({
  layout: {
    width: 'auto',
    display: 'block',
    marginLeft: spacing.unit * 3,
    marginRight: spacing.unit * 3,
    [breakpoints.up(400 + spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${spacing.unit * 2}px ${spacing.unit * 3}px ${spacing.unit * 3}px`,
  },
  avatar: {
    margin: spacing.unit,
    backgroudColor: palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: spacing.unit,
  },
  submit: {
    marginTop: spacing.unit * 3,
  },
})

type Props = LoginState & LoginAction & RouteComponentProps & StyledComponentProps & WithStyles<typeof styles>

const LoginComponent: SFC<Props> = (props: Props) => {
  const { classes } = props
  const { from } = props.location.state || { from: { pathname: '/' } }

  return (
    <React.Fragment>
      <CssBaseline/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon/>
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
            <TextField
              id='username'
              label='ユーザー名'
              value={props.username}
              onChange={props.setUsername}
              autoFocus
            />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <TextField
                id='password'
                type='password'
                label='パスワード'
                value={props.password}
                onChange={props.setPassword}
              />
            </FormControl>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >サインイン</Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  )
}

export default withStyles(styles)(LoginComponent)
