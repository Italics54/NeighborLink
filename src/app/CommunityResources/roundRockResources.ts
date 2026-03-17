import { ResourceCard } from "../resources/utils";

export const RoundRockresourcesCards: ResourceCard[] = [

    /* =================================================
      FOOD
    ================================================= */

    {
        id: 1,
        title: "Home Kitchen",
        subtitle: "Free community meals",
        specialty: "Meal service",
        description: "Swing by for a warm plate and a friendly chat.",
        fullDescription:
            "Home Kitchen provides hot, nutritious meals daily in a welcoming, no-questions-asked environment where everyone is welcome.",

        address: "2471 AW Grimes Blvd, Round Rock, TX 78664",
        hours: "Tues - Sun: 7am – 3pm",
        phone: "(555) 123-4567",
        tags: ["Open to all", "Walk-ins"],
        category: "food",
        image: "assets/resources_pictures/kitchen.jpg"
    },

    {
        id: 12,
        title: "Purely Provisions",
        subtitle: "Free evening meals",
        specialty: "Community dining",
        description: "Come hungry, leave happy.",
        fullDescription:
            "A cozy café-style space serving hot, homemade dinners every evening. Volunteers and neighbors gather for food and connection.",

        address: "212 W Main St, Round Rock, TX 78664",
        hours: `Mon - Sat: 7am – 11pm
      Sun: 10am - 2pm`,
        phone: "(555) 555-4321",
        tags: ["Soul Food", "No Cost"],
        category: "food",
        image: "assets/resources_pictures/bistro.jpg"
    },


    /* =================================================
      STORE / MARKETS
    ================================================= */

    {
        id: 6,
        title: "H-E-B Market",
        subtitle: "Fresh grocery pantry",
        specialty: "Groceries",
        description: "Your neighborhood pantry with fresh groceries.",
        fullDescription:
            "Residents can pick up produce, canned goods, and staples weekly. Volunteers help ensure everyone leaves with enough food for their household.",

        address: "250 University Blvd, Round Rock, TX 78665",
        hours: "Mon - Sun: 6am – 11pm",
        phone: "(555) 777-8888",
        tags: ["Fresh Finds", "Local"],
        category: "store",
        image: "assets/resources_pictures/market.jpg"
    },

    {
        id: 7,
        title: 'Round Rock Farmers Market',
        subtitle: "Community pop-up pantry",
        specialty: "Food share",
        description: "A pop-up market vibe where the community shares what they have.",
        fullDescription:
            "Local donations power this friendly Sunday market, providing groceries and essentials while strengthening neighbor-to-neighbor support.",

        address: "2111 I 35 N Frontage Rd, Round Rock, TX 78664",
        hours: "Sat: 10am – 2pm",
        phone: "(555) 444-3333",
        tags: ["Community First", "Groceries"],
        category: "store",
        image: "assets/resources_pictures/popmarket.jpg"
    },


    /* =================================================
      HEALTH
    ================================================= */

    {
        id: 2,
        title: "Sacred Heart Community Clinic",
        subtitle: "Affordable primary care",
        specialty: "Healthcare",
        description: "Keeping the neighborhood healthy without breaking the bank.",
        fullDescription:
            "From checkups and flu shots to preventative care, our clinic offers affordable services for families and individuals.",

        address: "620 Round Rock W Dr, Round Rock, TX 78681",
        hours: `Mon: 8am – 3pm 
      Tues: 8am – 5pm
      Wed: Closed
      Thurs: 10am - 5pm
      Fri: 8am - 12pm
      Sat & Sun: Closed`,
        phone: "(555) 987-6543",
        tags: ["Low-cost", "Wellness"],
        category: "health",
        image: "assets/resources_pictures/health-clinic.jpg"
    },

    {
        id: 5,
        title: "Round Rock Area Serving Center",
        subtitle: "Emergency housing support",
        specialty: "Housing",
        description: "A safe harbor when things get tough.",
        fullDescription:
            "Hope Shelter offers temporary housing, case management, and essential services to help families regain stability.",

        address: "1099 E Main St, Round Rock, TX 78664",
        hours: "Mon - Sun: 10am - 4pm",
        phone: "(555) 864-2097",
        tags: ["Safe Space", "Housing"],
        category: "health",
        image: "assets/resources_pictures/shelter.jpg"
    },

    {
        id: 8,
        title: "Lone Star Circle of Care at Round Rock Health Clinic",
        subtitle: "Mental wellness counseling",
        specialty: "Counseling",
        description: "Feeling overwhelmed? Come talk it out.",
        fullDescription:
            "Licensed counselors offer individual and group sessions in a safe, judgment-free environment to support mental wellness.",

        address: "2120 N Mays St # 430, Round Rock, TX 78664",
        hours: "Mon – Thurs: 7:40am – 5:40pm",
        phone: "(555) 555-0199",
        tags: ["Wellness", "Support"],
        category: "health",
        image: "assets/resources_pictures/counseling.jpg"
    },


    /* =================================================
      EDUCATION
    ================================================= */

    {
        id: 3,
        title: "Herrington Elementary School",
        subtitle: "Elementary School",
        specialty: "Elementary education",
        description: "A nurturing start for young learners.",
        fullDescription:
            "Serving grades K–5, Endeavor focuses on foundational learning, creativity, and building confidence in a safe and supportive environment.",

        address: "2850 Paloma Lake Blvd, Round Rock, TX 78665",
        hours: "Mon - Fri: 7:30am – 3pm",
        phone: "(555) 246-8101",
        tags: ["K–5", "After-school care"],
        category: "education",
        image: "assets/resources_pictures/elementary.jpg"
    },

    {
        id: 13,
        title: "Hopewell Middle School",
        subtitle: "Middle School",
        specialty: "Middle school education",
        description: "Helping students grow academically and socially.",
        fullDescription:
            "Grades 6–8 programs focused on leadership, teamwork, and preparing students for high school success.",

        address: "1535 Gulf Way, Round Rock, TX 78665",
        hours: "Mon - Fri: 7:30am – 4:30pm",
        phone: "(555) 678-9012",
        tags: ["6–8", "Clubs", "Sports"],
        category: "education",
        image: "assets/resources_pictures/middle-school.jpg"
    },

    {
        id: 9,
        title: "Round Rock High School",
        subtitle: "High School",
        specialty: "High school & technology pathways",
        description: "Where the tech-heads and creators meet.",
        fullDescription:
            "A grades 9–12 high school featuring technology labs, coding courses, and career pathways to prepare students for college or the workforce.",

        address: "201 Deep Wood Dr, Round Rock, TX 78681",
        hours: "Mon-Fri: 9am – 4:20pm",
        phone: "(555) 321-4321",
        tags: ["9–12", "Tech-focused", "Career prep"],
        category: "education",
        image: "assets/resources_pictures/high-school.jpg"
    },


    /* =================================================
      PARKS & REC
    ================================================= */

    {
        id: 4,
        title: "Clay Madsen Recreation Center",
        subtitle: "After-school safe space",
        specialty: "Recreation",
        description: "Sports, clubs, and community programs.",
        fullDescription:
            "Basketball courts, fitness classes, art programs, and youth clubs provide a safe and active environment for all ages.",

        address: "1600 Gattis School Rd, Round Rock, TX 78664",
        hours: `Mon - Thurs: 5am – 10pm
      Fri: 5am - 9pm
      Sat: 7am - 7pm
      Sun: 10am - 6pm`,
        phone: "(555) 135-7913",
        tags: ["All ages", "Active"],
        category: "parks",
        image: "assets/resources_pictures/recreation.jpg"
    },

    {
        id: 10,
        title: "Old Settlers Park",
        subtitle: "Outdoor recreation space",
        specialty: "Park",
        description: "Perfect for picnics and soccer games.",
        fullDescription:
            "Open green fields, walking trails, and playgrounds make Heritage Park a favorite family gathering spot.",

        address: "3300 E Palm Valley Blvd, Round Rock, TX 78665",
        hours: "Mon - Sun: Dawn – 12am",
        phone: "(555) 800-PARK",
        tags: ["Dog friendly", "Outdoors"],
        category: "parks",
        image: "assets/resources_pictures/park1.jpg"
    },

    {
        id: 11,
        title: "Round Rock West Park",
        subtitle: "Sports & activity park",
        specialty: "Sports",
        description: "Sand volleyball and late-night courts.",
        fullDescription:
            "Basketball courts, volleyball pits, and open space for pick-up games make this park lively day and night.",

        address: "500 Round Rock W Dr, Round Rock, TX 78681",
        hours: "Mon - Sun: Dawn – 12am",
        phone: "(555) 900-PLAY",
        tags: ["Sports", "Late Night"],
        category: "parks",
        image: "assets/resources_pictures/park2.jpg"
    },
    {
        id: 14,
        title: "Round Rock Public Library",
        subtitle: "Community & Learning Center",
        specialty: "Library Services",
        description: "Books, study spaces, and community programs for all ages.",
        fullDescription:
            "HPL offers a wide collection of books, digital resources, quiet study areas, and engaging programs like workshops and reading clubs for the entire community.",

        address: "200 E Liberty Ave, Round Rock, TX 78664",
        hours: `Mon - Thurs: 9am – 9pm
      Fri & Sat: 9am - 6pm
      Sun: 1pm - 6pm`,
        phone: "(555) 900-READ",
        tags: ["Library", "Community", "Learning"],
        category: "education",
        image: "assets/resources_pictures/library1.jpg"
    }
];