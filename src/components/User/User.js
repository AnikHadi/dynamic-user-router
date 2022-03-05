import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'

const User = (props) => {
    // console.log(props);
    const userDetailsHandler = props;
    console.log(userDetailsHandler);
    const { name, picture, login } = props.user;
    const fullName = `${name.title} ${name.first} ${name.last}`
    return (
        <Card sx={{ maxWidth: 345 }} className="user-child mb-3">
            <CardMedia
                component="img"
                height="240"
                image={picture.large}
                alt="green iguana"
            />
            <CardContent className='user-name'>
                <Typography gutterBottom variant="h5" component="div">
                    {fullName}
                </Typography>
                <Typography variant="body2 h-20" color="text.secondary">

                </Typography>
            </CardContent>
            <CardActions className='user-details-btn'>
                <Link to={`/friend/${login.uuid}`}><Button  size="small">details</Button></Link>
            </CardActions>
        </Card>
    );
};

export default User;