interface Room {
  roomName: string;
  pinNumber: string; // Adjust type if necessary
  propertyID: string; // Adjust type if necessary
}

interface Property {
  propertyID: string; // Adjust type if necessary
  propertyName: string;
  rooms: Room[];
}

interface ApplicationProps {
  properties: Property[];
}
