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
        position:'fixed',
        top: 0,
        padding: 30,
        width:'95%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001e3c'
    },
    title: {
        color: 'white'
    },
    subTitle: {
        color: 'white'
    },
    contents: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid grey',
        borderRadius: 7,
        marginTop:'10%',
        width: '70%',
        minHeight: '70%'
    },
    contentTexts: {
        margin: '20px 20px 20px 20px',
        color: 'white'
    }
}))