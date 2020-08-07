const business = [
  { name: "Prime", category: "Finance", start: 1981, revenue: 24 },
  { name: "Marspoint", category: "Retail", start: 1992, revenue: 28 },
  { name: "Aces", category: "Auto", start: 1999, revenue: 17 },
  { name: "Hurricane Lighting", category: "Retail", start: 1989, revenue: 10 },
  { name: "Eclipse", category: "Technology", start: 2009, revenue: 11 },
  { name: "Globestar", category: "Finance", start: 1987, revenue: 16 },
  { name: "Vertex", category: "Auto", start: 1986, revenue: 16 },
  { name: "Silverstar", category: "Technology", start: 2011, revenue: 21 },
  { name: "Ravenworks", category: "Retail", start: 1981, revenue: 19 },
];

//Filter Methods -------------------------
const fileredTypes = business.filter((e) => {
  return e.category === "Auto";
});
console.log("fileredTypes", fileredTypes);

//Map Method -------------------------
const mappedTypes = business.map((e) => {
  return e.start;
});
console.log("mappedTypes", mappedTypes);

// Find Method -------------------------
const findTypes = business.find((e) => {
  return e.name === "Eclipse";
});
console.log("findTypes", findTypes);

// forEach Method -------------------------
business.forEach((e) => {
  console.log("forEach - Name:", e.name);
});

// Some Method -------------------------
const someTypes = business.some((e) => {
  return e.start >= 2019;
});
console.log("someTypes", someTypes);

// Every Method -------------------------
const everyTypes = business.every((e) => {
  return e.start >= 1981;
});
console.log("everyTypes", everyTypes);

// Reduce Method -------------------------
const revenueTotal = business.reduce((currentTotal, e) => {
  return e.revenue + currentTotal;
}, 0);

console.log("revenueTotal", revenueTotal);

// Includes Method -------------------------
const includesTypes = business.includes(1);

console.log("revenueTotal", includesTypes);
