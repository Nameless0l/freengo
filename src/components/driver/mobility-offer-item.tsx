"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  Avatar,
  Collapse,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  AttachMoney,
  LocationOn,
  DirectionsWalk,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import Utils from "@/helpers/utils";

interface OfferItemProps {
  offer: {
    id: string;
    customer: {
      id: string;
      name: string;
      email: string;
      picture: string;
    };
    distance_to_pickup_location: number;
    offer_status: string;
    mobility_cost: number;
    places_of_seats: number;
    is_mobility_cost_negociable: boolean;
    bundle: string;
    pickup_location: {
      id: string;
      poi_name: string;
      address: string;
      description: string;
    };
    dropoff_location: {
      id: string;
      poi_name: string;
      description: string;
      address: string;
    };
  };
}

export const MobilityOfferListItem: React.FC<OfferItemProps> = ({ offer }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          padding: 2,
          borderRadius: 2,
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Box display="flex" alignItems="center">
              <Avatar alt={offer.customer.name} src={offer.customer.picture} />
              <Typography variant="subtitle1" ml={2}>
                {offer.customer.name}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <LocationOn color="secondary" />
              <Typography variant="body2" color="text.secondary" ml={1}>
                {offer.pickup_location.poi_name}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontStyle: "italic" }}
            >
              {offer.pickup_location.address}
            </Typography>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <DirectionsWalk color="secondary" />
              <Typography variant="body2" color="text.secondary" ml={1}>
                {offer.distance_to_pickup_location * 1000} m
                
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <AttachMoney color="info" />
              <Typography variant="body2" color="text.secondary" ml={1}>
                {Utils.formatNumber({ number: offer.mobility_cost })}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {offer.is_mobility_cost_negociable
                ? "Négociable"
                : "Non négociable"}
            </Typography>
          </Grid>
          
        </Grid>

        <IconButton edge="end" className={"mt-4"}>
              <Button variant="outlined" color="primary">
                Postuler
              </Button>
            </IconButton>
      </Box>
    </>
  );
};
