// Mock course data and data fetching utilities

export interface Course {
  id: string;
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  image: string;
  price?: number;
  instructor?: string;
  duration?: string;
  level?: string;
  keywords?: string[];
  learningOutcomes?: string[];
}

// Mock course database
const courses: Record<string, Course> = {
  '1': {
    id: '1',
    name: 'Advanced React Patterns and Best Practices',
    description: 'Master advanced React patterns including render props, higher-order components, compound components, and custom hooks. Learn how to build scalable and maintainable React applications with TypeScript, performance optimization techniques, and modern state management solutions.',
    provider: {
      name: 'Tech Academy',
      url: '#',
    },
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop',
    price: 99.99,
    instructor: 'Sarah Johnson',
    duration: 'P8W',
    level: 'Advanced',
    keywords: ['React', 'JavaScript', 'TypeScript', 'Web Development', 'Frontend'],
    learningOutcomes: [
      'Implement advanced React patterns like render props and compound components',
      'Optimize React application performance using memoization and code splitting',
      'Build type-safe applications with TypeScript and React',
      'Master custom hooks and state management patterns',
      'Apply best practices for scalable React architecture',
    ],
  },
  '2': {
    id: '2',
    name: 'Full-Stack Web Development with Node.js and MongoDB',
    description: 'Build modern full-stack web applications from scratch using Node.js, Express, MongoDB, and React. Learn RESTful API design, authentication, database modeling, deployment strategies, and industry best practices for professional web development.',
    provider: {
      name: 'Code Masters',
      url: '#',
    },
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=630&fit=crop',
    price: 149.99,
    instructor: 'Michael Chen',
    duration: 'P12W',
    level: 'Intermediate',
    keywords: ['Node.js', 'MongoDB', 'Express', 'Full-Stack', 'Web Development'],
    learningOutcomes: [
      'Build RESTful APIs with Node.js and Express',
      'Design and implement MongoDB database schemas',
      'Implement authentication and authorization systems',
      'Deploy full-stack applications to production',
      'Follow security best practices for web applications',
    ],
  },
  '3': {
    id: '3',
    name: 'Machine Learning Fundamentals with Python',
    description: 'Dive into the world of machine learning with Python. Learn supervised and unsupervised learning algorithms, neural networks, data preprocessing, model evaluation, and how to deploy ML models. Perfect for aspiring data scientists and ML engineers.',
    provider: {
      name: 'AI Learning Institute',
      url: '#',
    },
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=630&fit=crop',
    price: 199.99,
    instructor: 'Dr. Emily Rodriguez',
    duration: 'P10W',
    level: 'Beginner',
    keywords: ['Machine Learning', 'Python', 'AI', 'Data Science', 'Neural Networks'],
    learningOutcomes: [
      'Understand core machine learning concepts and algorithms',
      'Implement classification and regression models',
      'Work with popular ML libraries like scikit-learn and TensorFlow',
      'Preprocess and analyze data for machine learning',
      'Evaluate and optimize machine learning models',
    ],
  },
};

// Simulate async data fetching with a delay (mimics real API call)
export async function getCourseById(id: string): Promise<Course | null> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  
  return courses[id] || null;
}

// Function to get all course IDs (useful for generateStaticParams)
export async function getAllCourseIds(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return Object.keys(courses);
}
