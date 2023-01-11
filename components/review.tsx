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
import { BlockList } from "net";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 900,
        p: 1,
        m: 3,
        borderRadius: "16px",
        border: "2px solid #749551",
      }}
    >
      <CardHeader
        avatar={<Avatar alt="who?" src="..public/angrycat.png" />}
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
        title={"From a HarperCollins Editorial Assistant"}
        subheader={"September 14, 2016"}
      />
      <CardContent>
        <Typography paragraph>
          I worked at this company for close to two years. I mainly quit because
          of two reasons. First, I was making 45K as an editorial assistant. We
          are told that in publishing this is standard, and yet with [ ] offices
          being in New York and San Francisco, it is tough to survive in these
          cities with that income. Meanwhile, editorial assistants have to
          juggle so much–given a book, they are assigned duties in editing,
          marketing, copyediting, design, financial projection analysis…even
          acting as a personal secretary for your editors at times (I cannot
          count the times I had to book stuff for my managers and log in their
          company card expenses..).
        </Typography>
        <Typography paragraph>
          By the end of my time at this company, they were dangling the
          possibility of a promotion (a meager 5K increase) to me and other
          editorial assistants, but the promotion kept getting delayed, and I
          ultimately felt like this is not the right job for my financial
          stability and career growth. There is a running joke among the
          employees that in order to work at HarperCollins long enough to make
          it to senior editor positions, you’ll need a spouse who actually makes
          a decent income.
        </Typography>
      </CardContent>
      <CardActions disableSpacing={true}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Second, the managerial system works well in some cases but in my
            case, I worked under a manager who was a very privileged white
            woman. I constantly felt microaggressions during my time working
            there. Just because I was a BIPOC, three white managers would ask
            for my input on how to sell any book that mentions BIPOC without
            offending anyone and alienating the “larger audience.” The Black
            senior editor of Amistad (one of the Harpers imprints) was fired
            with no warning–this is very much indicative of what HarperCollins
            is: an unhealthy workplace for people from marginalized communities
            that at best practices performative allyship on the backs of its POC
            employees. It is an open secret that the current president and the
            execs are transphobic and extremely insensitive to racial issues.
            The anecdotes are overwhelming. I heard from other editorial
            assistants that a senior POC editor talked to them about how she
            doesn’t feel comfortable bringing in other POC women to [ ] because
            it is not a safe place.
          </Typography>
          <Typography paragraph>
            I love publishing in general and have grown various skills during my
            time at [ ], but it was fruitless working for a company that truly
            does not care about you, especially if you are BIPOC. No love for
            books can justify these working conditions.
          </Typography>
          <Typography paragraph>
            It’s been more than 40 days since the strike in NY. But [ ] is not
            doing anything but post managerial temporary jobs so that they won’t
            be covered by the union. This response really sums up the culture at
            [ ].
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
