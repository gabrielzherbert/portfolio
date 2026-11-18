/*
  Journey data for the globe and timeline.

  How to edit:
  - places: one point on the globe each. "id" links entries and arcs to a place.
    "label" is the short name shown on the globe; "name" is used in the timeline.
    "labelSide": "left" puts the globe label left of the point (default is right).
  - arcs: lines between places. type "path" is the main route, "current" is subtler.
  - entries: timeline items, shown in the order listed here.
    Fields: place (a place id), dates, title, subtitle (optional), details (optional list).

  Keep mining work general and at country level only (see CLAUDE.md).
*/
const JOURNEY = {
  places: [
    { id: "jhb", name: "Johannesburg, South Africa", label: "Johannesburg", lat: -26.2, lng: 28.05 },
    { id: "cpt", name: "Cape Town, South Africa", label: "Cape Town", labelSide: "left", lat: -33.92, lng: 18.42 },
    { id: "isr", name: "Israel", label: "Israel", lat: 31.4, lng: 35.0 },
    { id: "civ", name: "Côte d'Ivoire", label: "Côte d'Ivoire", lat: 7.54, lng: -5.55 }
  ],

  arcs: [
    { from: "jhb", to: "cpt", type: "path" },
    { from: "cpt", to: "isr", type: "path" },
    { from: "isr", to: "civ", type: "current" }
  ],

  entries: [
    {
      place: "jhb",
      dates: "Graduated 2016",
      title: "King David Linksfield High School",
      details: [
        "Top 1% in Physics, Accounting and Maths",
        "Seven distinctions",
        "Student leader prefect"
      ]
    },
    {
      place: "cpt",
      dates: "Jan to Jul 2018",
      title: "University of Cape Town",
      subtitle: "Business Science in Analytics",
      details: ["GPA 4.0", "Dean's Merit List"]
    },
    {
      place: "isr",
      dates: "Nov 2018 to Dec 2020",
      title: "IDF Paratroopers",
      subtitle: "Combat soldier"
    },
    {
      place: "isr",
      dates: "2021 to 2025",
      title: "Bar-Ilan University",
      subtitle: "BSc Industrial Engineering and Information Systems",
      details: ["Average 90.2", "Course mentor"]
    },
    {
      place: "isr",
      dates: "Apr to Jul 2024",
      title: "Logico",
      subtitle: "Warehouse optimisation project"
    },
    {
      place: "civ",
      dates: "Mar 2026 to present",
      title: "Project officer and analyst",
      subtitle: "An early-stage gold exploration company"
    }
  ]
};
