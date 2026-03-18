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
  id: "georgetown-volunteer-day",
  title: "Volunteers Honored at Georgetown Square",
  category: "Community",
  community: "Georgetown",
  description: "Residents gathered at the historic downtown Square to celebrate volunteers who support local schools, parks, and city events.",
  content: `
    <p>The heart of Georgetown came alive as residents gathered at the historic downtown Square to celebrate the volunteers who help keep the community thriving. The courthouse lawn filled with families, city leaders, and neighbors ready to recognize those who give their time year-round.</p>

    <p>Many of the volunteers had supported well-known local events like the Red Poppy Festival, school programs, and parks clean-up efforts along the San Gabriel River. Their contributions have become an essential part of what makes Georgetown feel welcoming and connected.</p>

    <p>Speakers shared stories about volunteers helping organize community events, mentoring students, and maintaining public spaces. Each story highlighted how small acts of service add up to a big impact across the city.</p>

    <p>As names were called, volunteers stepped forward to warm applause, some surprised and others proudly smiling as friends and family cheered them on. Children waved and took photos while local musicians played softly in the background.</p>

    <p>Nearby, a display featured photos from past events—festival booths, river cleanups, and neighborhood gatherings—reminding everyone of the shared experiences that bring the community together.</p>

    <p>The celebration ended with neighbors lingering on the Square, enjoying conversations and making plans to volunteer in upcoming events, continuing Georgetown’s strong tradition of community involvement.</p>
  `,
  comments: [
    { user: "Elena", text: "Love seeing the Square filled with community spirit" },
    { user: "Marcus", text: "Georgetown volunteers are truly amazing" },
    { user: "David", text: "Proud to be part of events like this" },
    { user: "Sophie", text: "The Red Poppy Festival mention made it feel so real!" }
  ]
},
{
  id: "blue-hole-summer-day",
  title: "Summer Afternoon at Blue Hole Park",
  category: "Wellness",
  community: "Georgetown",
  description: "Families cooled off and relaxed by the San Gabriel River at Blue Hole Park during a warm Texas afternoon.",
  content: `
    <p>Blue Hole Park was full of life as families gathered along the San Gabriel River to cool off from the Texas heat. The clear water and shaded limestone cliffs made it a perfect summer escape.</p>

    <p>Children splashed in the shallow areas while others jumped carefully from low ledges into deeper water. Laughter echoed across the park as friends and families enjoyed the refreshing river.</p>

    <p>Parents set up picnic blankets under large trees, unpacking snacks and drinks while keeping an eye on the kids. Some relaxed with books while others joined in the water.</p>

    <p>Joggers and walkers passed by on the nearby trail, adding to the steady flow of activity throughout the park.</p>

    <p>As the afternoon went on, people gathered on the grassy hill to dry off and watch the peaceful river flow by.</p>

    <p>The day ended with golden sunlight reflecting off the water, leaving visitors feeling relaxed and grateful for one of Georgetown’s favorite outdoor spots.</p>
  `,
  comments: [
    { user: "Noah", text: "Blue Hole is always a good idea" },
    { user: "Ava", text: "Perfect place to beat the heat" },
    { user: "Ethan", text: "Such a hidden gem" },
    { user: "Maya", text: "We go here every summer" }
  ]
},
{
  id: "georgetown-farmers-market",
  title: "Saturday Morning at the Farmers Market",
  category: "Sustainability",
  community: "Georgetown",
  description: "Locals gathered at the Georgetown Farmers Market to shop fresh produce, baked goods, and handmade items.",
  content: `
    <p>Early Saturday morning, the Georgetown Square filled with vendors setting up tents for the weekly Farmers Market. Fresh produce, baked goods, and handmade crafts lined the sidewalks.</p>

    <p>Residents walked from booth to booth, greeting familiar faces and sampling local honey, jams, and fresh bread. Farmers proudly displayed seasonal fruits and vegetables.</p>

    <p>Live acoustic music played in the background, adding to the relaxed and welcoming atmosphere of the market.</p>

    <p>Families brought their children along, teaching them about local food and supporting small businesses. Many stopped to enjoy breakfast tacos and coffee from nearby vendors.</p>

    <p>Conversations between neighbors and vendors created a strong sense of connection and community.</p>

    <p>By late morning, bags were filled with fresh ingredients and handmade goods, and people left the Square ready to enjoy the rest of their weekend.</p>
  `,
  comments: [
    { user: "Daniel", text: "Best produce in town" },
    { user: "Sophia", text: "Love the local vibe here" },
    { user: "Ali", text: "Those breakfast tacos hit every time" },
    { user: "Grace", text: "Great way to start the weekend" }
  ]
},
{
  id: "san-gabriel-cleanup",
  title: "San Gabriel River Cleanup Day",
  category: "Community",
  community: "Georgetown",
  description: "Volunteers came together to clean up trails and riverbanks along the San Gabriel River.",
  content: `
    <p>Volunteers gathered along the San Gabriel River for a community cleanup day focused on preserving one of Georgetown’s most treasured natural spaces.</p>

    <p>Equipped with gloves and trash bags, families and students spread out along the trails and riverbanks, collecting litter and debris.</p>

    <p>Local organizers provided guidance on recycling and protecting the environment, turning the event into both a service project and learning experience.</p>

    <p>Children worked alongside adults, learning the importance of caring for nature and taking pride in their efforts.</p>

    <p>As piles of collected trash grew, so did the sense of accomplishment among volunteers.</p>

    <p>The day ended with a cleaner river, stronger connections, and a shared commitment to keeping Georgetown beautiful.</p>
  `,
  comments: [
    { user: "Jason", text: "Felt great to give back" },
    { user: "Leah", text: "The river looks so much better" },
    { user: "Omar", text: "Awesome community turnout" },
    { user: "Nina", text: "We’ll definitely join again" }
  ]
},
{
  id: "palace-theatre-night",
  title: "Evening at the Palace Theatre",
  category: "Culture",
  community: "Georgetown",
  description: "Residents enjoyed a live performance at the historic Palace Theatre in downtown Georgetown.",
  content: `
    <p>The historic Palace Theatre lit up the Georgetown Square as residents gathered for an evening performance. The vintage marquee welcomed guests into a night of entertainment.</p>

    <p>Inside, the cozy theater filled with excitement as families, couples, and friends found their seats.</p>

    <p>The performance featured talented local actors who brought energy and passion to the stage, earning laughter and applause from the audience.</p>

    <p>During intermission, guests chatted in the lobby, sharing thoughts about the show and enjoying refreshments.</p>

    <p>The second half continued to captivate the audience, ending with a standing ovation.</p>

    <p>As people stepped back onto the Square, the warm evening air and glowing lights made the night feel complete.</p>
  `,
  comments: [
    { user: "Rachel", text: "Such a charming theater" },
    { user: "Brian", text: "Loved the performance" },
    { user: "Zoe", text: "Georgetown has hidden gems" },
    { user: "Adam", text: "Perfect date night spot" }
  ]
},
{
  id: "christmas-on-the-square",
  title: "Christmas on the Square",
  category: "Culture",
  community: "Georgetown",
  description: "Families gathered in downtown Georgetown to enjoy holiday lights, shopping, and festive performances.",
  content: `
    <p>Downtown Georgetown glowed with thousands of lights as Christmas on the Square brought holiday cheer to the community. The historic courthouse stood at the center, beautifully decorated for the season.</p>

    <p>Families walked through the Square, stopping at local shops and holiday booths filled with gifts, ornaments, and seasonal treats.</p>

    <p>Children lined up to meet Santa while choirs and local performers filled the air with classic holiday songs.</p>

    <p>Hot cocoa and fresh pastries kept everyone warm as neighbors greeted each other and shared in the festive spirit.</p>

    <p>As night fell, the lights shined even brighter, creating a magical atmosphere that drew smiles from visitors of all ages.</p>

    <p>The evening ended with families taking photos and making memories in one of Georgetown’s most beloved holiday traditions.</p>
  `,
  comments: [
    { user: "Emma", text: "The lights were absolutely beautiful" },
    { user: "Carlos", text: "Felt like a movie scene" },
    { user: "Layla", text: "My kids loved meeting Santa" },
    { user: "Noor", text: "Such a cozy holiday vibe" }
  ]
},
{
  id: "southwestern-move-in",
  title: "Southwestern University Move-In Day",
  category: "Education",
  community: "Georgetown",
  description: "Students and families arrived on campus for move-in day at Southwestern University, marking the start of a new school year.",
  content: `
    <p>Excitement filled the air as students arrived at Southwestern University for move-in day. Cars lined the campus as families unloaded boxes, suitcases, and dorm essentials.</p>

    <p>Volunteers and student leaders greeted newcomers, helping carry belongings and guide them to their residence halls.</p>

    <p>Parents shared hugs and encouragement while students began decorating their rooms and meeting their roommates.</p>

    <p>The campus buzzed with energy as new friendships began forming across hallways and common areas.</p>

    <p>Local businesses welcomed students with signs and special offers, connecting the university with the Georgetown community.</p>

    <p>By evening, the campus settled into a new rhythm as students prepared for the year ahead.</p>
  `,
  comments: [
    { user: "Jake", text: "Brings back so many memories" },
    { user: "Anika", text: "Such an exciting day" },
    { user: "Trevor", text: "Campus looked great this year" },
    { user: "Mia", text: "Welcome to all the new students!" }
  ]
},{
  id: "first-friday-georgetown",
  title: "First Friday on the Square",
  category: "Culture",
  community: "Georgetown",
  description: "Local shops stayed open late as residents enjoyed music, art, and shopping during First Friday downtown.",
  content: `
    <p>The Georgetown Square came alive for First Friday as shops stayed open late and welcomed residents for an evening of music, art, and community.</p>

    <p>String lights lit up the sidewalks while local musicians performed outside storefronts, creating a lively and inviting atmosphere.</p>

    <p>Visitors explored boutiques, galleries, and restaurants, many offering specials and small treats for the occasion.</p>

    <p>Artists displayed their work along the Square, giving people a chance to connect with local creativity.</p>

    <p>Friends gathered to stroll, shop, and enjoy the relaxed pace of the evening.</p>

    <p>The event brought together people of all ages, turning an ordinary night into a memorable community experience.</p>
  `,
  comments: [
    { user: "Olivia", text: "First Friday is my favorite tradition" },
    { user: "Evan", text: "Love the live music downtown" },
    { user: "Huda", text: "Such a fun night out" },
    { user: "Liam", text: "The Square always feels special" }
  ]
},
{
  id: "garey-park-day",
  title: "Morning at Garey Park",
  category: "Wellness",
  community: "Georgetown",
  description: "Families and hikers explored trails and open spaces at Garey Park on a sunny weekend morning.",
  content: `
    <p>Garey Park welcomed visitors early in the morning as families and outdoor enthusiasts arrived to enjoy its wide open spaces and scenic trails.</p>

    <p>Hikers set off along winding paths, taking in the peaceful views of rolling hills and native Texas landscapes.</p>

    <p>Children played in open fields and playground areas while parents relaxed nearby or joined in the fun.</p>

    <p>Dog owners walked their pets along designated trails, adding to the lively yet calm atmosphere.</p>

    <p>Picnic areas filled gradually as families unpacked breakfast and enjoyed time together outdoors.</p>

    <p>The park provided a refreshing escape, leaving visitors energized and ready for the rest of their day.</p>
  `,
  comments: [
    { user: "Nathan", text: "One of the best parks around" },
    { user: "Isabella", text: "So peaceful out here" },
    { user: "Yusuf", text: "Perfect for a morning walk" },
    { user: "Chloe", text: "Kids had a blast" }
  ]
},
{
  id: "georgetown-library-storytime",
  title: "Story Time at the Georgetown Library",
  category: "Education",
  community: "Georgetown",
  description: "Young children gathered for a fun and interactive story time session at the Georgetown Public Library.",
  content: `
    <p>The Georgetown Public Library hosted a lively story time session where young children gathered to listen, learn, and participate.</p>

    <p>The librarian read colorful picture books aloud, using expressive voices and gestures to bring each story to life.</p>

    <p>Children sat in a circle, laughing, clapping, and joining in during interactive parts of the stories.</p>

    <p>Parents and caregivers watched with smiles as their children engaged with reading in a fun and welcoming environment.</p>

    <p>After the stories, kids enjoyed songs and simple activities that encouraged creativity and movement.</p>

    <p>The session ended with families browsing books together, many checking out new favorites to take home.</p>
  `,
  comments: [
    { user: "Aisha", text: "My toddler loved this so much" },
    { user: "Ben", text: "Great program for kids" },
    { user: "Sara", text: "The librarian was amazing" },
    { user: "Owen", text: "We come every week" }
  ]
}
];
