import React from 'react';
import { Grid, CardActionArea, CardContent } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

interface IGenreCardProps {
    Name: string | undefined,
    Id: string | undefined
}

const Genres = ({genre} : any) => {
    return (
      <div>
        {/* <Grid key={genre.id}>
                <h4 key={genre.id}>Genre Id: {genre.id}</h4>
                <h4>Genre Name {genre.name}</h4>
            </Grid> */}

        <Card className="GenreCardContainer">
          <CardActionArea>
            <CardContent>
              <Typography component="p" className="GenreCardDetails">
                {genre.genreName}
              </Typography>
              <Typography component="p" className="GenreCardDetails">
                {genre.genreID}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
}

export default Genres;