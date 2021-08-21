import { Slide } from 'react-awesome-reveal';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeWrapper from './HomeWrapper'
import { Link } from 'next/link';


const useStyles = makeStyles({
    root: {
        width: 300,
        margin: 20,
    },
});

const zoomIn = true;
const HomeContainer = () => {
    const classes = useStyles();
    return (

        <HomeWrapper>
             <h1>Cards</h1>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Users</h2>
                    </Slide>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Todos</h2>
                    </Slide>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Albums</h2>
                    </Slide>
                </div>
            </div>
        </HomeWrapper>


    )
}

export default HomeContainer