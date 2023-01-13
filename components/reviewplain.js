import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ButtonGroup } from "@mui/material";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format

export default function RecipeReviewCard({title, date, content}) {

  return (
<Card
      sx={{
        maxWidth: 900,
        height: 400,
        p: 1,
        m: 3,
        borderRadius: "16px",
        overflow: "scroll",
        // border: "2px solid #749551",
      }} >
      <CardHeader
        avatar={<Avatar alt="green?" src="..public/angrycat.png" />}
        action={
          <ButtonGroup
            sx={{
              display: {
                xs: "block",
                sm: "flex", // theme.breakpoints.up('sm')
                md: "flex", // theme.breakpoints.up('md')
                lg: "flex", // theme.breakpoints.up('lg')
                xl: "flex",
              },
              
            }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </ButtonGroup>
        }
        title={title}
        subheader={date}
      />
      <CardContent>

        {content.map(paragraph => 
        <Typography paragraph key={paragraph}>
          {paragraph}
        </Typography>
        )}
      </CardContent>
    </Card>
  )
}