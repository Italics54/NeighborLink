export interface Story {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  community: string;
  comments: { user: string; text: string }[],
}

export const STORIES: Story[] = [
{
  id: "neighborhood-book-swap",
  title: "Neighborhood Book Swap",
  category: "Community",
  community: "Round Rock",
  description: "Families gathered at the community center to exchange books, encouraging young readers and giving stories a second life.",
  content: `
    <p>The community center hosted a book swap where families brought gently used books to share with others. Tables were lined with colorful covers, classic stories, and brand-new adventures waiting to be discovered by readers of all ages.</p>
    <p>Children wandered from table to table, flipping through pages, laughing with friends, and proudly showing their favorite finds to their parents. Some kids even created small reading corners on the floor where they could start reading right away.</p>
    <p>Parents exchanged reading recommendations, talked about school programs, and shared memories of books they loved growing up. Conversations flowed easily as neighbors connected over a shared love of learning and storytelling.</p>
    <p>Volunteers helped organize the books by age group and genre, making it easier for everyone to find something that matched their interests. A small sign-up sheet encouraged families to join future reading events and story nights.</p>
    <p>As the afternoon continued, laughter and excitement filled the room. New friendships formed between families who had never met before, creating a welcoming and supportive atmosphere.</p>
    <p>By the end of the event, many books had found new homes, and neighbors left feeling inspired, connected, and excited for the next community gathering.</p>
  `,
  comments: [
    { user: "Mustafa", text: "My kids found so many fun books!" },
    { user: "Ryan", text: "Such a great way to reuse and share." },
    { user: "Fatima", text: "Loved meeting other families here." },
    { user: "Lucas", text: "Hope they do this every month." }
  ]
},
{
  id: "community-garden-harvest",
  title: "Community Garden Harvest Day",
  category: "Sustainability",
    community: "Round Rock",
  description: "Volunteers harvested fresh vegetables and donated baskets of produce to local families and food pantries.",
  content: `
    <p>Neighbors gathered at the community garden to harvest fresh vegetables grown throughout the season. Rows of tomatoes, peppers, carrots, and leafy greens were carefully picked as volunteers worked together under the warm sunlight.</p>
    <p>Families arrived with baskets and gloves, ready to help and learn more about where their food comes from. Children asked questions about how plants grow and proudly carried small bundles of vegetables to the collection table.</p>
    <p>Experienced gardeners shared tips about composting, watering schedules, and planting for the next season. The garden became a classroom filled with practical knowledge and friendly advice.</p>
    <p>As the harvest continued, neighbors paused to enjoy snacks, talk about favorite recipes, and share stories from past community events. The peaceful setting made it easy to relax and connect.</p>
    <p>Many of the produce baskets were donated to local families and food pantries, ensuring the fresh food reached people who needed it most. Volunteers carefully labeled and packed each basket with care.</p>
    <p>The day ended with smiles, group photos, and a deep sense of pride in what the community was able to accomplish together.</p>
  `,
  comments: [
    { user: "Zephan", text: "It felt amazing to help give back" },
    { user: "Tom", text: "The tomatoes were incredible" },
    { user: "Nora", text: "Such a peaceful and meaningful day" },
    { user: "Sam", text: "Proud of our community for this" }
  ]
},
{
  id: "bike-safety-day",
  title: "Bike Safety Day",
  category: "Wellness",
  community: "Round Rock",
  description: "Local officers and volunteers taught kids road safety skills and gave away free helmets and reflective gear.",
  content: `
    <p>Bike Safety Day brought families together to learn important road rules and safe riding habits. Local officers and volunteers welcomed everyone and explained the purpose of the event.</p>
    <p>Children gathered around as instructors demonstrated hand signals, traffic signs, and how to properly stop and look before crossing streets. Parents listened closely so they could reinforce the lessons at home.</p>
    <p>An obstacle course was set up where kids could practice turning, stopping, and riding around cones in a fun and supportive environment. Cheers and applause followed every successful lap.</p>
    <p>Volunteers fitted helmets for each child and showed them how to adjust the straps for a secure and comfortable fit. Reflective gear was handed out to improve visibility while riding.</p>
    <p>Families took time to ask questions and share their own experiences about biking around the neighborhood. The open conversations helped build confidence and trust.</p>
    <p>By the end of the day, everyone left feeling informed, prepared, and excited to ride safely around town.</p>
  `,
  comments: [
    { user: "Yasemin", text: "My son loved the bike course" },
    { user: "Leila", text: "So thankful for the free helmets" },
    { user: "Aaron", text: "Great learning event for kids" },
    { user: "Sofia", text: "Fun and educational at the same time" }
  ]
},
{
  id: "kindness-wall",
  title: "The Kindness Wall",
  category: "Culture",
  community: "Round Rock",
  description: "Students created a public wall filled with positive notes, inspiring messages, and artwork for everyone to enjoy.",
  content: `
    <p>The Kindness Wall was designed by local students as a space to share encouraging words and colorful artwork. Bright paint, handwritten notes, and creative drawings filled the wall with positive energy.</p>
    <p>Students worked together to plan different sections of the wall, each one focused on themes like gratitude, friendship, and hope. Their teamwork turned the project into a true community effort.</p>
    <p>People walking by stopped to read the messages and smile at the artwork. Some visitors even took photos to share the inspiring notes with friends and family.</p>
    <p>A small table nearby offered markers and paper so anyone could add their own message. Children and adults alike took turns leaving kind words for strangers to find.</p>
    <p>Over time, the wall grew fuller and more colorful, reflecting the many voices and thoughts of the neighborhood. Each new note added another layer of meaning.</p>
    <p>The wall became a daily reminder that even small acts of kindness can brighten someone’s day and bring people closer together.</p>
  `,
  comments: [
    { user: "Nour", text: "This made my day so much better" },
    { user: "Imran", text: "Such a beautiful idea" },
    { user: "Claire", text: "My kids loved adding a note" },
    { user: "Victor", text: "Positvty really spreads" }
  ]
},
{
  id: "pet-adoption-fair",
  title: "Pet Adoption Fair",
  category: "Community",
  community: "Round Rock",
  description: "Local shelters helped over 20 pets find new homes during a joyful weekend adoption event.",
  content: `
    <p>The pet adoption fair welcomed families to meet animals from local shelters who were looking for loving homes. Tents and booths were set up to introduce visitors to dogs, cats, and other small pets.</p>
    <p>Volunteers shared each pet’s story, explaining their personality, favorite activities, and how they had arrived at the shelter. These stories helped families feel a deeper connection.</p>
    <p>Children spent time playing with puppies and gently petting kittens, while parents asked questions about care, training, and daily routines. The area was filled with laughter and happy moments.</p>
    <p>Information tables provided guides on responsible pet ownership, including feeding, vet visits, and creating a safe home environment. Families took brochures to learn more.</p>
    <p>As adoptions were finalized, cheers and applause followed each family that left with a new companion. Volunteers celebrated every successful match.</p>
    <p>By the end of the weekend, more than 20 pets had found new homes, starting many joyful journeys with their new families.</p>
  `,
  comments: [
    { user: "Hamzah", text: "We adopted the sweetest puppy" },
    { user: "Henry", text: "So many happy tails today" },
    { user: "Zara", text: "Love seeing animals find homes" },
    { user: "Eli", text: "This was such a heartwarming event" }
  ]
},
{
  id: "outdoor-movie-night",
  title: "Outdoor Movie Night",
  category: "Culture",
  community: "Round Rock",
  description: "Families gathered with blankets and snacks for a free movie screening under the stars at the town park.",
  content: `
    <p>The town park turned into an open-air theater as families arrived with blankets, chairs, and baskets of snacks. Soft music played in the background as people found their spots on the grass.</p>
    <p>Children ran around with friends while parents greeted neighbors and set up cozy seating areas. The park slowly filled with excitement and laughter.</p>
    <p>As the sun set, the big screen lit up and the movie began. Cheers and applause filled the air as the opening scene appeared.</p>
    <p>Families shared popcorn, drinks, and favorite treats while enjoying the film together. The relaxed atmosphere made the night feel special and welcoming.</p>
    <p>During a short intermission, neighbors chatted and took photos under the glowing lights. Many talked about coming back for the next movie night.</p>
    <p>The evening ended with smiles, tired kids, and warm goodbyes as families packed up and headed home with lasting memories.</p>
  `,
  comments: [
    { user: "Jeremiah", text: "Such a fun night for the kids" },
    { user: "Omar", text: "Loved the outdoor setup" },
    { user: "Tina", text: "Great community vibes" },
    { user: "Josh", text: "Hope they do this again soon" }
  ]
},
{
  id: "youth-art-showcase",
  title: "Youth Art Showcase",
  category: "Education",
  community: "Round Rock",
  description: "Young artists displayed paintings, sculptures, and digital art at the community hall, celebrating creativity.",
  content: `
    <p>The Youth Art Showcase highlighted the creativity of local students through paintings, sculptures, and digital art displayed throughout the community hall.</p>
    <p>Each artist had a small space to present their work, along with a short description of their inspiration and creative process. Visitors enjoyed reading these stories as they explored.</p>
    <p>Families and friends walked through the displays, stopping to admire details and ask questions about the techniques used in each piece.</p>
    <p>Teachers and mentors offered encouragement and praise, helping young artists feel confident and proud of their accomplishments.</p>
    <p>A small stage area allowed a few students to speak about what art means to them and how it helps them express their feelings and ideas.</p>
    <p>The event ended with applause, group photos, and a celebration of imagination and dedication.</p>
  `,
  comments: [
    { user: "Sarah", text: "The talent here is amazing" },
    { user: "Bilal", text: "So proud of our young artists" },
    { user: "Monica", text: "Such inspiring artwork" },
    { user: "Kevin", text: "Loved every piece on display" }
  ]
},
{
  id: "thank-you-volunteers-day",
  title: "Thank You, Volunteers Day",
  category: "Community",
  community: "Round Rock",
  description: "The city hosted a small celebration to recognize residents who give their time to help schools, parks, and local programs.",
  content: `
    <p>The community came together to honor volunteers who dedicate their time to helping schools, parks, and neighborhood programs.</p>
    <p>Speakers shared stories about how these efforts have improved classrooms, cleaned up public spaces, and supported local families.</p>
    <p>Volunteers were invited to stand and be recognized, receiving applause and kind words from neighbors and city leaders.</p>
    <p>A display board showcased photos from past events, highlighting moments of teamwork and community pride.</p>
    <p>Thank-you cards and small gifts were handed out as a token of appreciation for the many hours of service given.</p>
    <p>The day ended with warm conversations, group photos, and a reminder of how powerful a caring community can be.</p>
  `,
  comments: [
    { user: "Janet", text: "Felt so appreciated toda." },
    { user: "Kareem", text: "Volunteering is always worth it" },
    { user: "Laura", text: "Such a thoughtful event" },
    { user: "Ben", text: "Proud to be part of this community" }
  ]
},
{
  id: "thank-you-volunteers-day",
  title: "Thank You, Volunteers Day",
  category: "Community",
  community: "Georgetown",
  description: "The city hosted a small celebration to recognize residents who give their time to help schools, parks, and local programs.",
  content: `
    <p>The community came together to honor volunteers who dedicate their time to helping schools, parks, and neighborhood programs.</p>
    <p>Speakers shared stories about how these efforts have improved classrooms, cleaned up public spaces, and supported local families.</p>
    <p>Volunteers were invited to stand and be recognized, receiving applause and kind words from neighbors and city leaders.</p>
    <p>A display board showcased photos from past events, highlighting moments of teamwork and community pride.</p>
    <p>Thank-you cards and small gifts were handed out as a token of appreciation for the many hours of service given.</p>
    <p>The day ended with warm conversations, group photos, and a reminder of how powerful a caring community can be.</p>
  `,
  comments: [
    { user: "Janet", text: "Felt so appreciated toda." },
    { user: "Kareem", text: "Volunteering is always worth it" },
    { user: "Laura", text: "Such a thoughtful event" },
    { user: "Ben", text: "Proud to be part of this community" }
  ]
}
];
