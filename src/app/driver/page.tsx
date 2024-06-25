"use client";
import { PassengerItem } from "@/components/driver/passenger-item";
import DriverHomeDataSource from "@/datasources/driver-home.datasources";
import { Button, Divider, List } from "@mui/material";
import Link from "next/link";

export default function DriverHome() {
  const passengers = DriverHomeDataSource.getCurrentPassengers();
  const waitList = DriverHomeDataSource.getCurrentWaitList();

  return (
    <div>
      <h3 className="pl-4">Passagers à bord</h3>
      {
        <List>
          {passengers.map((passenger, index) => (
            <div key={index}>
              <PassengerItem passenger={passenger} />
              {index < passengers.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      }
      <Divider />
      <Divider />
      <Divider />

      <h3 className="mt-4 pl-4">Liste d&apos;attente</h3>
      {
        <List>
          {waitList.map((passenger, index) => (
            <div key={index}>
              <PassengerItem passenger={passenger} />
              {index < waitList.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      }

      <Link href={"driver/offers"}>
        <Button variant="outlined">Voir les offres disponibles</Button>
      </Link>
    </div>
  );
}
