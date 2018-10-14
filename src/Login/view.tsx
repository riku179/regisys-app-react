import { BaseComponentProps } from '@/lib/components'
import { LoginState } from '@/Login/container'
import {
  Avatar,
  createStyles,
  CssBaseline,
  Paper,
  Theme, Typography, withStyles,
} from '@material-ui/core'
import Button from '@material-ui/core/Button/Button'
import TextField from '@material-ui/core/TextField'
import LockIcon from '@material-ui/icons/LockOutlined'
import * as React from 'react'
import { MouseEvent, SFC } from 'react'
import { Redirect } from 'react-router'
import { LoginAction } from './container'

type Props = LoginState & LoginAction & BaseComponentProps<typeof styles>

const LoginComponent: SFC<Props> = (props: Props) => {
  const { classes } = props
  const { from } = props.location.state || { from: { pathname: '/' } }

  if (props.redirectToReferrer) {
    return <Redirect to={from}/>
  }

  const submit = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    await props.signIn()
  }

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
            <TextField
              id='username'
              label='ユーザー名'
              required
              value={props.username}
              error={props.username.length === 0}
              helperText='必須項目です'
              onChange={props.setUsername}
              autoFocus
              fullWidth
              margin='normal'
            />
            <TextField
              id='password'
              type='password'
              label='パスワード'
              required
              value={props.password}
              error={props.username.length === 0}
              helperText='必須項目です'
              onChange={props.setPassword}
              fullWidth
              margin='normal'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={submit}
            >サインイン</Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  )
}

const styles = ({ breakpoints, palette, spacing }: Theme) => {
  console.log(breakpoints.up(400 + spacing.unit * 3 * 2))
  return createStyles({
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
}

export default withStyles(styles)(LoginComponent)
