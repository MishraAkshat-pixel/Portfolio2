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

  skills: [
    {
      id: 'programming',
      category: 'Programming',
      description: 'Languages I use for problem-solving and development.',
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
        { name: 'LeetCode', level: 'Beginner', note: 'Regular DSA problem-solving practice.', icon: 'brain' }
      ]
    },
    {
      id: 'fundamentals',
      category: 'CS Core',
      description: 'Foundational computer science subjects.',
      icon: 'cpu',
      items: [
        { name: 'DSA', level: 'Intermediate', note: 'Practicing arrays, sorting, searching and core patterns.', icon: 'network' },
        { name: 'OOP', level: 'Beginner', note: 'Classes, objects, constructors and functions in C++.', icon: 'boxes' },
        { name: 'Problem Solving', level: 'Intermediate', note: 'Breaking problems into structured, testable steps.', icon: 'lightbulb' }
      ]
    }
  ],

  projects: [
    {
      title: 'ECE Practical Project',
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
      technologies: ['ECE', 'Engineering', 'Problem Solving'],
      status: 'Completed',
      githubUrl: '',
      demoUrl: '#'
    },
    {
      title: 'Portfolio Website',
      badge: 'CURRENT BUILD',
      categoryKey: 'web',
      categoryLabel: 'Web Development',
      icon: 'globe',
      highlight: true,
      problem: 'Create a personal portfolio that presents technical growth, projects and achievements professionally.',
      technology: 'HTML, CSS, JavaScript, Tailwind CSS, Three.js',
      myRole: 'Designed and developed the portfolio experience.',
      result: 'Built an interactive gold-and-obsidian portfolio with responsive sections, animations and a 3D AI core.',
      learning: 'Improved frontend structure, UI composition, JavaScript interactions and visual design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
      status: 'In Progress',
      githubUrl: '',
      demoUrl: '#'
    },
    {
      title: 'DSA Practice Journey',
      badge: 'ONGOING',
      categoryKey: 'dsa',
      categoryLabel: 'DSA',
      icon: 'brackets',
      highlight: false,
      problem: 'Build consistency in competitive programming and technical interview problem-solving.',
      technology: 'C++ and LeetCode',
      myRole: 'Solving and reviewing problems while improving algorithmic thinking.',
      result: 'Developing stronger understanding of searching, sorting, arrays and common DSA patterns.',
      learning: 'Learning to compare approaches by time complexity, space complexity and edge cases.',
      technologies: ['C++', 'DSA', 'LeetCode'],
      status: 'Ongoing',
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
      period: 'Current Focus',
      status: 'LEARNING',
      degree: 'Data Structures & Algorithms',
      institution: 'Self-directed Practice',
      location: 'C++',
      details: 'Consistently practicing DSA problems and improving algorithmic problem-solving through hands-on coding.'
    }
  ],

  certifications: [
    {
      title: 'Times of India Certificate',
      issuer: 'Times of India / TCTC',
      period: '2026',
      icon: 'award',
      description: 'Certificate earned through community and development-oriented participation.',
      verifyUrl: '#'
    },
    {
      title: 'Community Development Project',
      issuer: 'Academic / Community Work',
      period: '2026',
      icon: 'users',
      description: 'Community-focused work involving environmental awareness and participant engagement.',
      verifyUrl: '#'
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
    email: 'akshat.mishra.dev@example.com'
  },

  codeSnippet: {
    content: `const developer = {\n  name: "Akshat Mishra",\n  degree: "B.Tech CSE (AI & ML)",\n  university: "Lovely Professional University",\n  areaOfInterest: "Software Development",\n  technicalSkills: ["C++", "Python", "SQL", "HTML", "CSS", "JavaScript"],\n  currentFocus: "DSA + Web Development",\n  careerAspiration: "Software Engineer",\n  mindset: "Learn → Build → Solve → Improve",\n  availableFor: "Internships & Collaborations",\n  dsa: "Practicing in C++",\n  projects: "Building practical solutions",\n  tools: "GitHub • LeetCode • VS Code"\n};`
  }
};
