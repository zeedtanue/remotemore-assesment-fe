import { makeStyles } from '@material-ui/styles'

export default makeStyles(({ breakpoints }) => ({
    root: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a1929',
        minHeight: '100%',
        width: '100%',
        position: 'absolute'
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'column',
        padding: 30,
        width:'100%',
        minHeight:'18%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001e3c',
        marginTop: -150,
        marginBottom: 20,
    },
    title: {
        color: 'white'
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    input: {
        border: '1px solid white',
        color: 'white'
    },
    button: {
        color: 'white',
        marginLeft: 20,
    }
}))