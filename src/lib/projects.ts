export interface FrameworkStep {
  label: string;
  description?: string;
}

export interface Framework {
  intro?: string;
  steps: FrameworkStep[];
}

export interface CourseEmbed {
  src: string;
  title: string;
  /** Approximate aspect ratio as a CSS value, e.g. "16 / 10" */
  aspectRatio?: string;
  note?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface DesignProcessStep {
  step: string;
  detail: string;
}

export interface StoryboardExample {
  screenNumber: string;
  screenTitle: string;
  onScreenText: string;
  interaction: string;
  notes?: string;
}

export interface ScriptExample {
  scene: string;
  text: string;
  interaction?: string;
  feedback?: string;
}

export interface QuickSummary {
  learningNeed: string;
  designApproach: string;
  learningExperience: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  tool: string;
  tools: string[];
  projectType?: string;
  category: string;
  isPlaceholder?: boolean;
  placeholderNote?: string;
  cardImage?: string;
  gallery?: GalleryImage[];
  galleryHeading?: string;
  embed?: CourseEmbed;
  framework?: Framework;
  quickSummary: QuickSummary;
  designProcess?: DesignProcessStep[];
  storyboardExample?: StoryboardExample;
  scriptExample?: ScriptExample;
  designTakeaway?: string;
}

export const projects: Project[] = [
  // ---------------------------------------------------------------
  // 1. Effective Workplace Communication
  // ---------------------------------------------------------------
  {
    slug: 'effective-workplace-communication',
    title: 'Effective Workplace Communication: Giving and Receiving Feedback',
    shortDescription:
      'A Rise 360 course that helps employees and team leaders give specific feedback and respond well when they receive it.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    category: 'Corporate Microlearning',
    embed: {
      src: '/courses/effective-workplace-communication/index.html',
      title: 'Effective Workplace Communication: Giving and Receiving Feedback (Articulate Rise 360 course)',
      aspectRatio: '16 / 10',
    },
    quickSummary: {
      learningNeed:
        'Employees and emerging team leaders often know feedback matters, but they can struggle to make it specific, and to receive it without becoming defensive.',
      designApproach:
        'I built the course around two linked frameworks, one for giving feedback and one for receiving it, with examples, sorting activities and knowledge checks throughout.',
      learningExperience:
        'Learners compare real feedback examples, apply the Situation, Behaviour, Impact, Next Step structure, and practise responding to feedback they disagree with.',
    },
    framework: {
      steps: [
        { label: 'Situation', description: 'Describe when or where the situation happened.' },
        { label: 'Behaviour', description: 'Describe what was observed, not what was assumed.' },
        { label: 'Impact', description: 'Explain why the behaviour mattered.' },
        { label: 'Next Step', description: 'Suggest what could happen differently.' },
      ],
    },
    designProcess: [
      {
        step: 'Understand the learning problem',
        detail:
          'I started from a project brief and learner analysis. People generally know feedback matters, but they do not always know how to make it specific, or how to receive it without getting defensive.',
      },
      {
        step: 'Define the learning objectives',
        detail:
          'The brief set five objectives, from telling constructive feedback apart from criticism through to responding well to feedback the learner disagrees with.',
      },
      {
        step: 'Plan the content',
        detail:
          'I mapped the course into lessons built around one question per section: what do you need to know, what do you need to do, and how do we know you can do it.',
      },
      {
        step: 'Write the script',
        detail:
          'I wrote the full screen-by-screen script, including narration, on-screen text and the wording for every knowledge check, before building anything in Rise.',
      },
      {
        step: 'Build the interaction',
        detail:
          'The script became the Rise 360 course you can try above, including the click-to-reveal cards, the sorting activities and both feedback frameworks.',
      },
      {
        step: 'Assess the learner',
        detail: 'Each knowledge check and the closing quiz were written against the five objectives, not added afterward.',
      },
    ],
    scriptExample: {
      scene: 'Lesson 2 quiz question, from the finished course',
      text:
        'A manager wants to give feedback about a missed client update using the four-step structure. Which option best follows Situation, Behaviour, Impact, and Next Step? Correct option: "In yesterday’s client check-in, the update was sent after the meeting started. The team could not answer questions right away. Sending the update 30 minutes earlier next time will help everyone prepare."',
      interaction: 'Multiple choice, one correct answer.',
      feedback:
        'This option includes the situation, the observed behaviour, the impact, and a clear next step. The other options are marked incorrect because they are missing one of those four parts.',
    },
    designTakeaway:
      'Giving learners two compatible frameworks, one for the giver and one for the receiver of feedback, makes the course useful from both sides of a real conversation, without turning it into two separate courses.',
  },

  // ---------------------------------------------------------------
  // 2. Handling Difficult Customer Conversations
  // ---------------------------------------------------------------
  {
    slug: 'handling-difficult-customer-conversations',
    title: 'Handling Difficult Customer Conversations',
    shortDescription:
      'A branching Storyline scenario where customer-facing employees practise handling a frustrated customer through realistic decisions and feedback.',
    tool: 'Articulate Storyline',
    tools: ['Articulate Storyline 360'],
    projectType: 'Branching Scenario Course',
    category: 'Scenario-Based Learning',
    cardImage: '/images/handling-difficult-customer-conversations/thumbnail.jpg',
    embed: {
      src: '/courses/handling-difficult-customer-conversations/story.html',
      title: 'Handling Difficult Customer Conversations (Articulate Storyline scenario)',
      aspectRatio: '16 / 10',
      note: 'Best viewed on a larger screen. Use the Start button to begin the scenario.',
    },
    quickSummary: {
      learningNeed: 'Customer-facing employees may know the right principles but still struggle when a customer is frustrated.',
      designApproach:
        'I used a realistic customer scenario with decision points, feedback and consequences so learners could practise how to respond.',
      learningExperience:
        'Learners make decisions, see how their responses affect the conversation, and practise a five-step approach they can use in real customer conversations.',
    },
    framework: {
      steps: [
        { label: 'Listen' },
        { label: 'Acknowledge' },
        { label: 'Clarify' },
        { label: 'Respond' },
        { label: 'Confirm' },
      ],
    },
    designProcess: [
      {
        step: 'Understand the learning problem',
        detail:
          'The brief and learner analysis were clear that the gap was not knowledge. Employees know good service in theory, but do not always know what to say while a customer is frustrated.',
      },
      {
        step: 'Define the learning objectives',
        detail:
          'Three objectives anchor the course: recognise what escalates or reduces tension, choose the right response, and move a conversation toward resolution.',
      },
      {
        step: 'Plan the content',
        detail:
          'I mapped a scenario map and branching strategy before opening Storyline, including the effective and ineffective path through each decision.',
      },
      {
        step: 'Write the script',
        detail:
          'I wrote a full scenario script for the customer dialogue, the response options at each decision point, and the feedback for each one. The example below is taken directly from that script.',
      },
      {
        step: 'Create the storyboard',
        detail:
          'The script was broken down into individual Storyline slides and layers, including the feedback layers you can see in the storyboard example below.',
      },
      {
        step: 'Build the interaction',
        detail: 'The scenario, decision points and feedback layers were built in Storyline as scripted.',
      },
      {
        step: 'Assess the learner',
        detail: 'The three decisions inside the scenario are the main assessment, backed by a final multiple-choice practice challenge.',
      },
    ],
    storyboardExample: {
      screenNumber: 'Slide 1.10',
      screenTitle: 'Put Into Practice',
      onScreenText:
        '"I am sorry you have had to follow up repeatedly. Let me check the status of your request and confirm what the next step will be." / "Delays like this can happen. You will need to be patient." / "The team handling your request will contact you when they are ready."',
      interaction: 'Multiple choice, 10 points, 1 attempt permitted.',
      notes:
        'Built with Correct and Incorrect slide layers in Storyline. Feedback for the correct choice: "Your response acknowledges the customer’s experience and moves the conversation toward action. You are also avoiding a promise about an outcome or timeline you cannot control."',
    },
    scriptExample: {
      scene: 'Screen 19, Decision 1: Initial Response, from the scenario script',
      text:
        'Customer: "I have already contacted your company twice about this. Nobody has fixed the problem, and now I have to call again." How do you respond? A. "I understand you are frustrated, but you will need to explain the problem to me." B. "I am sorry you have had to contact us again. Let me review what has happened so far so I can understand the issue." C. "If you give me your details, I will see what I can do."',
      interaction: 'Multiple choice. The learner picks how the representative responds.',
      feedback:
        'Best answer: B. It acknowledges the customer’s frustration and takes responsibility for moving the conversation forward without making an immediate promise about the outcome.',
    },
    designTakeaway:
      'Placing the learner inside one continuous, developing conversation, rather than a set of disconnected questions, is what makes the practice feel like the real thing instead of a quiz about the real thing.',
  },

  // ---------------------------------------------------------------
  // 3. Professional Genially Learning Experiences (Soteria Learning)
  // ---------------------------------------------------------------
  {
    slug: 'professional-genially-learning-experiences',
    title: 'Professional Genially Learning Experiences',
    shortDescription:
      'An interactive digital learning experience designed in Genially for final-year medical students, across Digital Innovation, Clinical Enterprise and System Leadership.',
    tool: 'Genially',
    tools: ['Genially'],
    projectType: 'Soteria Learning',
    category: 'Interactive Learning',
    cardImage: '/images/professional-genially-learning-experiences/cover.png',
    galleryHeading: 'Selected Work',
    gallery: [
      {
        src: '/images/professional-genially-learning-experiences/cover.png',
        alt: 'Opening screen of a lesson in the System Leadership track',
        caption: 'The opening screen of a lesson in the System Leadership track.',
      },
      {
        src: '/images/professional-genially-learning-experiences/scenario.jpg',
        alt: 'A short scenario used to introduce a concept in the Digital Innovation track',
        caption: 'A short scenario I used to introduce an idea before naming it, from the Digital Innovation track.',
      },
      {
        src: '/images/professional-genially-learning-experiences/case-study.jpg',
        alt: 'A case study screen used for practice in the Digital Innovation track',
        caption: 'A case study screen used for practice, in the same visual style.',
      },
      {
        src: '/images/professional-genially-learning-experiences/template.jpg',
        alt: 'A reusable template handed to the learner, with a worked example, from the Digital Innovation track',
        caption: 'A template handed to the learner, with a worked example already filled in.',
      },
      {
        src: '/images/professional-genially-learning-experiences/systems-table.jpg',
        alt: 'A content screen from the Clinical Enterprise track',
        caption: 'A content screen from the Clinical Enterprise track.',
      },
      {
        src: '/images/professional-genially-learning-experiences/feedback.jpg',
        alt: 'A content screen on feedback in a system, from the Clinical Enterprise track',
        caption: 'Another content screen from the same lesson in the Clinical Enterprise track.',
      },
    ],
    quickSummary: {
      learningNeed:
        'Final-year medical students needed practical, hands-on material on human-centred design, systems thinking and leadership, alongside their clinical training.',
      designApproach:
        'I designed interactive Genially lessons across three tracks, Digital Innovation, Clinical Enterprise and System Leadership, using short scenarios, reusable templates and checks.',
      learningExperience:
        'Learners work through a real scenario, apply a template to their own thinking, and complete a short check before moving to the next part.',
    },
    designProcess: [
      {
        step: 'Define the learning objectives',
        detail: 'Every lesson starts with a short screen that says what the learner will be able to do by the end.',
      },
      {
        step: 'Plan the content',
        detail:
          'Each lesson has four timed parts, about fifteen minutes each. Every part follows the same shape: an example, a short explanation, a template, then a check.',
      },
      {
        step: 'Build the interaction',
        detail: 'I built each lesson in Genially. This included the click-to-reveal screens, the case studies and the templates.',
      },
      {
        step: 'Assess the learner',
        detail: 'Each part ends with a short check. The lesson closes with a quiz that compares the learner’s answer with a model response.',
      },
    ],
    designTakeaway:
      'Every lesson follows the same pattern: a short story, then a framework, then a template, then a check. That consistency ties the three tracks together into one connected experience.',
  },

  // ---------------------------------------------------------------
  // 4. Managing Workplace Information
  // ---------------------------------------------------------------
  {
    slug: 'managing-workplace-information',
    title: 'Managing Workplace Information: Find, Organise, Check, and Share with Confidence',
    shortDescription:
      'A Rise 360 course that helps employees find, organise, check and share workplace information with confidence.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    category: 'Content Transformation',
    embed: {
      src: '/courses/managing-workplace-information/index.html',
      title: 'Managing Workplace Information: Find, Organise, Check, and Share with Confidence (Articulate Rise 360 course)',
      aspectRatio: '16 / 10',
    },
    quickSummary: {
      learningNeed:
        'Employees create, store and share information every day, and without a shared approach, they waste time, use outdated versions, or share things with the wrong people.',
      designApproach:
        'I turned general guidance on file management into a course built around one framework, Find, Organise, Check, Share, with examples and sorting activities for each step.',
      learningExperience:
        'Learners recognise common information problems, sort real examples into safe and unsafe categories, and apply all four steps to a realistic workplace scenario.',
    },
    framework: {
      steps: [
        { label: 'Find', description: 'Locate the likely source.' },
        { label: 'Organise', description: 'Use the agreed structure and naming conventions.' },
        { label: 'Check', description: 'Confirm accuracy, currency, relevance and approval status.' },
        { label: 'Share', description: 'Give the right information to the right people.' },
      ],
    },
    designProcess: [
      {
        step: 'Understand the learning problem',
        detail:
          'I started from raw subject-matter guidance on managing information, written as a list of instructions rather than a learning experience, and analysed what was actually worth teaching.',
      },
      {
        step: 'Define the learning objectives',
        detail: 'Four objectives came out of that analysis, from recognising common problems to applying the practices to a real situation.',
      },
      {
        step: 'Plan the content',
        detail:
          'A content and gap analysis decided what to keep, combine or turn into practice. A course outline then sequenced it into four sections: Find, Organise, Check, Share.',
      },
      {
        step: 'Write the script',
        detail: 'I wrote the full screen-by-screen script for all four sections before building the Rise course.',
      },
      {
        step: 'Build the interaction',
        detail: 'The script became the Rise 360 course above, including the click-to-reveal cards and sorting activities.',
      },
      {
        step: 'Assess the learner',
        detail: 'Knowledge checks were mapped directly to each objective, and the closing scenario brings all four steps together.',
      },
    ],
    scriptExample: {
      scene: 'Knowledge check from the finished course',
      text:
        'You need the organisation’s current travel policy. Where should you look first? Options: an old email from a colleague, your personal downloads folder, the organisation’s approved policy or knowledge repository, a document found through an internet search.',
      interaction: 'Multiple choice.',
      feedback:
        'Correct answer: the organisation’s approved policy or knowledge repository. It is the official and most reliable source for the current policy. Each of the other three options has its own feedback explaining why it is not reliable.',
    },
    designTakeaway:
      'The instructional value here was almost entirely in restructuring, not rewriting. The underlying guidance did not need to change, but the order it was taught in, and the decisions it was tied to, did.',
  },

  // ---------------------------------------------------------------
  // 5. Energy in Action (curriculum transformation)
  // ---------------------------------------------------------------
  {
    slug: 'energy-in-action',
    title: 'Energy in Action: Forms, Transfer, and Transformation in Everyday Life',
    shortDescription:
      'A Rise 360 course that turns a lower-secondary science curriculum on energy into an interactive digital lesson.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    projectType: 'Curriculum-to-Digital-Learning Project',
    category: 'Curriculum Transformation',
    embed: {
      src: '/courses/energy-in-action/index.html',
      title: 'Energy in Action: Forms, Transfer, and Transformation in Everyday Life (Articulate Rise 360 course)',
      aspectRatio: '16 / 10',
    },
    quickSummary: {
      learningNeed: 'Energy can be difficult to understand when it is taught only as scientific definitions.',
      designApproach:
        'I turned the curriculum content into short explanations, everyday examples, interactive activities and checks for understanding.',
      learningExperience:
        'Learners identify energy forms, follow energy as it moves and changes, and apply the concepts to familiar situations.',
    },
    designProcess: [
      {
        step: 'Understand the learning problem',
        detail:
          'I started from curriculum standards on energy, not a blank brief, and worked out what a curriculum statement leaves out: examples, practice and assessment.',
      },
      {
        step: 'Define the learning objectives',
        detail: 'Four objectives set out what a learner should be able to identify, explain and apply by the end of the course.',
      },
      {
        step: 'Plan the content',
        detail:
          'A content analysis sorted the curriculum into what learners need to recall, understand and apply, and flagged the misconceptions the course needed to address directly.',
      },
      {
        step: 'Write the script',
        detail: 'I wrote a full script with on-screen text, narration and visual direction for every screen before building the course.',
      },
      {
        step: 'Build the interaction',
        detail: 'The script became the Rise 360 course above, including the flashcards and the compare and contrast activities.',
      },
      {
        step: 'Assess the learner',
        detail: 'Knowledge checks were written to target the specific misconceptions found during content analysis, not just to test definitions.',
      },
    ],
    scriptExample: {
      scene: 'Knowledge check from the finished course',
      text:
        'Which statement best describes energy? Options: energy is only found in moving objects, energy is the ability to cause change or make things happen, energy can only be produced by machines, energy disappears when an object stops moving.',
      interaction: 'Multiple choice.',
      feedback:
        'Correct answer: energy is the ability to cause change or make things happen. The other options are addressed directly, for example: energy does not disappear, it changes form or is stored.',
    },
    designTakeaway:
      'Working from curriculum standards rather than a blank brief meant the real instructional design task was less about inventing content and more about sequencing it: deciding what a 12 to 14-year-old needs to see and do, in what order, before the underlying science makes sense.',
  },

  // ---------------------------------------------------------------
  // 6. Taming the Chaos
  // ---------------------------------------------------------------
  {
    slug: 'taming-the-chaos',
    title: 'Taming the Chaos: Mastering Task Prioritisation with the Eisenhower Matrix',
    shortDescription:
      'A Rise 360 microlearning course that helps professionals use the Eisenhower Matrix to prioritise a busy workday.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    category: 'Corporate Microlearning',
    embed: {
      src: '/courses/taming-the-chaos/index.html',
      title: 'Taming the Chaos: Mastering Task Prioritization with the Eisenhower Matrix (Articulate Rise 360 course)',
      aspectRatio: '16 / 10',
    },
    quickSummary: {
      learningNeed: 'Learners can easily confuse tasks that are urgent with tasks that are important.',
      designApproach: 'I used the Eisenhower Matrix with examples, classification activities and workplace scenarios.',
      learningExperience: 'Learners practise sorting tasks and deciding what to do, schedule, delegate or eliminate.',
    },
    framework: {
      steps: [
        { label: 'Urgent + Important', description: 'Do' },
        { label: 'Important, Not Urgent', description: 'Schedule' },
        { label: 'Urgent, Not Important', description: 'Delegate' },
        { label: 'Not Urgent, Not Important', description: 'Eliminate' },
      ],
    },
    designProcess: [
      {
        step: 'Understand the learning problem',
        detail:
          'The project documentation sets out the problem clearly: people often treat an urgent task as automatically important, and lose time on lower-value work as a result.',
      },
      {
        step: 'Define the learning objectives',
        detail: 'Four objectives cover distinguishing urgent from important, classifying tasks, and applying the matrix to a real workday.',
      },
      {
        step: 'Plan the content',
        detail:
          'The course outline sequenced the material into three lessons plus a final challenge, following Recognise, Understand, Classify, Practise, Prioritise, Apply.',
      },
      {
        step: 'Write the script',
        detail:
          'A full script exists for this course, written to document the finished product rather than used as a blueprint before building it.',
      },
      {
        step: 'Build the interaction',
        detail: 'This course exists as a complete Rise 360 build, which you can try above.',
      },
      {
        step: 'Assess the learner',
        detail: 'Knowledge checks use deliberately ambiguous situations, so a learner has to apply the distinction rather than spot a keyword.',
      },
    ],
    scriptExample: {
      scene: 'Screen 6, from the course script',
      text:
        'Consider these two tasks. Task A: reply to a non-critical message marked urgent. Task B: complete a strategic report that supports an important project. Which statement is most accurate? A. Task A must always come first because it is urgent. B. Task B may deserve priority because importance also matters. C. Neither task can be prioritised.',
      interaction: 'Multiple choice.',
      feedback:
        'Correct answer: B. Urgency tells you how soon something needs attention. Importance tells you how much it matters to the outcome. Good prioritisation considers both.',
    },
    designTakeaway:
      'The single idea worth teaching here, that urgency and importance are independent, is reinforced in nearly every activity in the course. That repetition is what makes a very simple framework actually stick.',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
