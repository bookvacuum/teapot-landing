import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { autocompleteClasses, ButtonGroup } from "@mui/material";
import { atob } from "buffer";
import { useRouter } from "next/router";    
import Button from '@mui/material/Button';


export default function RecipeReviewCard({title, id, createdAt, content, company, role}) {
  const router = useRouter()
  return (
<Card 
      sx={{
        maxWidth: 900,
        height: 300,
        p: 1,
        marginLeft: {
          xs: 2,
          sm: "auto", // theme.breakpoints.up('sm')
          md: "auto", // theme.breakpoints.up('md')
          lg: "auto", // theme.breakpoints.up('lg')
          xl: "auto",
        },
        marginRight: {
          xs: 2,
          sm: "auto", // theme.breakpoints.up('sm')
          md: "auto", // theme.breakpoints.up('md')
          lg: "auto", // theme.breakpoints.up('lg')
          xl: "auto",
        },
        borderRadius: "16px",
        overflow: "hidden",
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
        title= {`${role} at ${company}`}
        subheader={createdAt}
      />
      <CardContent>

        {content.map(paragraph => 
        <Typography paragraph key={paragraph}>
          {paragraph}
        </Typography>
        )}
          
      </CardContent>
     <Button onClick={() => router.push(`/reviews/${id}`)} ><ExpandMoreIcon sx={{textAlign: 'right'}}/></Button> 
    </Card>
  )
}