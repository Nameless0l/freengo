import Utils from "@/helpers/utils";
import {
  DirectionsWalk,
  ExpandLess,
  ExpandMore,
  LocationOn,
  AttachMoney,
} from "@mui/icons-material";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Collapse,
  Typography,
  Grid,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { useState } from "react";

interface WaitingPassenger {
  name: string;
  picture: string;
  mobilityCost: number;
  dropoff_location: {
    poiName: string;
    description: string;
  };
  pickup_location: {
    poiName: string;
    description: string;
  };
  distance_to_pickup_point: number;
}

interface WaitListItemProps {
  waitlistItem: WaitingPassenger;
}

export const WaitListItem: React.FC<WaitListItemProps> = ({ waitlistItem }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemAvatar>
          <Avatar alt={waitlistItem.name} src={waitlistItem.picture} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1">{waitlistItem.name}</Typography>
              <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
                <IconButton size="small" color="secondary">
                <AttachMoney color="info"/>
                </IconButton>
                <Typography variant="body2" color="text.secondary" fontWeight="bold">
                  {Utils.formatNumber({ number: waitlistItem.mobilityCost })}
                </Typography>
              </Box>
            </Box>
          }
          secondary={
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center">
                  <LocationOn color="secondary" />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {waitlistItem.pickup_location.poiName}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center">
                  <DirectionsWalk color="secondary" />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {waitlistItem.distance_to_pickup_point * 1000} m
                  </Typography>
                </Box>
              </Grid>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic" }}
                color="text.secondary"
                gutterBottom
              >
                {waitlistItem.pickup_location.description}
              </Typography>
            </Grid>
          }
        />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box pl={4}>
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <LocationOn color="primary" />
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {waitlistItem.dropoff_location.poiName}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
                gutterBottom
              >
                {waitlistItem.dropoff_location.description}
              </Typography>
            </Box>
          </Grid>

          <IconButton edge="end">
            <Button variant="contained" color="secondary">
              Annuler
            </Button>
          </IconButton>
        </Box>
      </Collapse>
    </div>
  );
};