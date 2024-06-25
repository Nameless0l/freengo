import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import whiteCar from "../../assets/assets/white-car.png";
import car2 from "../../assets/assets/car5.png";
import car3 from "../../assets/assets/car6.png";

const carList = [
  { name: "BMW UX", image: whiteCar, aosDelay: "0" },
  { name: "KIA UX", image: car2, aosDelay: "500" },
  { name: "BMW UX", image: car3, aosDelay: "1000" },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <Grid container justifyContent="center">
        {/* Heading */}
        <Grid item xs={12}>
          <Typography
            data-aos="fade-up"
            variant="h3"
            className="font-semibold font-serif mb-3 text-center"
          >
            Notre flotte de voitures, Notre fierté
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            variant="body1"
            className="text-sm pb-10 text-center"
          >
            Vous déplacez en toute sécurité et en tout confort
          </Typography>
        </Grid>
        {/* Car listing */}
        {carList.map((data, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group flex flex-col"
            >
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <Typography className="text-primary font-semibold text-center">
                  {data.name}
                </Typography>
                <div className="flex justify-between items-center text-xl font-semibold w-full">
                  <Typography className="w-2/3 text-center">
                    Pour les courses VIP
                  </Typography>
                  
                </div>
              </div>
              <Typography className="text-xl font-semibold absolute top-0 left-3">
                12Km
              </Typography>
            </div>
          </Grid>
        ))}
        {/* End of car listing */}
        <Grid item xs={12} className="text-center mt-8">
          <Button data-aos="fade-up" variant="outlined">
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CarList;
