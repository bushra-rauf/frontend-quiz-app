import { QuizQuestion } from "@/components/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  // JavaScript Questions
  {
    id: 1,
    category: 'JavaScript',
    difficulty: 'Medium',
    question: 'What is the output of: typeof null?',
    options: ['null', 'undefined', 'object', 'number'],
    correctAnswer: 2,
    explanation: 'typeof null returns "object" due to a historical bug in JavaScript.'
  },
  {
    id: 2,
    category: 'JavaScript',
    difficulty: 'Easy',
    question: 'What does "use strict" do in JavaScript?',
    options: [
      'Makes code run faster',
      'Enables strict mode for safer coding',
      'Makes all variables global',
      'Disables console logs'
    ],
    correctAnswer: 1,
    explanation: 'Strict mode helps catch common coding mistakes and unsafe actions.'
  },
  {
    id: 3,
    category: 'JavaScript',
    difficulty: 'Medium',
    question: 'What is a closure in JavaScript?',
    options: [
      'A way to close browser windows',
      'A function that has access to outer function variables',
      'A method to end loops',
      'A type of loop'
    ],
    correctAnswer: 1,
    explanation: 'A closure is a function that remembers variables from its outer scope.'
  },
  {
    id: 4,
    category: 'JavaScript',
    difficulty: 'Easy',
    question: 'What is the difference between == and ===?',
    options: [
      'No difference',
      '== checks type and value, === checks only value',
      '=== checks type and value, == checks only value',
      'Both are deprecated'
    ],
    correctAnswer: 2,
    explanation: '=== is strict equality (checks both type and value), == is loose equality (coerces types).'
  },
  {
    id: 5,
    category: 'JavaScript',
    difficulty: 'Medium',
    question: 'What is event bubbling?',
    options: [
      'Events moving from parent to child',
      'Events moving from child to parent',
      'Events that create bubbles',
      'A CSS animation'
    ],
    correctAnswer: 1,
    explanation: 'Event bubbling is when events propagate from the target element up through its ancestors.'
  },
  {
    id: 6,
    category: 'JavaScript',
    difficulty: 'Hard',
    question: 'What does the "this" keyword refer to?',
    options: [
      'Always the global object',
      'The current function',
      'The object that owns the executing code',
      'The previous function'
    ],
    correctAnswer: 2,
    explanation: '"this" refers to the object that is executing the current function.'
  },
  {
    id: 7,
    category: 'JavaScript',
    difficulty: 'Easy',
    question: 'What is the purpose of the map() method?',
    options: [
      'To create a new array with transformed elements',
      'To filter array elements',
      'To find an element',
      'To sort arrays'
    ],
    correctAnswer: 0,
    explanation: 'map() creates a new array by applying a function to each element.'
  },
  {
    id: 8,
    category: 'JavaScript',
    difficulty: 'Medium',
    question: 'What is a Promise in JavaScript?',
    options: [
      'A way to make promises to users',
      'An object representing eventual completion of an async operation',
      'A type of variable',
      'A loop structure'
    ],
    correctAnswer: 1,
    explanation: 'A Promise is an object that represents the eventual completion or failure of an asynchronous operation.'
  },

  // TypeScript Questions
  {
    id: 9,
    category: 'TypeScript',
    difficulty: 'Easy',
    question: 'What is TypeScript?',
    options: [
      'A JavaScript framework',
      'A superset of JavaScript with static typing',
      'A CSS preprocessor',
      'A database language'
    ],
    correctAnswer: 1,
    explanation: 'TypeScript adds static typing and other features to JavaScript.'
  },
  {
    id: 10,
    category: 'TypeScript',
    difficulty: 'Easy',
    question: 'What is an interface in TypeScript?',
    options: [
      'A way to define the structure of an object',
      'A type of loop',
      'A CSS feature',
      'A JavaScript method'
    ],
    correctAnswer: 0,
    explanation: 'Interfaces define the shape of objects and enforce type contracts.'
  },
  {
    id: 11,
    category: 'TypeScript',
    difficulty: 'Easy',
    question: 'What does the "any" type mean in TypeScript?',
    options: [
      'A specific number type',
      'A type that can be anything, disabling type checking',
      'A boolean type',
      'A string type'
    ],
    correctAnswer: 1,
    explanation: 'The "any" type opts out of type checking and should be used sparingly.'
  },
  {
    id: 12,
    category: 'TypeScript',
    difficulty: 'Medium',
    question: 'What is the difference between type and interface?',
    options: [
      'No difference at all',
      'Types can use unions and intersections, interfaces can be extended',
      'Interfaces are deprecated',
      'Types are only for primitives'
    ],
    correctAnswer: 1,
    explanation: 'Both define object shapes, but have different capabilities and use cases.'
  },
  {
    id: 13,
    category: 'TypeScript',
    difficulty: 'Medium',
    question: 'What is a generic in TypeScript?',
    options: [
      'A general variable',
      'A way to create reusable components with flexible types',
      'A type of loop',
      'A CSS class'
    ],
    correctAnswer: 1,
    explanation: 'Generics allow you to write flexible, reusable code that works with multiple types.'
  },
  {
    id: 14,
    category: 'TypeScript',
    difficulty: 'Easy',
    question: 'What does "readonly" do in TypeScript?',
    options: [
      'Makes a property immutable after initialization',
      'Hides the property',
      'Makes the property optional',
      'Deletes the property'
    ],
    correctAnswer: 0,
    explanation: 'readonly prevents modification of a property after it\'s been set.'
  },
  {
    id: 15,
    category: 'TypeScript',
    difficulty: 'Medium',
    question: 'What is type assertion in TypeScript?',
    options: [
      'A way to test types',
      'A way to tell the compiler what type a value is',
      'A debugging tool',
      'An error handler'
    ],
    correctAnswer: 1,
    explanation: 'Type assertion lets you override TypeScript\'s inferred type when you know better.'
  },
  {
    id: 16,
    category: 'TypeScript',
    difficulty: 'Hard',
    question: 'What is the "unknown" type?',
    options: [
      'Same as any',
      'A type-safe counterpart of any',
      'A deprecated type',
      'Only for errors'
    ],
    correctAnswer: 1,
    explanation: 'unknown is type-safe - you must check its type before using it.'
  },

  // React Questions
  {
    id: 17,
    category: 'React',
    difficulty: 'Easy',
    question: 'What is JSX?',
    options: [
      'A JavaScript framework',
      'A syntax extension for JavaScript that looks like HTML',
      'A CSS preprocessor',
      'A database query language'
    ],
    correctAnswer: 1,
    explanation: 'JSX allows you to write HTML-like syntax in JavaScript.'
  },
  {
    id: 18,
    category: 'React',
    difficulty: 'Medium',
    question: 'What is the Virtual DOM?',
    options: [
      'A copy of the real DOM kept in memory',
      'A new browser feature',
      'A CSS property',
      'A testing tool'
    ],
    correctAnswer: 0,
    explanation: 'Virtual DOM is a lightweight copy of the DOM used for efficient updates.'
  },
  {
    id: 19,
    category: 'React',
    difficulty: 'Easy',
    question: 'What is the purpose of useState hook?',
    options: [
      'To fetch data from APIs',
      'To add state to functional components',
      'To style components',
      'To handle routing'
    ],
    correctAnswer: 1,
    explanation: 'useState lets you add state variables to functional components.'
  },
  {
    id: 20,
    category: 'React',
    difficulty: 'Medium',
    question: 'What is useEffect used for?',
    options: [
      'Styling components',
      'Performing side effects in functional components',
      'Creating new components',
      'Type checking'
    ],
    correctAnswer: 1,
    explanation: 'useEffect handles side effects like data fetching, subscriptions, and DOM mutations.'
  },
  {
    id: 21,
    category: 'React',
    difficulty: 'Easy',
    question: 'What are props in React?',
    options: [
      'Properties passed from parent to child components',
      'A type of state',
      'CSS classes',
      'Event handlers'
    ],
    correctAnswer: 0,
    explanation: 'Props are read-only properties passed from parent to child components.'
  },
  {
    id: 22,
    category: 'React',
    difficulty: 'Medium',
    question: 'What is the difference between state and props?',
    options: [
      'No difference',
      'State is mutable and managed within component, props are immutable and passed from parent',
      'Props are mutable, state is immutable',
      'Both are the same thing'
    ],
    correctAnswer: 1,
    explanation: 'State is internal and mutable, props are external and read-only.'
  },
  {
    id: 23,
    category: 'React',
    difficulty: 'Medium',
    question: 'What is React Context?',
    options: [
      'A way to pass data through component tree without props drilling',
      'A styling library',
      'A routing solution',
      'A testing framework'
    ],
    correctAnswer: 0,
    explanation: 'Context provides a way to share values between components without passing props manually.'
  },
  {
    id: 24,
    category: 'React',
    difficulty: 'Hard',
    question: 'What is the key prop used for?',
    options: [
      'Styling elements',
      'Helping React identify which items changed in lists',
      'Adding event listeners',
      'Creating animations'
    ],
    correctAnswer: 1,
    explanation: 'Keys help React identify which items have changed, been added, or removed in lists.'
  },

  // Next.js Questions
  {
    id: 25,
    category: 'Next.js',
    difficulty: 'Easy',
    question: 'What is Next.js?',
    options: [
      'A CSS framework',
      'A React framework for production',
      'A database',
      'A testing library'
    ],
    correctAnswer: 1,
    explanation: 'Next.js is a React framework that provides features like SSR, SSG, and routing.'
  },
  {
    id: 26,
    category: 'Next.js',
    difficulty: 'Medium',
    question: 'What is Server Side Rendering (SSR)?',
    options: [
      'Rendering on the client',
      'Rendering HTML on the server before sending to client',
      'A CSS technique',
      'A database query'
    ],
    correctAnswer: 1,
    explanation: 'SSR generates HTML on the server for each request.'
  },
  {
    id: 27,
    category: 'Next.js',
    difficulty: 'Medium',
    question: 'What is Static Site Generation (SSG)?',
    options: [
      'Generating HTML at build time',
      'Generating HTML at runtime',
      'A styling method',
      'A routing technique'
    ],
    correctAnswer: 0,
    explanation: 'SSG pre-renders pages at build time for better performance.'
  },
  {
    id: 28,
    category: 'Next.js',
    difficulty: 'Medium',
    question: 'What is the purpose of getServerSideProps?',
    options: [
      'To fetch data at build time',
      'To fetch data on each request',
      'To style components',
      'To handle routing'
    ],
    correctAnswer: 1,
    explanation: 'getServerSideProps fetches data on every request on the server side.'
  },
  {
    id: 29,
    category: 'Next.js',
    difficulty: 'Hard',
    question: 'What is the App Router in Next.js 13+?',
    options: [
      'A new routing system using app directory',
      'A deprecated feature',
      'A CSS framework',
      'A database tool'
    ],
    correctAnswer: 0,
    explanation: 'App Router is a new routing paradigm using the app directory with React Server Components.'
  },
  {
    id: 30,
    category: 'Next.js',
    difficulty: 'Easy',
    question: 'What is Image component in Next.js used for?',
    options: [
      'Automatic image optimization',
      'Creating animations',
      'Styling images',
      'Compressing files'
    ],
    correctAnswer: 0,
    explanation: 'Next.js Image component provides automatic image optimization and lazy loading.'
  },
  {
    id: 31,
    category: 'Next.js',
    difficulty: 'Medium',
    question: 'What is API Routes in Next.js?',
    options: [
      'A way to create backend API endpoints',
      'A routing library',
      'A CSS feature',
      'A testing tool'
    ],
    correctAnswer: 0,
    explanation: 'API Routes let you create API endpoints within your Next.js app.'
  },
  {
    id: 32,
    category: 'Next.js',
    difficulty: 'Easy',
    question: 'What is the purpose of _app.js file?',
    options: [
      'To initialize pages and add global CSS',
      'To handle routing',
      'To create components',
      'To manage database'
    ],
    correctAnswer: 0,
    explanation: '_app.js wraps all pages and is used for global styles and layouts.'
  },

  // Tailwind Questions
  {
    id: 33,
    category: 'Tailwind',
    difficulty: 'Easy',
    question: 'What is Tailwind CSS?',
    options: [
      'A JavaScript framework',
      'A utility-first CSS framework',
      'A database',
      'A testing library'
    ],
    correctAnswer: 1,
    explanation: 'Tailwind is a utility-first CSS framework for rapidly building custom designs.'
  },
  {
    id: 34,
    category: 'Tailwind',
    difficulty: 'Easy',
    question: 'What does "utility-first" mean in Tailwind?',
    options: [
      'Using pre-built components only',
      'Composing designs using utility classes',
      'Writing custom CSS only',
      'Using JavaScript for styling'
    ],
    correctAnswer: 1,
    explanation: 'Utility-first means building designs by composing small, single-purpose utility classes.'
  },
  {
    id: 35,
    category: 'Tailwind',
    difficulty: 'Easy',
    question: 'How do you customize Tailwind configuration?',
    options: [
      'In tailwind.config.js file',
      'In package.json',
      'In index.html',
      'Cannot be customized'
    ],
    correctAnswer: 0,
    explanation: 'tailwind.config.js is where you customize colors, spacing, breakpoints, etc.'
  },
  {
    id: 36,
    category: 'Tailwind',
    difficulty: 'Medium',
    question: 'What is @apply directive used for?',
    options: [
      'To extract repeated utility patterns into custom CSS classes',
      'To import files',
      'To create animations',
      'To handle events'
    ],
    correctAnswer: 0,
    explanation: '@apply lets you compose utility classes into custom CSS classes.'
  },
  {
    id: 37,
    category: 'Tailwind',
    difficulty: 'Easy',
    question: 'What does "dark:" prefix do in Tailwind?',
    options: [
      'Makes colors darker',
      'Applies styles in dark mode',
      'Creates shadows',
      'Hides elements'
    ],
    correctAnswer: 1,
    explanation: 'dark: prefix applies styles when dark mode is enabled.'
  },
  {
    id: 38,
    category: 'Tailwind',
    difficulty: 'Medium',
    question: 'What is the purpose of JIT (Just-In-Time) mode?',
    options: [
      'Generates styles on-demand as you write them',
      'Makes site load faster',
      'Compresses images',
      'Handles routing'
    ],
    correctAnswer: 0,
    explanation: 'JIT mode generates CSS on-demand, resulting in faster builds and smaller files.'
  },
  {
    id: 39,
    category: 'Tailwind',
    difficulty: 'Easy',
    question: 'How do you add responsive breakpoints in Tailwind?',
    options: [
      'Using media queries only',
      'Using prefixes like sm:, md:, lg:',
      'Cannot add responsive styles',
      'Using JavaScript'
    ],
    correctAnswer: 1,
    explanation: 'Tailwind uses mobile-first responsive prefixes like sm:, md:, lg:, xl:.'
  },
  {
    id: 40,
    category: 'Tailwind',
    difficulty: 'Easy',
    question: 'What is the difference between p-4 and px-4?',
    options: [
      'No difference',
      'p-4 adds padding all around, px-4 adds padding left and right',
      'px-4 is deprecated',
      'p-4 is for mobile only'
    ],
    correctAnswer: 1,
    explanation: 'p-4 applies padding to all sides, px-4 applies only to left and right (x-axis).'
  },

  // Responsiveness Questions
  {
    id: 41,
    category: 'Responsiveness',
    difficulty: 'Easy',
    question: 'What is responsive web design?',
    options: [
      'Designs that respond to user clicks',
      'Designs that adapt to different screen sizes',
      'Animated designs',
      'Interactive designs'
    ],
    correctAnswer: 1,
    explanation: 'Responsive design ensures websites work well on all devices and screen sizes.'
  },
  {
    id: 42,
    category: 'Responsiveness',
    difficulty: 'Easy',
    question: 'What is a mobile-first approach?',
    options: [
      'Designing for desktop first',
      'Designing for mobile devices first, then scaling up',
      'Only supporting mobile devices',
      'Using mobile apps instead of websites'
    ],
    correctAnswer: 1,
    explanation: 'Mobile-first means starting with mobile design and progressively enhancing for larger screens.'
  },
  {
    id: 43,
    category: 'Responsiveness',
    difficulty: 'Easy',
    question: 'What is the viewport meta tag used for?',
    options: [
      'Adding images',
      'Controlling page dimensions and scaling on mobile',
      'Adding CSS',
      'Creating animations'
    ],
    correctAnswer: 1,
    explanation: 'The viewport meta tag controls how the page is displayed on mobile devices.'
  },
  {
    id: 44,
    category: 'Responsiveness',
    difficulty: 'Medium',
    question: 'What are CSS media queries?',
    options: [
      'Database queries',
      'CSS rules that apply based on device characteristics',
      'JavaScript functions',
      'HTML tags'
    ],
    correctAnswer: 1,
    explanation: 'Media queries apply different styles based on screen size, orientation, etc.'
  },
  {
    id: 45,
    category: 'Responsiveness',
    difficulty: 'Hard',
    question: 'What is the difference between responsive and adaptive design?',
    options: [
      'No difference',
      'Responsive uses fluid grids, adaptive uses fixed layouts for specific breakpoints',
      'Adaptive is deprecated',
      'Responsive is only for mobile'
    ],
    correctAnswer: 1,
    explanation: 'Responsive design is fluid and flexible, adaptive design uses distinct layouts for specific sizes.'
  },
  {
    id: 46,
    category: 'Responsiveness',
    difficulty: 'Easy',
    question: 'What are CSS Grid and Flexbox used for?',
    options: [
      'Adding colors',
      'Creating responsive layouts',
      'Database management',
      'Image optimization'
    ],
    correctAnswer: 1,
    explanation: 'Grid and Flexbox are CSS layout systems perfect for creating responsive designs.'
  },
  {
    id: 47,
    category: 'Responsiveness',
    difficulty: 'Medium',
    question: 'What are common responsive breakpoints?',
    options: [
      'There are no breakpoints',
      '320px (mobile), 768px (tablet), 1024px (desktop)',
      'Only 100px and 200px',
      'Breakpoints are deprecated'
    ],
    correctAnswer: 1,
    explanation: 'Common breakpoints target mobile, tablet, and desktop screen sizes.'
  },
  {
    id: 48,
    category: 'Responsiveness',
    difficulty: 'Medium',
    question: 'What does "rem" unit stand for and why use it?',
    options: [
      'Random Element Measure',
      'Root Element M, relative to root font size for scalability',
      'Responsive Element Module',
      'rem is deprecated'
    ],
    correctAnswer: 1,
    explanation: 'rem (root em) is relative to root font size, making it great for responsive typography.'
  }
];
