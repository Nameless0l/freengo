import { MobilityOfferListItem } from "@/components/driver/mobility-offer-item";
import DriverHomeDataSource from "@/datasources/driver.datasources";
import { List, Typography } from "@mui/material";

export default function OffersList() {
  const offers = DriverHomeDataSource.getOffersLists();
  return (
    <div>
      <Typography variant="h4">Offres de mobilités</Typography>
      <Typography variant={"subtitle1"} sx={{ fontStyle: "italic", mb: 4 }}>
        Les offres de mobilité qui vos correspondent le mieux, vous pouvez
        postuler à une offre afin de la satisfaire.
      </Typography>

      <List>
        {offers.map((offer, index) => (
          <div key={index}>
            <MobilityOfferListItem offer={offer} />
          </div>
        ))}
      </List>
    </div>
  );
}
