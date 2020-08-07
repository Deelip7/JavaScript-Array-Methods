const business = [
  { name: "Prime", category: "Finance", start: 1981, end: 2004 },
  { name: "Marspoint", category: "Retail", start: 1992, end: 2008 },
  { name: "Aces", category: "Auto", start: 1999, end: 2007 },
  { name: "Hurricane Lighting", category: "Retail", start: 1989, end: 2010 },
  { name: "Eclipse", category: "Technology", start: 2009, end: 2014 },
  { name: "Globestar", category: "Finance", start: 1987, end: 2010 },
  { name: "Vertex", category: "Auto", start: 1986, end: 1996 },
  { name: "Silverstar", category: "Technology", start: 2011, end: 2016 },
  { name: "Ravenworks", category: "Retail", start: 1981, end: 1989 },
];

//Filter Methods -------------------------
const fileredTypes = business.filter((e) => {
  return e.category === "Auto";
});
console.log(fileredTypes);

//Map Method -------------------------

const mappedTypes = business.map((e) => {
  return e.name;
});
console.log(mappedTypes);

// Find Method -------------------------
const findTypes = business.find((e) => {
  return e.name === "Eclipse";
});
console.log(findTypes);

// forEach Method -------------------------
business.forEach((e) => {
  console.log(e.name);
});
