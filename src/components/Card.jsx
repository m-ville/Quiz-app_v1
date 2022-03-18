import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import RadioButtonsGroup from "./Choice"

export default function ImgMediaCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt="green iguana" height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>

                <Typography component={'span'} variant="body2" color="text.secondary">
                    <RadioButtonsGroup
                    opt = {props.content}
                    cans = {props.corrctAns}
                     />
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="large" variant="contained" ><ArrowBackIosNewIcon /></Button>
                <Button size="large" variant="contained" ><ArrowForwardIosIcon /></Button>
            </CardActions>
        </Card>
    );
}