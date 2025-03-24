
import { BlogPost, Category } from '../lib/types';

export const categories: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology' },
  { id: '2', name: 'Design', slug: 'design' },
  { id: '3', name: 'Business', slug: 'business' },
  { id: '4', name: 'Lifestyle', slug: 'lifestyle' },
  { id: '5', name: 'Health', slug: 'health' },
  { id: '6', name: 'Food', slug: 'food' },
  { id: '7', name: 'Travel', slug: 'travel' },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Everyday Computing',
    excerpt: 'How artificial intelligence is reshaping our daily interactions with technology and what it means for the future.',
    content: `
      <p>Artificial intelligence has come a long way in the past decade. What was once confined to research papers and specialized applications is now an integral part of our daily lives.</p>
      
      <p>From voice assistants like Siri and Alexa to recommendation engines on Netflix and Spotify, AI is everywhere. But this is just the beginning.</p>
      
      <h2>AI in Personal Computing</h2>
      
      <p>The next frontier for AI is personalized computing experiences. Imagine a computer that doesn't just respond to your commands but anticipates your needs and adapts to your working style.</p>
      
      <p>Microsoft's Windows 11 and Apple's macOS are already incorporating more AI features, and this trend will only accelerate.</p>
      
      <h2>The Challenge of Privacy</h2>
      
      <p>As AI becomes more integrated into our lives, the question of privacy becomes increasingly important. How much of our data should these systems have access to? Where is the line between helpful personalization and invasive surveillance?</p>
      
      <p>These are questions that society will need to grapple with as AI continues to evolve and become more sophisticated.</p>
      
      <h2>Looking Ahead</h2>
      
      <p>The future of AI in everyday computing is bright, with the potential to make our interactions with technology more natural, efficient, and productive.</p>
      
      <p>But it's important that we approach this future thoughtfully, ensuring that AI serves humanity's best interests and respects our fundamental rights.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1677442135188-d8631f818805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    category: 'Technology',
    tags: ['AI', 'Technology', 'Future', 'Computing'],
    createdAt: '2023-04-12T14:30:00Z',
    updatedAt: '2023-04-14T09:15:00Z',
    readTime: 5
  },
  {
    id: '2',
    title: 'Minimalist Design Principles for Modern Interfaces',
    excerpt: 'How embracing simplicity can lead to more elegant, usable, and timeless digital products.',
    content: `
      <p>In a world filled with digital noise, minimalist design stands out by embracing the philosophy that less is more. This approach to design focuses on simplicity, clarity, and purpose, removing unnecessary elements to highlight what truly matters.</p>
      
      <h2>Key Principles of Minimalist Design</h2>
      
      <p>Minimalist design is built on several core principles:</p>
      
      <ul>
        <li><strong>Simplicity:</strong> Reduce elements to only what's necessary</li>
        <li><strong>White Space:</strong> Use negative space to create breathing room</li>
        <li><strong>Limited Color Palette:</strong> Focus on a few carefully chosen colors</li>
        <li><strong>Typography:</strong> Utilize clean, readable fonts</li>
        <li><strong>Visual Hierarchy:</strong> Guide users through content with deliberate sizing and spacing</li>
      </ul>
      
      <h2>The Benefits of Minimalist Design</h2>
      
      <p>Embracing minimalism in digital interfaces offers numerous advantages:</p>
      
      <p><strong>Enhanced Usability:</strong> With fewer distractions, users can focus on completing tasks more efficiently.</p>
      
      <p><strong>Faster Loading Times:</strong> Simpler designs typically require fewer resources, leading to quicker page loads.</p>
      
      <p><strong>Timelessness:</strong> Minimalist designs tend to age well, requiring less frequent redesigns.</p>
      
      <p><strong>Responsiveness:</strong> Simple layouts adapt more easily to different screen sizes.</p>
      
      <h2>Putting Minimalism into Practice</h2>
      
      <p>To apply minimalist principles to your designs, start by questioning each element: Does it serve a clear purpose? Could it be simplified or removed? Is it essential to the user experience?</p>
      
      <p>Remember that minimalism isn't about making things boring or empty—it's about intentionality and focusing on what matters.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: {
      name: 'Sophia Chen',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    category: 'Design',
    tags: ['Design', 'Minimalism', 'UI/UX', 'Interfaces'],
    createdAt: '2023-03-28T10:15:00Z',
    updatedAt: '2023-03-30T16:45:00Z',
    readTime: 4
  },
  {
    id: '3',
    title: 'Sustainable Business Practices in the Digital Age',
    excerpt: 'How companies are balancing profit with environmental responsibility in an increasingly digital economy.',
    content: `
      <p>As climate change and environmental degradation become increasingly urgent issues, businesses are under growing pressure to adopt sustainable practices. But what does sustainability look like in the digital age?</p>
      
      <h2>The Environmental Impact of Digital</h2>
      
      <p>While digital businesses may seem inherently more environmentally friendly than traditional industries, they still have significant environmental footprints. Data centers consume vast amounts of electricity, e-waste is a growing problem, and the carbon emissions from shipping products purchased online add up quickly.</p>
      
      <h2>Innovative Approaches to Digital Sustainability</h2>
      
      <p>Forward-thinking companies are finding creative ways to reduce their environmental impact:</p>
      
      <ul>
        <li><strong>Green Hosting:</strong> Using renewable energy to power data centers</li>
        <li><strong>Remote Work:</strong> Reducing commuting and office space requirements</li>
        <li><strong>Circular Design:</strong> Creating products that are repairable, upgradable, and recyclable</li>
        <li><strong>Carbon Offsetting:</strong> Investing in projects that reduce or capture carbon emissions</li>
        <li><strong>Digital Minimalism:</strong> Designing efficient software that requires less processing power and energy</li>
      </ul>
      
      <h2>The Business Case for Sustainability</h2>
      
      <p>Importantly, sustainable practices aren't just good for the planet—they're increasingly good for business too. Consumers are becoming more environmentally conscious, investors are considering environmental factors, and regulations are tightening.</p>
      
      <p>Companies that proactively embrace sustainability are positioning themselves for long-term success in a world where environmental responsibility is becoming a business imperative.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: {
      name: 'Michael Roberts',
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    category: 'Business',
    tags: ['Business', 'Sustainability', 'Environment', 'Digital'],
    createdAt: '2023-05-05T08:20:00Z',
    updatedAt: '2023-05-07T11:30:00Z',
    readTime: 6
  },
  {
    id: '4',
    title: 'The Art of Digital Detox in a Connected World',
    excerpt: 'Finding balance and reclaiming your time in an era of constant notifications and digital demands.',
    content: `
      <p>In our hyper-connected world, many of us struggle with the feeling of being constantly tethered to our devices. Notifications, emails, messages, and social media updates demand our attention around the clock, leaving little space for quiet reflection or focused work.</p>
      
      <h2>Signs You Might Need a Digital Detox</h2>
      
      <p>Consider taking a step back from technology if you're experiencing:</p>
      
      <ul>
        <li>Anxiety when separated from your phone</li>
        <li>Difficulty concentrating on tasks without checking devices</li>
        <li>Sleep disruption due to late-night scrolling</li>
        <li>Strained relationships because of device use</li>
        <li>The feeling that time is slipping away unproductively</li>
      </ul>
      
      <h2>Practical Steps for a Digital Reset</h2>
      
      <p>A digital detox doesn't necessarily mean eliminating technology entirely. Rather, it's about establishing a healthier relationship with your devices:</p>
      
      <p><strong>Set Boundaries:</strong> Designate tech-free times and spaces in your day.</p>
      
      <p><strong>Curate Notifications:</strong> Only allow alerts from the most important apps and people.</p>
      
      <p><strong>Create Distance:</strong> Keep devices out of the bedroom and away from meals.</p>
      
      <p><strong>Find Alternatives:</strong> Rediscover offline activities that bring you joy.</p>
      
      <p><strong>Practice Mindfulness:</strong> When using technology, do so with intention and awareness.</p>
      
      <h2>The Benefits of Digital Balance</h2>
      
      <p>Those who successfully manage their digital consumption often report improved focus, better sleep, reduced anxiety, deeper conversations, and a greater sense of control over their time and attention.</p>
      
      <p>In a world designed to capture and monetize our attention, taking conscious control of our relationship with technology is a radical act of self-care.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: {
      name: 'Emily Parker',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    category: 'Lifestyle',
    tags: ['Digital Detox', 'Wellness', 'Mindfulness', 'Technology'],
    createdAt: '2023-06-18T15:45:00Z',
    updatedAt: '2023-06-19T09:30:00Z',
    readTime: 5
  },
  {
    id: '5',
    title: 'Revolutionizing Healthcare Through Wearable Technology',
    excerpt: 'How smartwatches and fitness trackers are transforming personal health monitoring and preventive care.',
    content: `
      <p>Wearable technology has come a long way from simple step counters. Today's wearable devices pack sophisticated sensors that can monitor heart rate, sleep patterns, blood oxygen levels, and even detect irregular heart rhythms or potential falls.</p>
      
      <h2>The Current Landscape of Health Wearables</h2>
      
      <p>The market is now filled with devices offering various capabilities:</p>
      
      <ul>
        <li><strong>Fitness Trackers:</strong> Focus primarily on activity metrics like steps, distance, and calories</li>
        <li><strong>Smartwatches:</strong> Combine fitness tracking with broader functionality and more advanced health features</li>
        <li><strong>Medical Wearables:</strong> Specialized devices for monitoring specific conditions like diabetes or heart disease</li>
        <li><strong>Smart Clothing:</strong> Garments embedded with sensors for performance tracking</li>
      </ul>
      
      <h2>Transforming Personal Health Management</h2>
      
      <p>These devices are changing how individuals approach their health in several ways:</p>
      
      <p><strong>Awareness:</strong> Providing real-time data that makes users more conscious of their health habits.</p>
      
      <p><strong>Prevention:</strong> Identifying potential issues before they become serious problems.</p>
      
      <p><strong>Motivation:</strong> Gamifying health through challenges, goals, and rewards.</p>
      
      <p><strong>Personalization:</strong> Offering insights tailored to individual patterns and needs.</p>
      
      <h2>The Future of Wearable Health Tech</h2>
      
      <p>Looking ahead, we can expect wearables to become even more sophisticated, with capabilities like:</p>
      
      <p>- Non-invasive blood glucose monitoring</p>
      <p>- Advanced stress and mental health tracking</p>
      <p>- Early disease detection through biomarker analysis</p>
      <p>- Integration with telemedicine platforms</p>
      
      <p>As these technologies evolve, they have the potential to dramatically reduce healthcare costs and improve outcomes by shifting focus from treatment to prevention and early intervention.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: {
      name: 'Dr. James Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    category: 'Health',
    tags: ['Health', 'Technology', 'Wearables', 'Innovation'],
    createdAt: '2023-04-30T11:00:00Z',
    updatedAt: '2023-05-02T14:20:00Z',
    readTime: 7
  },
  {
    id: '6',
    title: 'The Rise of Plant-Based Cuisine in Mainstream Dining',
    excerpt: 'How plant-based options are transforming restaurant menus and changing the way we think about food.',
    content: `
      <p>Not long ago, plant-based menu options were typically limited to a token salad or vegetable side dish. Today, restaurants of all types are embracing creative, flavorful plant-based cuisine that appeals to vegetarians and meat-eaters alike.</p>
      
      <h2>Drivers of the Plant-Based Revolution</h2>
      
      <p>Several factors have contributed to the surge in plant-based dining:</p>
      
      <p><strong>Health Consciousness:</strong> Growing awareness of the health benefits of plant-forward eating.</p>
      
      <p><strong>Environmental Concerns:</strong> Recognition of the lower environmental impact of plant-based foods.</p>
      
      <p><strong>Culinary Innovation:</strong> Chefs embracing the creative challenge of plant-based cooking.</p>
      
      <p><strong>Better Alternatives:</strong> Improvements in the taste and texture of plant-based meat and dairy substitutes.</p>
      
      <h2>Beyond Imitation: The New Plant-Based Cuisine</h2>
      
      <p>While plant-based burgers that "bleed" have grabbed headlines, the most exciting developments in plant-based cuisine aren't attempting to mimic meat. Instead, innovative chefs are creating dishes that celebrate vegetables, grains, and legumes for their own unique flavors and textures.</p>
      
      <p>From fine dining establishments offering sophisticated vegetable tasting menus to fast-casual chains developing craveable plant-based options, the focus is on creating delicious food that happens to be plant-based, rather than apologetic substitutes for animal products.</p>
      
      <h2>The Inclusive Future of Dining</h2>
      
      <p>Perhaps the most significant development is that plant-based options are moving from segregated menu sections to being integrated throughout menus. This reflects a shift toward a more inclusive approach to dining, where plant-based choices are normalized rather than marginalized.</p>
      
      <p>As this trend continues, we can expect the boundaries between plant-based and conventional cuisine to blur further, creating a more diverse, sustainable, and health-conscious food landscape for everyone.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: {
      name: 'Chef Isabella Martinez',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    category: 'Food',
    tags: ['Food', 'Plant-based', 'Dining', 'Restaurants'],
    createdAt: '2023-05-15T09:45:00Z',
    updatedAt: '2023-05-16T13:20:00Z',
    readTime: 5
  }
];
