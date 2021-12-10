import React, { useState } from 'react'
import { Typography, Input, Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/SearchOutlined'
import useStyles from './Home.styles'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Loader from '../Components/Loader.js'

const Home = () => {
    let navigate = useNavigate()
    const classes = useStyles();
    const [userName, setUserName] = useState('')
    const [loading, setLoading] = useState(false)
    const [repositoriesData, setRepositoriesData] = useState([])
    const [error, setError] = useState('')

    const handleUserNameState = ( event ) => {
        setUserName(event.target.value)
    }

    const handleSubmit = ( event ) => {
        setLoading(true)
        axios.get(`https://peaceful-shelf-75995.herokuapp.com/users/${userName}`)
          .then(response => {
            setRepositoriesData(response.data)
            navigate({
                pathname: `/about/${userName}`
            })
          })
          .catch(err => {
            setLoading(false)
            setError(err)
          } )
        event.preventDefault();
        
    }
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.titleBox}>
                    <Typography className={classes.title} variant="h3" component="div">Input github username</Typography>
                </div>
                  <form className={classes.form} onSubmit={handleSubmit}>
                    <Input
                        className={classes.input} 
                        value={userName}
                        onChange={handleUserNameState}
                    />
                    <Button 
                        className={classes.button} 
                        type="submit" 
                        variant="outlined" 
                        color="primary" 
                        endIcon={<SendIcon />}> 
                            Submit 
                        </Button>
                  </form>
            </div>
            <div>
                {error !== ''? <Typography className={classes.title}>No user found</Typography>: <div></div>}
            </div>
            <div>
                {loading? <Loader/>:<div/>}
            </div>
        </div>
    )
}

export default Home
