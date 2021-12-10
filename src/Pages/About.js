import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { Typography } from '@material-ui/core'
import axios from 'axios'
import useStyles from './About.styles'
import Loader from '../Components/Loader.js'


const About = () => {
    let { userName } = useParams()
    const classes = useStyles();


    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    
    const fetchingData = async() => {
        axios.get(`https://peaceful-shelf-75995.herokuapp.com/users/${userName}`)
          .then(response => {
              setRepos(response.data)
              setLoading(false)
          })
          .catch(err => {
              setLoading(false)
              setError(err)

          })
    }

    useEffect(() => {
        fetchingData()
    }, [userName])
    
    if(loading){
        return(
            <div className={classes.root}>
                <Loader/>
                </div>
            
        )
    }
    return (
        <div className={classes.root}>
            <div className={classes.titleBox}>
              <Typography variant="h3" component="div" className={classes.title}>{userName}'s projects</Typography>
            </div>
            <div>
                {error !== ''? <Typography className={classes.title}>Sosmething is wrong: {error}</Typography>: <div></div>}
            </div>
            <div className={classes.content}>
            {repos.map(elem => 
                <div className={classes.listItem}>
                    <Link to={`/about/${userName}/${elem.name}`}>
                      <Typography variant="h6" component="div" className={classes.listTitle}>{elem.name}</Typography>
                    </Link>
                    <div className={classes.description}>
                        <p>Description: </p>
                        {elem.description !== null ? <p> {elem.description}</p>: <p> not provided</p>}
                    </div>

                    
                </div>
                )}
                </div>
                <div>
                    {error !== ''? <Typography className={classes.title}>Something is wrong</Typography>: <div></div>}
                </div>

        </div>
    )
}

export default About
