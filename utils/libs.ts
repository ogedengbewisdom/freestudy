export const FAQS = [
  {
    index: 0,
    question: "How does the article automation work?",
    answer:
      "Our article automation uses advanced AI technology to generate high-quality, SEO-optimized content based on your specifications. Simply provide topics, keywords, and preferences, and our system will create engaging articles that match your brand voice and style.",
  },
  {
    index: 1,
    question: "Will the content be SEO-friendly?",
    answer:
      "Yes, absolutely! All generated content is optimized for search engines with proper keyword integration, meta descriptions, header structure, and readability scores. We follow the latest SEO best practices to help your content rank better in search results.",
  },
  {
    index: 2,
    question: "Can I manage multiple websites with your service?",
    answer:
      "Yes, our platform supports multiple websites and domains. You can manage different brands, websites, and content strategies all from one dashboard. Each site can have its own unique settings, brand voice, and content calendar.",
  },
  {
    index: 3,
    question: "What integrations do you support?",
    answer:
      "We integrate with popular platforms including WordPress, Shopify, Webflow, HubSpot, and many more. We also support API connections for custom integrations. Our team can help set up specific integrations based on your needs.",
  },
  {
    index: 4,
    question: "Does it support other languages?",
    answer:
      "Yes, we support content generation in over 25 languages including Spanish, French, German, Portuguese, Italian, and many others. The AI maintains natural language flow and cultural context for each supported language.",
  },
];
export const navItems = [
  { label: "Home", href: "/" },
  // { label: "Student", href: "/student" },
  { label: "Blog", href: "/blog" },
  { label: "Scholarship", href: "/scholarship" },
];

export const initialBlogPosts = [
  {
    id: "1",
    title: "The Future of Web Development",
    author: "Sarah Johnson",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    date: "2024-08-15",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
    content: [
      "Web development is evolving at an unprecedented pace. As we look towards the future, several key trends are emerging that will fundamentally change how we build and interact with web applications.",
      "Artificial Intelligence is becoming increasingly integrated into development workflows. From code generation to automated testing, AI tools are helping developers become more productive and efficient. We're seeing the rise of AI-powered design tools that can generate layouts, suggest optimizations, and even write code based on natural language descriptions.",
      "Progressive Web Apps (PWAs) continue to blur the line between web and native applications. With improved offline capabilities, push notifications, and native-like performance, PWAs are becoming the go-to choice for businesses looking to provide seamless user experiences across all devices.",
      "WebAssembly is opening up new possibilities for high-performance web applications. Languages like Rust, C++, and Go can now run in the browser with near-native performance, enabling complex applications like video editors, games, and scientific simulations to run entirely in the browser.",
    ],
    likes: 42,
    comments: [],
  },
  {
    id: "2",
    title: "Design Systems That Scale",
    author: "Michael Chen",
    date: "2024-08-10",
    excerpt:
      "How to build and maintain design systems that grow with your organization while ensuring consistency across all platforms.",
    content: [
      "Design systems have become essential for modern product development. They provide the foundation for consistent user experiences across multiple platforms and products while enabling teams to work more efficiently.",
      "A successful design system starts with clear principles and guidelines. These should reflect your brand values and user needs while providing practical guidance for designers and developers. Documentation is crucial – every component, pattern, and guideline should be thoroughly documented with examples and usage instructions.",
      "Scalability is about more than just adding new components. It's about creating a system that can evolve with your organization's needs. This means establishing clear governance processes, version control, and update mechanisms. Regular audits help identify inconsistencies and areas for improvement.",
      "Tool integration is vital for adoption. Your design system should work seamlessly with popular design tools like Figma and Sketch, as well as development frameworks. This reduces friction and encourages consistent usage across teams.",
    ],
    likes: 38,
    comments: [],
  },
  {
    id: "3",
    title: "Mobile-First Development Strategies",
    author: "Emma Rodriguez",
    date: "2024-08-05",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    excerpt:
      "Why mobile-first approach is crucial in today's development landscape and how to implement it effectively in your projects.",
    content: [
      "With mobile traffic accounting for over 50% of web usage globally, mobile-first development is no longer optional – it's essential. This approach prioritizes the mobile experience from the very beginning of the design and development process.",
      "The mobile-first approach forces you to focus on what's truly important. With limited screen real estate, you must prioritize content and functionality, leading to cleaner, more focused designs. This constraint often results in better user experiences across all devices.",
      "Performance considerations are critical in mobile-first development. Mobile users often have slower connections and less powerful devices. Optimizing images, minimizing JavaScript bundles, and implementing lazy loading are essential techniques for delivering fast mobile experiences.",
      "Touch interfaces require different interaction patterns than desktop applications. Buttons need to be appropriately sized for fingers, navigation should be thumb-friendly, and gestures like swipe and pinch should feel natural and responsive.",
    ],
    likes: 56,
    comments: [],
  },
];

export const blogDetailFunction = (id: string) => {
  return initialBlogPosts.find((post) => post.id === id);
};

export const SCHOLARSHIPS = [
  {
    id: "1",
    title: "Mastercard Foundation 2026 University of Cambridge Scholarship",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    category: [
      "Graduate Scholarships",
      "Cambridge Scholarships",
      "African Students",
    ],
    datePosted: "September 11, 2025",
    readTime: "3 min read",
    description:
      "The Mastercard Foundation Scholars Program at the University of Cambridge provides African students with fully-funded opportunities to complete their master's training and contribute to climate resilience efforts across Africa.",
    content: `<h3><strong>Benefits</strong></h3>
<p>The Mastercard Foundation Scholars Program covers:</p>
<ul>
<li>Course fee</li>
<li>Monthly living / maintenance allowance</li>
<li>Visa application fee, IHS surcharge and economy return ticket</li>
<li>Cohort-wide induction programme</li>
<li>Termly leadership training modules</li>
<li>3-6 month placement in Africa-based organisation</li>
</ul>
<h3><strong>Requirements</strong></h3>
<ol>
<li>Have a bachelor's degree</li>
<li>Meet academic entry requirements of chosen course</li>
<li>Be from and live in an African country</li>
<li>Apply for eligible full-time master's course (excluding MBA, MACC, MCL, MFIN)</li>
<li>Demonstrate commitment to giving back to community and sustainability themes</li>
</ol>
<h3><strong>Selection Process</strong></h3>
<p>Selection criteria include outstanding intellectual ability, commitment to climate resilient futures for Africa, and leadership potential.</p>
<h3><strong>How to Apply</strong></h3>
<p>Use the <a href="https://www.postgraduate.study.cam.ac.uk/courses" target="_blank" rel="noopener">postgraduate course directory</a> to check requirements and start your application.</p>`,
    applicationDeadline: "December 2025",
    applicationLink: "https://www.postgraduate.study.cam.ac.uk/courses",
  },
  {
    id: "2",
    title: "University of Oxford 2026 Skoll Foundation Scholarship",
    category: ["MBA Scholarships", "Social Entrepreneurship", "Oxford"],
    datePosted: "September 11, 2025",
    readTime: "2 min read",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    description:
      "The University of Oxford Skoll scholarship offers fully funded opportunities to students with a track record in social entrepreneurship who intend to continue creating impact.",
    content: `<h3><strong>Benefits</strong></h3>
<p>This scholarship provides full tuition and a grant for living costs.</p>
<h3><strong>Scholarship Courses</strong></h3>
<ul>
<li>Business Administration (MBA)</li>
</ul>
<h3><strong>Requirements</strong></h3>
<p>Applications are welcome from around the world. Applicants should:</p>
<ol>
<li>Have minimum three years of experience building and leading a social venture with demonstrated social impact</li>
<li>Demonstrate curiosity, humility, and persistence in understanding systemic challenges</li>
<li>Have lived experience with the issue they seek to address</li>
<li>Display self-awareness and willingness to listen, learn, and adapt</li>
<li>Demonstrate clear intention to pursue career aligned with systemic social impact</li>
</ol>
<h3><strong>Selection Process</strong></h3>
<p>MBA Admissions Team assesses application first, then automatic progression to Skoll Scholarship Selection Committee. Final interviews take place in April and May.</p>
<h3><strong>How to Apply</strong></h3>
<p>Submit complete <a href="#" target="_blank" rel="noopener">MBA application</a> and Skoll Scholarship essay document by deadline.</p>`,
    applicationDeadline: "January 7, 2026",
    applicationLink: "https://example.com/oxford-skoll-apply",
  },
  {
    id: "3",
    title: "Gates Cambridge Scholarship 2026",
    category: ["Graduate Scholarships", "PhD Scholarships", "Cambridge"],
    datePosted: "September 10, 2025",
    readTime: "3 min read",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    description:
      "Gates Cambridge offers approximately 80 full-cost scholarships to outstanding applicants from countries outside the UK to pursue postgraduate degrees at Cambridge.",
    content: `<h3><strong>Benefits</strong></h3>
<p>A Gates Cambridge Scholarship covers:</p>
<ul>
<li>University Composition Fee at appropriate rate</li>
<li>Maintenance allowance for single student (£21,000 for 12 months at 2024-25 rate)</li>
<li>Economy single airfare at beginning and end of course</li>
<li>Inbound visa costs and Immigration Health Surcharge</li>
<li>Additional discretionary funding available</li>
</ul>
<h3><strong>Requirements</strong></h3>
<ol>
<li>Be a citizen of any country outside the United Kingdom</li>
<li>Apply for PhD (full-time or part-time), MLitt (full-time), or one-year postgraduate course (full-time)</li>
</ol>
<h3><strong>Selection Criteria</strong></h3>
<ul>
<li>Academic excellence</li>
<li>Reasons for choice of course</li>
<li>Commitment to improving lives of others</li>
<li>Capacity for leadership</li>
</ul>
<h3><strong>How to Apply</strong></h3>
<p>Complete application with 500-word statement and Gates Cambridge reference. <a href="https://www.gatescambridge.org" target="_blank" rel="noopener">Visit official website</a> for full details.</p>`,
    applicationDeadline: "January 7, 2026",
    applicationLink: "https://www.gatescambridge.org",
  },
  {
    id: "4",
    title: "Chevening Scholarships 2026",
    category: ["Master's Scholarships", "UK Government", "Leadership"],
    datePosted: "September 5, 2025",
    readTime: "4 min read",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    description:
      "Chevening Scholarships are prestigious awards funded by the UK government for emerging leaders to pursue one-year master's degrees in the UK.",
    content: `<h3><strong>Benefits</strong></h3>
<ul>
<li>Full tuition fees</li>
<li>Monthly stipend</li>
<li>Travel costs to and from the UK</li>
<li>Arrival allowance</li>
<li>Homeward departure allowance</li>
<li>Cost of one visa application</li>
<li>Access to exclusive Chevening events</li>
</ul>
<h3><strong>Requirements</strong></h3>
<ol>
<li>Be a citizen of Chevening-eligible country</li>
<li>Have undergraduate degree equivalent to UK 2:1 honours</li>
<li>Have minimum two years work experience</li>
<li>Meet English language requirements</li>
<li>Apply to three different UK university courses</li>
</ol>
<h3><strong>Selection Process</strong></h3>
<p>Applications assessed on leadership potential, academic excellence, networking skills, and potential to influence positive change in home country.</p>
<h3><strong>How to Apply</strong></h3>
<p>Submit online application with essays, references, and supporting documents through <a href="https://www.chevening.org" target="_blank" rel="noopener">Chevening website</a>.</p>`,
    applicationDeadline: "November 5, 2025",
    applicationLink: "https://www.chevening.org/apply",
  },
  {
    id: "5",
    title: "Fulbright Foreign Student Program 2026",
    category: ["Graduate Scholarships", "PhD Scholarships", "USA", "Research"],
    datePosted: "September 8, 2025",
    readTime: "3 min read",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    description:
      "The Fulbright Program provides grants for individually designed study/research projects or for university coursework leading to a master's or doctoral degree.",
    content: `<h3><strong>Benefits</strong></h3>
<ul>
<li>Tuition and fees</li>
<li>Living stipend</li>
<li>Health insurance</li>
<li>Round-trip transportation</li>
<li>Pre-departure orientation</li>
<li>In-country support and networking opportunities</li>
</ul>
<h3><strong>Requirements</strong></h3>
<ol>
<li>Be a citizen of participating country</li>
<li>Hold bachelor's degree or equivalent</li>
<li>Demonstrate leadership potential</li>
<li>Show commitment to returning to home country</li>
<li>Meet English proficiency requirements</li>
<li>Be in good health</li>
</ol>
<h3><strong>Program Types</strong></h3>
<ul>
<li>Master's degree programs</li>
<li>PhD degree programs</li>
<li>Non-degree research projects</li>
</ul>
<h3><strong>How to Apply</strong></h3>
<p>Contact your local <a href="https://foreign.fulbrightonline.org" target="_blank" rel="noopener">Fulbright Commission</a> for country-specific application procedures and deadlines.</p>`,
    applicationDeadline: "Varies by country",
    applicationLink: "https://foreign.fulbrightonline.org",
  },
  {
    id: "6",
    title:
      "DAAD Scholarships for Development-Related Postgraduate Studies 2026",
    category: ["Master's Scholarships", "Germany", "Development Studies"],
    datePosted: "September 7, 2025",
    readTime: "3 min read",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    description:
      "DAAD offers scholarships to graduates from developing countries to pursue development-related master's degrees at German universities.",
    content: `<h3><strong>Benefits</strong></h3>
<ul>
<li>Monthly scholarship payment (€934)</li>
<li>Travel allowance</li>
<li>Health insurance subsidy</li>
<li>Study and research allowance</li>
<li>German language course support</li>
<li>Supervision and academic support</li>
</ul>
<h3><strong>Requirements</strong></h3>
<ol>
<li>Bachelor's degree (normally four years) with above-average results</li>
<li>At least two years of relevant professional experience</li>
<li>Nationality from developing country</li>
<li>German or English language proficiency</li>
<li>Clear development-related study objective</li>
</ol>
<h3><strong>Subject Areas</strong></h3>
<p>Development-related fields including economics, agriculture, environmental sciences, engineering, public health, and social sciences.</p>
<h3><strong>How to Apply</strong></h3>
<p>Submit application through <a href="https://www.daad.de/epos" target="_blank" rel="noopener">DAAD portal</a> with required documents and motivation letter.</p>`,
    applicationDeadline: "August 31, 2025",
    applicationLink:
      "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
  },
  {
    id: "7",
    title: "Australia Awards Scholarships 2026",
    category: ["Graduate Scholarships", "Australia", "Pacific Region"],
    datePosted: "September 6, 2025",
    readTime: "3 min read",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    description:
      "Australia Awards Scholarships offer opportunities for people from participating countries to undertake full-time undergraduate or postgraduate study at Australian universities.",
    content: `<h3><strong>Benefits</strong></h3>
<ul>
<li>Full tuition fees</li>
<li>Return air travel</li>
<li>Establishment allowance</li>
<li>Contribution to living expenses</li>
<li>Overseas Student Health Cover</li>
<li>Pre-course Academic English program (if required)</li>
<li>Supplementary Academic Support</li>
</ul>
<h3><strong>Requirements</strong></h3>
<ol>
<li>Be a citizen of participating country</li>
<li>Meet academic entry requirements</li>
<li>Satisfy English language proficiency</li>
<li>Not hold Australian or New Zealand citizenship</li>
<li>Not be married to or de facto partner of Australian or New Zealand citizen</li>
<li>Be at least 18 years old</li>
</ol>
<h3><strong>Priority Areas</strong></h3>
<p>Focus on areas that contribute to development outcomes including agriculture, education, health, governance, and infrastructure.</p>
<h3><strong>How to Apply</strong></h3>
<p>Apply through your country's <a href="https://www.australiaawards.gov.au" target="_blank" rel="noopener">Australia Awards office</a> or implementing partner.</p>`,
    applicationDeadline: "Varies by country - typically April-May",
    applicationLink: "https://www.australiaawards.gov.au",
  },
  {
    id: "8",
    title: "Erasmus Mundus Joint Master's Scholarships 2026",
    category: ["Master's Scholarships", "Europe", "Joint Degrees"],
    datePosted: "September 4, 2025",
    readTime: "4 min read",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    description:
      "Erasmus Mundus offers scholarships for excellent students to pursue integrated international master's courses delivered by consortia of higher education institutions from Europe and beyond.",
    content: `<h3><strong>Benefits</strong></h3>
<ul>
<li>Full tuition fee coverage</li>
<li>Monthly allowance (€1,400 per month)</li>
<li>Travel and installation costs</li>
<li>Insurance coverage</li>
<li>Study in multiple European countries</li>
<li>Joint/double/multiple degree certification</li>
</ul>
<h3><strong>Requirements</strong></h3>
<ol>
<li>Hold first higher education degree (bachelor's or equivalent)</li>
<li>Meet specific program requirements</li>
<li>Demonstrate English proficiency</li>
<li>Show academic excellence</li>
<li>Submit motivation letter and references</li>
</ol>
<h3><strong>Program Structure</strong></h3>
<p>Two-year programs with study periods in at least two different European countries, leading to joint, double, or multiple degrees.</p>
<h3><strong>How to Apply</strong></h3>
<p>Apply directly to your chosen <a href="https://www.eacea.ec.europa.eu/erasmus-plus/emjm-catalogue_en" target="_blank" rel="noopener">Erasmus Mundus program consortium</a>.</p>`,
    applicationDeadline: "Varies by program - typically December-January",
    applicationLink:
      "https://www.eacea.ec.europa.eu/erasmus-plus/emjm-catalogue_en",
  },
  {
    id: "9",
    title: "Commonwealth Scholarships 2026",
    category: [
      "PhD Scholarships",
      "Master's Scholarships",
      "Commonwealth Countries",
    ],
    datePosted: "September 3, 2025",
    readTime: "3 min read",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    description:
      "Commonwealth Scholarships are for talented individuals with the potential to make a positive impact on the global stage, funded by the UK Department for International Development.",
    content: `<h3><strong>Benefits</strong></h3>
<ul>
<li>Approved airfare from home country to UK and return</li>
<li>Approved tuition fees</li>
<li>Stipend (living allowance) at rates set annually</li>
<li>Thesis grant towards cost of preparing thesis (PhD only)</li>
<li>Initial arrival allowance</li>
<li>Warm clothing allowance</li>
</ul>
<h3><strong>Requirements</strong></h3>
<ol>
<li>Be a citizen of eligible Commonwealth country</li>
<li>Hold first degree of upper second class honours standard</li>
<li>Be unable to afford to study in UK without scholarship</li>
<li>Have provided evidence of English language ability</li>
<li>Not have previously studied for one year or more in developed country</li>
</ol>
<h3><strong>Scholarship Types</strong></h3>
<ul>
<li>Master's scholarships (one year)</li>
<li>PhD scholarships (three years)</li>
<li>Split-site scholarships (12 months in UK)</li>
</ul>
<h3><strong>How to Apply</strong></h3>
<p>Apply through your <a href="https://cscuk.fcdo.gov.uk" target="_blank" rel="noopener">national nominating agency</a> or directly to Commonwealth Scholarship Commission.</p>`,
    applicationDeadline: "December 2025",
    applicationLink: "https://cscuk.fcdo.gov.uk",
  },
  {
    id: "10",
    title: "Swiss Government Excellence Scholarships 2026",
    category: [
      "PhD Scholarships",
      "Postdoc Scholarships",
      "Switzerland",
      "Research",
    ],
    datePosted: "September 2, 2025",
    readTime: "3 min read",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    description:
      "Swiss Government Excellence Scholarships promote international exchange and research cooperation between Switzerland and over 180 other countries worldwide.",
    content: `<h3><strong>Benefits</strong></h3>
<ul>
<li>Monthly scholarship payment (CHF 1,920)</li>
<li>Tuition fee waiver</li>
<li>Health insurance coverage</li>
<li>Housing allowance</li>
<li>Return flight ticket to Switzerland</li>
<li>Reimbursement of thesis printing costs (PhD)</li>
</ul>
<h3><strong>Requirements</strong></h3>
<ol>
<li>Hold master's degree or equivalent for PhD applications</li>
<li>Hold PhD degree for postdoc research applications</li>
<li>Be born after December 31, 1989 (PhD) or 1986 (Postdoc)</li>
<li>Have graduation date after July 31, 2021 (PhD) or 2019 (Postdoc)</li>
<li>Demonstrate academic excellence</li>
<li>Show clear research proposal</li>
</ol>
<h3><strong>Program Types</strong></h3>
<ul>
<li>PhD studies (3 years)</li>
<li>Postdoctoral research (1-2 years)</li>
<li>Research fellowships for foreign artists</li>
</ul>
<h3><strong>How to Apply</strong></h3>
<p>Submit application through <a href="https://www.sbfi.admin.ch/scholarships" target="_blank" rel="noopener">Swiss diplomatic representation</a> in your home country.</p>`,
    applicationDeadline: "Varies by country - typically November-December",
    applicationLink:
      "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
  },
];

export const scholarshipByID = (id: string) => {
  return SCHOLARSHIPS.find((scholarship) => scholarship.id === id);
};

export const TRUNCATEFUNCTION = (text: string, length: number) => {
  const words = text.split(" ");
  if (words.length > length) {
    return words.slice(0, length).join(" ") + "...";
  }
  return text;
};

// Mock Books Data
export const MOCK_BOOKS_DATA = [
  // Editor's Choice Books
  {
    id: "1",
    title: "Exercise Is Murder",
    author: "Bruce Hammack",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    price: "Free",
    description:
      "Exercise Is Murder introduces you to blind former homicide detective, Steve Smiley and his new partner in this classic private detective mystery series readers describe as 'a multi-layered whodunit' and 'briskly paced with lots of clues and suspects.'",
    published: "2019",
    pages: 119,
    downloads: 1488,
    reviews: 0,
    rating: 0,
  },
  {
    id: "2",
    title: "From Darkness To Light",
    author: "Danielle Anderson",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    price: "$12.99",
    description:
      "A powerful journey of transformation and hope, following characters as they navigate through life's darkest moments to find redemption and light.",
    published: "2023",
    pages: 284,
    downloads: 2156,
    reviews: 47,
    rating: 4.3,
  },
  {
    id: "3",
    title: "Sister Witches",
    author: "Felicia Jedlicka",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    price: "$14.99",
    description:
      "Welcome to the coven. Two sisters discover their magical heritage and must learn to harness their powers while navigating family secrets and ancient prophecies.",
    published: "2022",
    pages: 356,
    downloads: 3247,
    reviews: 89,
    rating: 4.6,
  },
  {
    id: "4",
    title: "My Heart Wants",
    author: "Mark Heckler",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    price: "$9.99",
    description:
      "A steamy romance novel about second chances and finding love when you least expect it. Follow the passionate journey of two souls meant to be together.",
    published: "2024",
    pages: 298,
    downloads: 5432,
    reviews: 156,
    rating: 4.2,
  },
  {
    id: "5",
    title: "The Necklace - The Dusky Club, June 1962",
    author: "Linda S. Rice",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    price: "$11.99",
    description:
      "Set in 1962, this mysterious tale follows the discovery of an antique necklace that holds dark secrets from the past, threatening to unravel the present.",
    published: "2021",
    pages: 412,
    downloads: 1876,
    reviews: 34,
    rating: 4.1,
  },
  {
    id: "6",
    title: "We Are Voulhire",
    author: "Alexander Cross",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    price: "$16.99",
    description:
      "An epic fantasy adventure following a group of unlikely heroes as they unite to save their realm from an ancient evil that threatens to destroy everything they hold dear.",
    published: "2023",
    pages: 524,
    downloads: 2891,
    reviews: 78,
    rating: 4.7,
  },

  // Trending Books (some duplicates with different metadata)
  {
    id: "7",
    title: "The Tunnels of Rasand",
    author: "M S Lawson",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    price: "$13.99",
    description:
      "Deep beneath the city of Rasand lies a network of ancient tunnels hiding secrets that could change the course of history. A thrilling archaeological adventure.",
    published: "2023",
    pages: 387,
    downloads: 4156,
    reviews: 112,
    rating: 4.4,
  },
  {
    id: "8",
    title: "Creature of an Ancient Dreaming",
    author: "Graham Wilson",
    image:
      "https://drive.google.com/uc?export=view&id=1zWerBqO2IHHGv2jt5PywphrOYVAkg_WV",
    price: "$15.99",
    description:
      "In the Australian outback, ancient spirits awaken to reclaim their land. A supernatural thriller that blends indigenous mythology with modern horror.",
    published: "2022",
    pages: 445,
    downloads: 2673,
    reviews: 67,
    rating: 4.5,
  },
];

export const bookByID = (id: string) => {
  return MOCK_BOOKS_DATA.find((book) => book.id === id);
};
