const incidents = [
  {
    title: "GPS Spoofing Near Major Airport",
    date: "July 2025",
    description: "Pilots reported false GPS signals during approach, causing confusion."
  },
  {
    title: "Airline Reservation System Breach",
    date: "June 2025",
    description: "Hackers accessed customer data and disrupted bookings."
  }
];

const list = document.getElementById("incident-list");

incidents.forEach(incident => {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${incident.title}</strong> (${incident.date}): ${incident.description}`;
  list.appendChild(item);
});

