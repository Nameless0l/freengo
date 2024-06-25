import Utils from "@/helpers/utils";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Collapse,
  Typography,
  Grid,
  Box,
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

// TODO: le rendre adaptable pour les elements d'une liste d'attente (boutton annuler, et point de depart)
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
              <Box sx={{ ml: "auto" }}>
                <Typography variant="body2" color="text.secondary">
                  {Utils.formatNumber({ number: passenger.mobilityCost })}
                </Typography>
              </Box>
            </Box>
          }
          secondary={
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {passenger.destination.poiName}
              </Typography>
            </Grid>
          }
        />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {passenger.destination.description}
        </Typography>
      </Collapse>
    </div>
  );
};
