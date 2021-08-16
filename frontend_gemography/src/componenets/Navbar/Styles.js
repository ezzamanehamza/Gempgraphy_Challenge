import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#000000',
  },
  customizeToolbar: {
    minHeight: 60
  },
  toolbar: theme.mixins.toolbar
})); 