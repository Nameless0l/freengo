import Utils from "@/helpers/utils";
import { ExpandLess, ExpandMore, LocationOn, AttachMoney } from "@mui/icons-material";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Collapse,
  Typography,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import { useState } from "react";

interface Passenger {
  name: string;
  picture: string;
  mobilityCost: number;
  destination: {
    poiName: string;
    description: string;
  };
}

interface PassengerItemProps {
  passenger: Passenger;
}

export const PassengerItem: React.FC<PassengerItemProps> = ({ passenger }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemAvatar>
          <Avatar alt={passenger.name} src={passenger.picture} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1">{passenger.name}</Typography>
              <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
                <IconButton size="small" color="secondary">
                  <AttachMoney color="info"/>
                </IconButton>
                <Typography variant="body2" color="text.secondary" fontWeight="bold">
                  {Utils.formatNumber({ number: passenger.mobilityCost })}
                </Typography>
              </Box>
            </Box>
          }
          secondary={
            <Grid container alignItems="center" spacing={4}>
              <Grid item xs={1}>
                <IconButton size="small" color="primary">
                  <LocationOn />
                </IconButton>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {passenger.destination.poiName}
                </Typography>
              </Grid>
              
            </Grid>
          }
        />

        <IconButton size="small" color="primary" onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {passenger.destination.description}
        </Typography>
      </Collapse>
    </div>
  );
};