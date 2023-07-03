import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import { viewGreen, viewPink, viewViolet } from "../../../helpers/icon";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OutlinedCard({
  title,
  image,
  id,
  color,
  shadow,
  onHandleOpen,
}) {
  const [open, setOpen] = React.useState(false);
  const onHoverHandle = () => {
    setOpen(true);
  };
  const viewIcon = [viewGreen, viewViolet, viewPink];

  const card = (
    <React.Fragment>
      <CardContent>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={image} alt={title} />
          <Typography>{title}</Typography>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </React.Fragment>
  );
  return (
    <Box
      sx={{
        width: 220,
        height: 200,
        display: "flex",
        marginInline: 3,
        flexDirection: "row",
        marginBlock: "12px",
      }}
      key={id}
    >
      <Card
        onMouseEnter={onHoverHandle}
        onMouseLeave={() => setOpen(false)}
        sx={{
          width: "100%",
          position: "relative",
          borderRadius: 5,
          borderWidth: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: shadow,
        }}
        variant="outlined"
      >
        {card}
        {open && (
          <Grid
            sx={{
              width: "100%",
              height: 50,
              backgroundColor: color,
              position: "absolute",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => onHandleOpen(id)}
            >
              <img
                src={viewIcon[id - 1]}
                style={{ width: 13, height: 9 }}
                alt="view"
              />
              <Typography sx={{ fontSize: 10, marginLeft: 0.5 }}>
                View
              </Typography>
            </div>
          </Grid>
        )}
      </Card>
    </Box>
  );
}
