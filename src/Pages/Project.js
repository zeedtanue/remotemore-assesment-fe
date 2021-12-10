import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import useStyles from './Project.styles'
import { Typography } from '@material-ui/core'
import axios from 'axios'
import { marked } from 'marked'
import Loader from '../Components/Loader';

const Project = () => {
    let { userName, project } = useParams()
    const classes = useStyles();
    const [readmeData, setReadme] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const getReadMeData = async() => {
        try {
            const { data } = await axios.get(`https://peaceful-shelf-75995.herokuapp.com/users/${userName}/${project}`)
            setReadme(marked.parse(data.readMe))
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        getReadMeData()
    }, [userName, project])

    if(loading){
        return(
          <div className={classes.root}>
            <Loader/>
          </div>
        )
        
    }
    return (
        <div className={classes.root} >
            <div className={classes.titleBox}>
              <Typography variant="h3" component="div" className={classes.title}>{project}</Typography>
              <Typography variant="h6" className={classes.subTitle}>Author: {userName} </Typography>
            </div>
            <div className={classes.contents}>
                {!readmeData ? <div className={classes.contentTexts}>No read.me was found</div>
                  :<div className={classes.contentTexts} dangerouslySetInnerHTML={{__html: readmeData}} />}
                <div>
                    {error !== ''? <Typography className={classes.title}>Something is wrong</Typography>: <div></div>}
                </div>
            </div>
        </div>
    )
}

export default Project
