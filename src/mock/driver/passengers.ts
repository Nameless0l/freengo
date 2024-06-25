// les passagers à bord du véhicule
export const mockPassengers = [
  {
    name: "Jane Doe",
    picture: "https://via.placeholder.com/150",
    destination: {
      latitude: 40.73061,
      longitude: -73.935242,
      poiName: "Empire State Building",
      description: "Célèbre gratte-ciel de New York",
    },
    mobilityCost: 3200,
    numberOfSeats: 1,
  },
  {
    name: "John Smith",
    picture: "https://via.placeholder.com/150",
    destination: {
      latitude: 51.507351,
      longitude: -0.127758,
      poiName: "Big Ben",
      description: "Célèbre horloge de Londres",
    },
    mobilityCost: 4500,
    numberOfSeats: 2,
  },
  {
    name: "Emma Johnson",
    picture: "https://via.placeholder.com/150",
    destination: {
      latitude: 48.858093,
      longitude: 2.294694,
      poiName: "Tour Eiffel",
      description: "Monument emblématique de Paris",
    },
    mobilityCost: 2800,
    numberOfSeats: 1,
  },
];

// liste d'attente du vehicule (personnes qui attendent l'arrivée du vehicule)
export const mockWaitlist = [
  {
    name: "Alice Brown",
    picture: "https://via.placeholder.com/150",
    distance_to_pickup_point: 0.042,
    pickup_location: {
      latitude: 51.507351,
      longitude: -0.127758,
      poiName: "Gare de Victoria",
      description: "Gare principale de Londres",
    },
    dropoff_location: {
      latitude: 51.500152,
      longitude: -0.124756,
      poiName: "Buckingham Palace",
      description: "Résidence officielle de la famille royale britannique",
    },
    mobilityCost: 3000,
    numberOfSeats: 1,
  },
  {
    name: "Robert Johnson",
    distance_to_pickup_point: 0.042,
    picture: "https://via.placeholder.com/150",
    pickup_location: {
      latitude: 40.73061,
      longitude: -73.935242,
      poiName: "Grand Central Terminal",
      description: "Gare historique de New York",
    },
    dropoff_location: {
      latitude: 40.782864,
      longitude: -73.967177,
      poiName: "Central Park",
      description: "Grand parc urbain emblématique de New York",
    },
    mobilityCost: 2800,
    numberOfSeats: 2,
  },
];
