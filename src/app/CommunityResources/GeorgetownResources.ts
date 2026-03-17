import { ResourceCard } from "../resources/utils";

export const GeorgetownResourcesCards: ResourceCard[] = [

/* =================================================
  FOOD
================================================= */

{
    id: 1,
    title: "The Caring Place Food Pantry",
    subtitle: "Community grocery assistance",
    specialty: "Food pantry",
    description: "Groceries and essentials for families in need.",
    fullDescription:
        "The Caring Place provides groceries, clothing, and financial assistance to Georgetown residents. The food pantry distributes fresh produce, canned goods, and staples to help families maintain food security.",

    address: "2001 Railroad Ave, Georgetown, TX 78626",
    hours: "Mon – Fri: 9am – 4pm",
    phone: "(512) 943-0700",
    tags: ["Food pantry", "Community support"],
    category: "food",
    image: "assets/resources_pictures/kitchen.jpg"
},

{
    id: 2,
    title: "Helping Hands of Georgetown",
    subtitle: "Free community meals",
    specialty: "Meal service",
    description: "Providing meals and groceries to neighbors in need.",
    fullDescription:
        "Helping Hands of Georgetown serves daily meals and distributes groceries to individuals and families experiencing hardship. Volunteers provide a welcoming environment and support for the community.",

    address: "102 W 8th St, Georgetown, TX 78626",
    hours: "Mon – Fri: 11am – 2pm",
    phone: "(512) 868-9544",
    tags: ["Free meals", "Community volunteers"],
    category: "food",
    image: "assets/resources_pictures/bistro.jpg"
},

/* =================================================
  STORES / MARKETS
================================================= */

{
    id: 3,
    title: "H-E-B Georgetown",
    subtitle: "Full grocery market",
    specialty: "Groceries",
    description: "A major grocery store serving the Georgetown community.",
    fullDescription:
        "H-E-B offers fresh produce, meats, pantry goods, and prepared meals. Many residents rely on the store for affordable groceries and community food drives.",

    address: "4500 Williams Dr, Georgetown, TX 78633",
    hours: "Mon – Sun: 6am – 11pm",
    phone: "(512) 863-4427",
    tags: ["Groceries", "Local market"],
    category: "store",
    image: "assets/resources_pictures/market.jpg"
},

{
    id: 4,
    title: "Georgetown Farmers Market",
    subtitle: "Local produce market",
    specialty: "Farmers market",
    description: "Fresh produce and handmade goods from local vendors.",
    fullDescription:
        "The Georgetown Farmers Market brings together local farmers and artisans offering fresh fruits, vegetables, baked goods, and crafts every weekend.",

    address: "2 Texas Dr, Georgetown, TX 78626",
    hours: "Sat: 8:30am – 1pm",
    phone: "(512) 966-7625",
    tags: ["Fresh produce", "Local vendors"],
    category: "store",
    image: "assets/resources_pictures/popmarket.jpg"
},

/* =================================================
  HEALTH
================================================= */

{
    id: 5,
    title: "Georgetown Community Clinic",
    subtitle: "Affordable healthcare services",
    specialty: "Primary care",
    description: "Providing medical care regardless of ability to pay.",
    fullDescription:
        "Georgetown Community Clinic offers primary care, behavioral health services, dental care, and pharmacy services to support community health.",

    address: "205 E University Ave, Georgetown, TX 78626",
    hours: "Mon – Fri: 8am – 5pm",
    phone: "(512) 869-2820",
    tags: ["Low-cost", "Primary care"],
    category: "health",
    image: "assets/resources_pictures/health-clinic.jpg"
},

{
    id: 6,
    title: "Baylor Scott & White Clinic – Georgetown",
    subtitle: "Comprehensive medical care",
    specialty: "Hospital & clinic",
    description: "Full-service healthcare for Georgetown residents.",
    fullDescription:
        "Baylor Scott & White provides primary care, specialty medicine, urgent care, and preventative health services for individuals and families.",

    address: "4945 Williams Dr, Georgetown, TX 78633",
    hours: "Mon – Fri: 8am – 5pm",
    phone: "(512) 819-0500",
    tags: ["Healthcare", "Hospital system"],
    category: "health",
    image: "assets/resources_pictures/counseling.jpg"
},

/* =================================================
  EDUCATION
================================================= */

{
    id: 7,
    title: "Purl Elementary School",
    subtitle: "Elementary education",
    specialty: "K–5 school",
    description: "A welcoming environment for young learners.",
    fullDescription:
        "Purl Elementary provides foundational education, extracurricular programs, and community involvement opportunities for students in Georgetown ISD.",

    address: "1953 Maple St, Georgetown, TX 78626",
    hours: "Mon – Fri: 7:30am – 3pm",
    phone: "(512) 943-5000",
    tags: ["K–5", "Public school"],
    category: "education",
    image: "assets/resources_pictures/elementary.jpg"
},

{
    id: 8,
    title: "Tippit Middle School",
    subtitle: "Middle school education",
    specialty: "Grades 6–8",
    description: "Preparing students for high school success.",
    fullDescription:
        "Tippit Middle School offers academic programs, athletics, arts, and leadership opportunities to help students develop both academically and socially.",

    address: "1601 Leander Rd, Georgetown, TX 78628",
    hours: "Mon – Fri: 8am – 4pm",
    phone: "(512) 943-5000",
    tags: ["6–8", "Clubs", "Athletics"],
    category: "education",
    image: "assets/resources_pictures/middle-school.jpg"
},

{
    id: 9,
    title: "Georgetown High School",
    subtitle: "High school education",
    specialty: "College & career prep",
    description: "Preparing students for college and future careers.",
    fullDescription:
        "Georgetown High School provides academic pathways, athletics, fine arts programs, and career preparation opportunities for grades 9–12.",

    address: "2211 N Austin Ave, Georgetown, TX 78626",
    hours: "Mon – Fri: 8:30am – 4pm",
    phone: "(512) 943-5100",
    tags: ["9–12", "Career prep"],
    category: "education",
    image: "assets/resources_pictures/high-school.jpg"
},

{
    id: 10,
    title: "Georgetown Public Library",
    subtitle: "Community learning center",
    specialty: "Library",
    description: "Books, study rooms, and community programs.",
    fullDescription:
        "The Georgetown Public Library provides books, digital resources, study areas, workshops, and youth programs for residents of all ages.",

    address: "402 W 8th St, Georgetown, TX 78626",
    hours: `Mon – Thurs: 9am – 8pm
Fri – Sat: 9am – 6pm
Sun: 1pm – 6pm`,
    phone: "(512) 930-3551",
    tags: ["Learning", "Community"],
    category: "education",
    image: "assets/resources_pictures/library1.jpg"
},

/* =================================================
  PARKS & REC
================================================= */

{
    id: 11,
    title: "San Gabriel Park",
    subtitle: "Major Georgetown park",
    specialty: "Outdoor recreation",
    description: "Trails, sports fields, and picnic areas.",
    fullDescription:
        "San Gabriel Park is one of Georgetown’s largest parks, featuring walking trails, sports facilities, playgrounds, and scenic river access.",

    address: "445 E Morrow St, Georgetown, TX 78626",
    hours: "Mon – Sun: Dawn – 10pm",
    phone: "(512) 930-3595",
    tags: ["Trails", "Sports"],
    category: "parks",
    image: "assets/resources_pictures/park1.jpg"
},

{
    id: 12,
    title: "Blue Hole Park",
    subtitle: "Scenic lagoon park",
    specialty: "Nature park",
    description: "A popular swimming and relaxation spot.",
    fullDescription:
        "Blue Hole Park features a scenic lagoon along the San Gabriel River, walking trails, limestone bluffs, and shaded picnic areas.",

    address: "100 Blue Hole Park, Georgetown, TX 78626",
    hours: "Mon – Sun: Dawn – Dusk",
    phone: "(512) 930-3595",
    tags: ["Nature", "Swimming"],
    category: "parks",
    image: "assets/resources_pictures/park2.jpg"
}

];