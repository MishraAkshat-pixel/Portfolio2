/*
 * Portfolio content configuration.
 * Replace placeholder URLs with your real profiles when ready.
 */
window.portfolioConfig = {
  personal: {
    typedTitles: [
      'Software Developer',
      'C++ DSA Learner',
      'Web Developer',
      'AI/ML Enthusiast'
    ],
    resumeUrl: '#'
  },

  socialLinks: {
    leetcode: 'https://leetcode.com/u/AkshatMishra_123/',
    github: 'https://github.com/MishraAkshat-pixel',
    linkedin: 'https://www.linkedin.com/in/akshat-mishra-b3924b3a0/',
    email: 'mailto:mishraakshat815@gmail.com'
  },

  skills: [
    {
      id: 'programming',
      category: 'Programming',
      description: 'Languages I use for development and daily DSA practice.',
      icon: 'code-2',
      items: [
        { name: 'C++', level: 'Intermediate', note: 'Primary language for DSA practice.', icon: 'terminal' },
        { name: 'Python', level: 'Intermediate', note: 'Used for scripting and learning AI/ML concepts.', icon: 'braces' },
        { name: 'JavaScript', level: 'Beginner', note: 'Building interactive web experiences.', icon: 'file-code-2' }
      ]
    },
    {
      id: 'web',
      category: 'Web Development',
      description: 'Frontend technologies for practical projects.',
      icon: 'globe-2',
      items: [
        { name: 'HTML', level: 'Intermediate', note: 'Semantic page structure and accessible layouts.', icon: 'code' },
        { name: 'CSS', level: 'Intermediate', note: 'Responsive styling and modern UI effects.', icon: 'palette' },
        { name: 'JavaScript', level: 'Beginner', note: 'DOM interactions and browser-side logic.', icon: 'zap' }
      ]
    },
    {
      id: 'database',
      category: 'Database',
      description: 'Data and relational database fundamentals.',
      icon: 'database',
      items: [
        { name: 'SQL', level: 'Intermediate', note: 'Queries, filtering, joins and relational concepts.', icon: 'table-2' },
        { name: 'DBMS', level: 'Beginner', note: 'Learning database design and core concepts.', icon: 'server' }
      ]
    },
    {
      id: 'tools',
      category: 'Tools',
      description: 'Developer tools and platforms I actively use.',
      icon: 'wrench',
      items: [
        { name: 'Git & GitHub', level: 'Beginner', note: 'Version control and project repositories.', icon: 'github' },
        { name: 'VS Code', level: 'Intermediate', note: 'Primary development environment.', icon: 'code-2' },
        { name: 'LeetCode', level: 'Beginner', note: 'Daily C++ DSA practice and streak building.', icon: 'brain' }
      ]
    },
    {
      id: 'fundamentals',
      category: 'CS Core',
      description: 'Foundational computer science subjects.',
      icon: 'cpu',
      items: [
        { name: 'DSA', level: 'Intermediate', note: 'Practicing arrays, sorting, searching and core patterns.', icon: 'network' },
        { name: 'OOP', level: 'Beginner', note: 'Classes, objects, constructors and functions in C++.', icon: 'boxes' }
      ]
    },
    {
      id: 'soft-skills',
      category: 'Soft Skills',
      description: 'People-focused skills strengthened through community outreach and practical teamwork.',
      icon: 'users',
      items: [
        { name: 'Communication', level: 'Intermediate', note: 'Built confidence by reaching out to people and conducting an environmental awareness session.', icon: 'message-circle' },
        { name: 'Leadership', level: 'Intermediate', note: 'Took initiative during the CDP and helped coordinate participation and quiz registrations.', icon: 'crown' },
        { name: 'Teamwork', level: 'Intermediate', note: 'Collaborated with others during community-focused activities and project work.', icon: 'users-round' },
        { name: 'Community Outreach', level: 'Intermediate', note: 'Engaged with people directly and helped achieve 250+ quiz registrations through the CDP.', icon: 'megaphone' }
      ]
    },
    {
      id: 'design',
      category: 'Design & UI/UX',
      description: 'Design fundamentals for creating clear and user-friendly digital experiences.',
      icon: 'layout-dashboard',
      items: [
        { name: 'UI/UX Design', level: 'Beginner', note: 'Learning interface design, user experience principles and visual hierarchy.', icon: 'pen-tool' }
      ]
    }
  ],

  projects: [
    {
      title: 'Smart Health Monitoring System',
      badge: 'ACADEMIC PROJECT',
      categoryKey: 'engineering',
      categoryLabel: 'Engineering',
      icon: 'cpu',
      highlight: true,
      problem: 'A practical electronics and communication engineering project requiring a working technical solution.',
      technology: 'Electronics / Embedded concepts',
      myRole: 'Designed, implemented and documented the project work.',
      result: 'Completed the academic project while strengthening practical engineering and troubleshooting skills.',
      learning: 'Learned how hardware-oriented requirements translate into structured implementation and testing.',
      technologies: ['ECE', 'Engineering', 'Documentation'],
      status: 'Completed',
      githubUrl: '',
      demoUrl: '#'
    },
   {
    title: 'DSA Algorithm Visualizer',
    badge: 'DSA PROJECT',
    categoryKey: 'web',
    categoryLabel: 'Web Development',
    icon: 'code-2',
    highlight: true,
    problem: 'Make sorting algorithms easier to understand by showing each comparison, swap, move and execution step visually.',
    technology: 'HTML, CSS, JavaScript, Data Structures & Algorithms',
    myRole: 'Designed and developed the interactive visualizer, sorting algorithms, custom array input and execution controls.',
    result: 'Built an interactive learning tool with Bubble, Selection, Insertion and Merge Sort, live statistics, pause/resume, speed control, pseudocode and complexity analysis.',
    learning: 'Strengthened JavaScript, algorithmic thinking, DSA fundamentals, interactive UI development and data visualization.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'DSA'],
    status: 'Completed',
    githubUrl: 'https://github.com/MishraAkshat-pixel/dsa-algorithm-visualizer',
    demoUrl: 'https://mishraakshat-pixel.github.io/dsa-algorithm-visualizer/'
},
    {
      title: 'Community Development Project (CDP)',
      badge: 'COMMUNITY IMPACT',
      categoryKey: 'community',
      categoryLabel: 'Community Development',
      icon: 'leaf',
      highlight: true,
      problem: 'Support environmental awareness and meaningful community participation through an awareness activity.',
      technology: 'Environmental Awareness • Online Quiz • Community Outreach',
      myRole: 'Conducted an environmental awareness session, encouraged participation and helped community members register for the quiz.',
      result: 'Completed 250+ registrations while contributing to a community-focused environmental awareness initiative.',
      learning: 'Strengthened communication, leadership, teamwork and the ability to create engagement beyond purely technical work.',
      technologies: ['CDP', 'Environmental Awareness', 'Communication', 'Leadership'],
      status: 'Completed',
      githubUrl: '',
      demoUrl: '#'
    }
  ],

  education: [
    {
      period: '2024 — Present',
      status: 'CURRENT',
      degree: 'B.Tech Computer Science & Engineering (AI & ML)',
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      details: 'Second-year undergraduate student developing foundations in programming, data structures, databases, web development and AI/ML.'
    },
    {
      period: 'Class XII',
      status: 'COMPLETED',
      degree: 'Senior Secondary (12th Class)',
      institution: 'Bethel Academy',
      location: 'India',
      details: 'Completed Class XII at Bethel Academy, building the academic foundation for higher studies in Computer Science and Engineering.'
    },
    {
      period: 'Class X',
      status: 'COMPLETED',
      degree: 'Secondary School (10th Class)',
      institution: 'Tagore Public School',
      location: 'India',
      details: 'Completed Class X at Tagore Public School, establishing the foundational academic background for senior secondary education.'
    }
  ],

  certifications: [
    {
      title: 'Times of India — Community Development Project',
      issuer: 'Times Foundation / Times of India',
      period: '2026',
      icon: 'award',
      imageUrl: 'assets/images/times-of-india-certificate.jpg',
      description: 'Certificate of completion for the Community Development Project, recognizing community-focused environmental awareness and social participation.',
      verifyUrl: 'assets/images/times-of-india-certificate.jpg'
    },
    {
      title: 'UI/UX Design Certificate',
      issuer: 'Tutedude',
      period: '20 Jul 2026',
      icon: 'palette',
      imageUrl: 'assets/images/ui-ux-certificate.jpg',
      description: 'Certificate of completion for successfully completing the Tutedude UI/UX course.',
      verifyUrl: 'assets/images/ui-ux-certificate.jpg'
    }
  ],

  achievements: [
    {
      title: '250+ Registrations',
      subtitle: 'Community Engagement',
      badge: '250+',
      icon: 'user-plus',
      description: 'Helped drive registrations during community development and awareness activities.'
    },
    {
      title: 'Environmental Awareness',
      subtitle: 'Community Development Project',
      badge: 'CDP',
      icon: 'leaf',
      description: 'Conducted an awareness session and encouraged participation in an online quiz activity.'
    },
    {
      title: 'DSA Practice',
      subtitle: 'C++ / LeetCode',
      badge: 'ONGOING',
      icon: 'brain',
      description: 'Building consistency by practicing algorithmic problems and learning core DSA patterns.'
    }
  ],

  dsaSection: {
    topicProgress: [
      { name: 'Arrays', status: 'Practicing', icon: 'grid-2x2' },
      { name: 'Searching', status: 'Practicing', icon: 'search' },
      { name: 'Sorting', status: 'Practicing', icon: 'arrow-down-up' },
      { name: 'OOP', status: 'Learning', icon: 'boxes' },
      { name: 'Linked Lists', status: 'Learning', icon: 'link-2' }
    ],
    codeSnippets: [
      {
        tabName: 'Two Sum',
        title: 'Two Sum (Hash Map in C++)',
        complexity: 'Time: O(n) | Space: O(n)',
        code: `#include <unordered_map>\n#include <vector>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> seen;\n\n    for (int i = 0; i < nums.size(); i++) {\n        int need = target - nums[i];\n        if (seen.count(need)) {\n            return {seen[need], i};\n        }\n        seen[nums[i]] = i;\n    }\n\n    return {};\n}`
      },
      {
        tabName: 'Binary Search',
        title: 'Binary Search in C++',
        complexity: 'Time: O(log n) | Space: O(1)',
        code: `int binarySearch(vector<int>& nums, int target) {\n    int left = 0, right = nums.size() - 1;\n\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n\n        if (nums[mid] == target) return mid;\n        if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n\n    return -1;\n}`
      }
    ]
  },

  contact: {
    email: 'mishraakshat815@gmail.com'
  },

  codeSnippet: {
    content: `const developer = {\n  name: "Akshat Mishra",\n  degree: "B.Tech CSE (AI & ML)",\n  university: "Lovely Professional University",\n  areaOfInterest: "Software Development",\n  technicalSkills: ["C++", "Python", "SQL", "HTML", "CSS", "JavaScript"],\n  currentFocus: "DSA + Web Development",\n  careerAspiration: "Software Engineer",\n  mindset: "Learn → Build → Solve → Improve",\n  availableFor: "Internships & Collaborations",\n  dsa: "Practicing in C++",\n  projects: "Building practical solutions",\n  tools: "GitHub • LeetCode • VS Code"\n};`
  }
};
