import { StyledComponentProps, StyleRulesCallback, WithStyles } from '@material-ui/core'
import { StyleRules } from '@material-ui/core/styles'
import { RouteComponentProps } from 'react-router'

export type BaseComponentProps
  <TStyles extends string | StyleRules | StyleRulesCallback> =
  RouteComponentProps & StyledComponentProps & WithStyles<TStyles>
