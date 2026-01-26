export interface Story {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  comments: { user: string; text: string }[],
}

export const STORIES: Story[] = [
  {
    id: 'mural-project',
    title: 'The Mural Project',
    category: 'Culture',
    description: 'Local artists transformed the downtown underpass into a vibrant timeline of our community history, celebrating our diverse heritage.',
    content: `
      <p>The downtown underpass has been transformed into a vibrant mural, celebrating the rich history and diversity of our community. Local artists contributed their unique styles, blending past and present in colorful storytelling.</p>
      <p>Visitors can now walk through the mural corridor and explore different eras of the neighborhood, from early settlement to modern cultural achievements.</p>
    `,
    comments: [
      { user: 'Alex', text: 'The colors in this mural are incredible!' },
      { user: 'Maya', text: 'Love how it tells the story of our town.' },
      { user: 'Jordan', text: 'Makes walking downtown so much nicer.' },
      { user: 'Chris', text: 'Huge respect to all the artists involved.' }
    ]
  },
  {
    id: 'digital-literacy-for-all',
    title: 'Digital Literacy for All',
    category: 'Education',
    description: 'Our library launched a new series of free workshops, helping over 200 residents master essential software and online security tools.',
    content: `
      <p>The library’s new digital literacy workshops empower residents with essential skills, including email, word processing, and safe online practices.</p>
      <p>Over 200 attendees have already improved their confidence navigating digital tools, fostering both personal and professional growth in the community.</p>
    `,
    comments: [
      { user: 'Nina', text: 'My mom finally learned how to use email thanks to this!' },
      { user: 'Ethan', text: 'The instructors explain things really clearly.' },
      { user: 'Luis', text: 'Free classes like this are such a gift.' },
      { user: 'Hannah', text: 'I hope they add more tech topics soon.' }
    ]
  },
  {
    id: 'riverbank-restoration',
    title: 'Riverbank Restoration',
    category: 'Environment',
    description: 'Volunteers removed three tons of debris from the Oakwood River, successfully reintroducing native aquatic plants to the ecosystem.',
    content: `
      <p>Volunteers rolled up their sleeves to clean the Oakwood River, removing debris and reintroducing native plants. This effort has improved water quality and supported local wildlife.</p>
      <p>The community is encouraged to participate in future restoration days to help sustain a healthy and thriving river ecosystem.</p>
    `,
    comments: [
      { user: 'Olivia', text: 'So proud to have volunteered for this!' },
      { user: 'Marcus', text: 'The river looks so much cleaner already.' },
      { user: 'Zoe', text: 'Can’t wait for the next cleanup day.' },
      { user: 'Ben', text: 'Nature wins when we work together like this.' }
    ]
  },
  {
    id: 'mindfulness-in-the-park',
    title: 'Mindfulness in the Park',
    category: 'Wellness',
    description: 'The weekly Saturday morning meditation sessions have grown to 50 participants, fostering mental health and community connection.',
    content: `
      <p>Saturday morning meditation sessions in the park provide a calm space for participants to focus on mindfulness and relaxation.</p>
      <p>With attendance growing to 50 people, the sessions have become a staple for improving mental health and building community connections.</p>
    `,
    comments: [
      { user: 'Grace', text: 'This helps me start my weekend feeling calm.' },
      { user: 'Daniel', text: 'The park is the perfect setting for meditation.' },
      { user: 'Priya', text: 'I’ve met so many kind people here.' },
      { user: 'Noah', text: 'My stress levels have dropped a lot since joining.' }
    ]
  },
  {
    id: 'zero-waste-market-success',
    title: 'Zero-Waste Market Success',
    category: 'Sustainability',
    description: 'The first quarterly zero-waste market prevented an estimated 1,200 single-use plastics from entering our local landfill.',
    content: `
      <p>The zero-waste market promotes sustainable living by eliminating single-use plastics and encouraging reusable alternatives.</p>
      <p>Vendors and visitors alike are embracing eco-friendly practices, making a measurable impact on reducing local waste.</p>
    `,
    comments: [
      { user: 'Sophie', text: 'Shopping without plastic feels amazing!' },
      { user: 'Leo', text: 'Hope this becomes a monthly event.' },
      { user: 'Avery', text: 'The vendors had such creative reusable options.' },
      { user: 'Kai', text: 'This is how markets should always be run.' }
    ]
  },
  {
    id: 'folk-music-festival',
    title: 'The Folk Music Festival',
    category: 'Culture',
    description: 'Bringing together musicians from three neighboring counties, the festival raised $5,000 for the community arts fund.',
    content: `
      <p>The annual Folk Music Festival united musicians from multiple counties, drawing audiences to celebrate local music traditions.</p>
      <p>Funds raised from the event support the community arts fund, ensuring continued arts programming and cultural enrichment for residents.</p>
    `,
    comments: [
      { user: 'Ruby', text: 'The live bands were fantastic!' },
      { user: 'Caleb', text: 'Best community event of the year.' },
      { user: 'Isla', text: 'Loved dancing with everyone.' },
      { user: 'Theo', text: 'Already counting down to next year!' }
    ]
  },
  {
    id: 'future-farmers-program',
    title: 'Future Farmers Program',
    category: 'Education',
    description: 'High school students are now managing a hydroponic farm, providing fresh greens to the school cafeteria every single day.',
    content: `
      <p>High school students gain hands-on experience in sustainable agriculture through the Future Farmers Program.</p>
      <p>The hydroponic farm supplies fresh vegetables to the school cafeteria daily, teaching students valuable skills and promoting healthy eating habits.</p>
    `,
    comments: [
      { user: 'Elena', text: 'Fresh food grown by students is so cool!' },
      { user: 'Tyler', text: 'Great real-world learning experience.' },
      { user: 'Jasmine', text: 'The lettuce tastes way better than store-bought.' },
      { user: 'Owen', text: 'This program should exist at every school.' }
    ]
  },
  {
    id: 'urban-bee-sanctuary',
    title: 'Urban Bee Sanctuary',
    category: 'Environment',
    description: 'Six new rooftop bee colonies were established this spring, helping to pollinate community gardens across the northern district.',
    content: `
      <p>The urban bee sanctuary initiative adds rooftop bee colonies to promote pollination in community gardens and increase biodiversity.</p>
      <p>Residents are invited to participate in workshops to learn about bee care, gardening, and the importance of pollinators in urban ecosystems.</p>
    `,
    comments: [
      { user: 'Harper', text: 'Saving the bees is so important.' },
      { user: 'Miles', text: 'The rooftop hives are such a creative idea.' },
      { user: 'Lily', text: 'My garden has never looked better!' },
      { user: 'Finn', text: 'Would love to join one of the workshops.' }
    ]
  }
];