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

export interface RedesignContent {
  before: string[];
  analysis: string[];
  redesignStrategy: string[];
  resultingExperience: string[];
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

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  tool: string;
  tools: string[];
  projectType: string;
  category: string;
  isPlaceholder?: boolean;
  placeholderNote?: string;
  cardImage?: string;
  embed?: CourseEmbed;
  framework?: Framework;
  overview?: string[];
  learningNeed?: string[];
  audience?: string[];
  objectives?: string[];
  approach?: string[];
  designProcess?: DesignProcessStep[];
  experience?: string[];
  interactions?: string[];
  assessment?: string[];
  storyboardExample?: StoryboardExample;
  scriptExample?: ScriptExample;
  designTakeaway?: string;
  redesign?: RedesignContent;
}

export const projects: Project[] = [
  // ---------------------------------------------------------------
  // 1. Effective Workplace Communication
  // ---------------------------------------------------------------
  {
    slug: 'effective-workplace-communication',
    title: 'Effective Workplace Communication: Giving and Receiving Feedback',
    shortDescription:
      'An interactive workplace course that helps employees give specific, behaviour-focused feedback and respond to it constructively.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    projectType: 'Personal Portfolio Project',
    category: 'Corporate Microlearning',
    embed: {
      src: '/courses/effective-workplace-communication/index.html',
      title: 'Effective Workplace Communication: Giving and Receiving Feedback (Articulate Rise 360 course)',
      aspectRatio: '16 / 10',
    },
    framework: {
      intro: 'The course teaches two linked frameworks: one for giving feedback, one for receiving it.',
      steps: [
        { label: 'Situation', description: 'Describe when or where the situation happened.' },
        { label: 'Behaviour', description: 'Describe what was observed, not what was assumed.' },
        { label: 'Impact', description: 'Explain why the behaviour mattered.' },
        { label: 'Next Step', description: 'Suggest what could happen differently.' },
      ],
    },
    overview: [
      'Feedback matters at work, but it is easy to get wrong. Vague, overly personal or badly timed feedback tends to make people defensive instead of helping them improve. This course gives employees and emerging team leaders a practical, repeatable way to give feedback that is specific and useful, and to receive feedback without shutting down.',
      'Rather than listing dos and don’ts, the course moves learners from recognising the difference between constructive feedback and criticism, to structuring their own feedback, to practising how they respond when they are the one being given feedback.',
    ],
    learningNeed: [
      'Most people already know feedback matters. What they often cannot do is turn that into practice: separating a person’s behaviour from their character, keeping feedback specific instead of vague, and responding to feedback without becoming defensive or dismissive.',
    ],
    audience: [
      'Employees and emerging team leaders who take part in workplace communication, collaboration and performance conversations. The course assumes learners already understand workplace communication in general terms, so it spends its time on application rather than defining what feedback is.',
    ],
    objectives: [
      'Differentiate constructive feedback from personal criticism.',
      'Identify the characteristics of effective workplace feedback.',
      'Structure feedback using a clear, repeatable framework.',
      'Apply effective feedback techniques to realistic workplace situations.',
      'Respond constructively when receiving feedback, including feedback the learner disagrees with.',
    ],
    approach: [
      'The course uses microlearning, scenario-based decisions, retrieval practice and immediate, explanatory feedback rather than long explanations. Each major section is built around one simple test: what do I need to know, what do I need to do, and how do I know I can do it.',
      'Content is introduced through short explanations and worked examples, then tested straight away through sorting activities (for example, classifying statements as useful or unhelpful, constructive or unhelpful, well-structured or poorly structured) before learners apply the same judgement to a new situation.',
    ],
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
    experience: [
      'Lesson 1, The Power of Feedback in the Workplace: looks at why feedback fails when it is vague, personal, one-sided or badly timed, then has learners sort real example statements into useful and unhelpful feedback.',
      'Lesson 2, Structuring and Delivering Feedback: introduces two frameworks for giving feedback: a four-step Describe, Explain, Improve, Move Forward sequence, and the more detailed Situation, Behaviour, Impact, Next Step structure. Learners compare weak, partial and strong examples built on the same structure.',
      'Lesson 3, Responding to Feedback Professionally: teaches a five-step response process (Listen, Understand, Clarify, Consider, Respond), including how to respond to feedback the learner disagrees with, using paired defensive versus constructive response comparisons.',
      'The course closes with a scored quiz that mixes multiple-choice, multiple-response and fill-in-the-blank questions built around workplace situations rather than definitions.',
    ],
    interactions: [
      'Click-to-reveal cards contrasting effective and ineffective feedback examples',
      'Sorting activities (useful vs. unhelpful, constructive vs. unhelpful, well-structured vs. poorly structured)',
      'Step-by-step process interactions for the feedback-giving and feedback-receiving frameworks',
      'Knowledge checks with answer-specific feedback after each major concept',
    ],
    assessment: [
      'Formative knowledge checks appear after each concept and explain the reasoning behind the correct answer rather than simply marking a response right or wrong.',
      'The final quiz combines multiple-choice, multiple-response and fill-in-the-blank questions that require learners to apply the Situation, Behaviour, Impact, Next Step structure to a new workplace scenario, rather than recall its steps from memory.',
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
      'A branching, scenario-based course that puts learners inside a real customer conversation and lets their choices change how it unfolds.',
    tool: 'Articulate Storyline',
    tools: ['Articulate Storyline 360'],
    projectType: 'Personal Portfolio Project',
    category: 'Scenario-Based Learning',
    cardImage: '/images/handling-difficult-customer-conversations/thumbnail.jpg',
    embed: {
      src: '/courses/handling-difficult-customer-conversations/story.html',
      title: 'Handling Difficult Customer Conversations (Articulate Storyline scenario)',
      aspectRatio: '16 / 10',
      note: 'Best viewed on a larger screen. Use the Start button to begin the scenario.',
    },
    framework: {
      intro: 'Reinforced throughout instruction, practice and the final scenario.',
      steps: [
        { label: 'Listen' },
        { label: 'Acknowledge' },
        { label: 'Clarify' },
        { label: 'Respond' },
        { label: 'Confirm' },
      ],
    },
    overview: [
      'Customer-facing employees generally know what good service looks like in principle. The harder problem is knowing what to say in the moment, while a customer is frustrated. This course puts the learner directly into that moment. They take the role of a customer support representative handling a customer whose issue has not been resolved despite previous contact, and they have to decide, in real time, how to respond.',
      'The course is built around one developing conversation rather than a series of unconnected quiz questions, so the consequences of an early decision (a defensive opening, for instance) carry through to how the rest of the conversation plays out.',
    ],
    learningNeed: [
      'Employees may understand general customer-service principles but struggle to apply them under pressure: staying calm, listening instead of interrupting, and clarifying the actual issue before jumping to a solution. The gap is not knowledge, it is judgement in the moment, which is why the course is built as a scenario rather than a set of guidelines.',
    ],
    audience: [
      'Customer-facing employees and support teams (customer support, helpdesk, account support and similar roles) who already understand their organisation’s products and enquiry procedures, but may not have a structured way to handle a conversation once it becomes emotionally charged.',
    ],
    objectives: [
      'Identify communication approaches that can either escalate or reduce tension in a difficult customer conversation.',
      'Choose communication strategies for listening to, acknowledging and clarifying a customer’s concern.',
      'Apply a structured approach to move a difficult conversation toward an appropriate resolution.',
    ],
    approach: [
      'The course follows Context, Decision, Consequence, Feedback, Reflection, Application. Learners are shown realistic customer dialogue, then asked to choose how the representative responds. The customer’s tone and the information available to the learner change depending on that choice.',
      'Branching is controlled rather than exhaustive. Each decision point offers a small number of realistic response options rather than a fully separate storyline per choice, which keeps the scenario focused while still showing genuine consequence-based branching.',
      'Feedback is written to explain the communication principle behind a choice rather than simply marking it right or wrong. For example, why acknowledging a customer’s frustration before offering a solution keeps the conversation moving toward resolution.',
    ],
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
    experience: [
      'The learner opens on a title scene, then is placed directly into a difficult conversation as "the representative."',
      'Decision Point 1, Initial Response: the customer opens by expressing frustration at having to make contact again. The learner chooses how to respond. An acknowledging, calm response keeps the customer open to the conversation, while a defensive or dismissive one makes the customer more frustrated.',
      'Decision Point 2, Clarifying the Issue: the customer explains that the problem has already been reported. The learner chooses how to gather the information needed. Focused questions and listening produce useful information, while assumptions or interruptions produce confusion.',
      'Decision Point 3, Moving Toward Resolution: with enough information gathered, the learner chooses how to communicate the next step. A clear, realistic next step with confirmed understanding moves the conversation toward resolution. A vague answer or an unrealistic promise does not.',
      'Each decision opens a feedback layer explaining why the chosen response was, or was not, effective, before the learner continues.',
      'The course closes with a short multiple-choice practice challenge and a summary reinforcing the Listen, Acknowledge, Clarify, Respond, Confirm framework.',
    ],
    interactions: [
      'Realistic customer dialogue presented through slide layers',
      'Multiple-choice decision points with three response options each',
      'Answer-specific feedback layers explaining the communication principle behind each response',
      'A final multiple-choice practice challenge built on the same scenario',
    ],
    assessment: [
      'Assessment is built into the scenario itself. The learner’s choices at each decision point are the main evidence of whether they can apply the framework, backed by a final practice challenge (multiple choice, one attempt, with feedback explaining why the correct response acknowledges the customer’s experience without making commitments the representative cannot control).',
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
  // 3. Professional Genially Learning Experiences (Soteria, placeholder)
  // ---------------------------------------------------------------
  {
    slug: 'professional-genially-learning-experiences',
    title: 'Professional Genially Learning Experiences',
    shortDescription:
      'Interactive learning experiences developed as part of professional learning design work with Soteria Learning.',
    tool: 'Genially',
    tools: ['Genially'],
    projectType: 'Professional Work: Soteria Learning',
    category: 'Interactive Learning',
    isPlaceholder: true,
    placeholderNote: 'Selected professional work: approved screenshots to be added.',
    overview: [
      'Alongside my personal portfolio projects, this work was developed as part of professional learning design work with Soteria Learning, using Genially to build interactive learning experiences beyond traditional slide-based eLearning.',
      'Because this work was produced for a client rather than as an independent portfolio piece, it is presented here at a level of detail appropriate for public sharing. Client-specific content, learner data and unpublished material are not included.',
    ],
    designTakeaway:
      'Approved screenshots and a fuller description of this work will be added once they have been confirmed as suitable for public display.',
  },

  // ---------------------------------------------------------------
  // 4. Managing Workplace Information
  // ---------------------------------------------------------------
  {
    slug: 'managing-workplace-information',
    title: 'Managing Workplace Information: Find, Organise, Check, and Share with Confidence',
    shortDescription:
      'A course that turns general guidance on information management into a structured, practice-based workplace course.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    projectType: 'Personal Portfolio Project',
    category: 'Content Transformation',
    embed: {
      src: '/courses/managing-workplace-information/index.html',
      title: 'Managing Workplace Information: Find, Organise, Check, and Share with Confidence (Articulate Rise 360 course)',
      aspectRatio: '16 / 10',
    },
    framework: {
      steps: [
        { label: 'Find', description: 'Locate the likely source.' },
        { label: 'Check', description: 'Confirm accuracy, currency, relevance and approval status.' },
        { label: 'Organise', description: 'Use the agreed structure and naming conventions.' },
        { label: 'Share', description: 'Give the right information to the right people.' },
      ],
    },
    overview: [
      'This project started from raw subject-matter guidance on managing workplace information: general instructions about organising files, naming conventions, storage and sharing, written as a list of instructions rather than a learning experience. My job was to analyse that material, decide what was genuinely worth teaching, and rebuild it around the decisions employees actually have to make.',
      'The source content was accurate but flat. It was useful information with no learning structure, no practice, and no way to check whether someone could apply it. The finished course keeps the same subject-matter accuracy while adding a decision-oriented structure, realistic examples and graded practice.',
    ],
    learningNeed: [
      'Employees create, store and share information every day. When it is poorly organised or shared without care, the result is wasted time searching for documents, work built on outdated versions, and information reaching people who did not need it, or were not authorised to receive it. The learning need was to turn general advice into practical habits, not to teach new software or new terminology.',
    ],
    audience: [
      'Employees and team members who regularly create, store, retrieve or share workplace information (documents, spreadsheets, reports and similar files) at varying levels of digital confidence, which is why the course avoids technical jargon in favour of plain, practical language.',
    ],
    objectives: [
      'Identify common problems caused by poorly managed workplace information.',
      'Apply practical methods for organising and naming workplace files.',
      'Select an appropriate approach for storing and sharing information.',
      'Apply information-management principles to realistic workplace situations.',
    ],
    approach: [
      'The redesign moved the material from understanding, to recognising, to applying. Short explanations are followed immediately by click-to-reveal interactions and scenario decisions, rather than being presented as one long block of instructions.',
      'Each of the four sections (Find, Check, Organise, Share) follows the same pattern: explain the problem the behaviour prevents, walk through a short step-by-step process, then test the judgement with a realistic knowledge check.',
    ],
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
          'A content and gap analysis decided what to keep, combine or turn into practice. A course outline then sequenced it into four sections: Find, Check, Organise, Share.',
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
    experience: [
      'Section 1, Find: explains common information-management problems (version confusion, lost documents, inconsistent storage, unclear ownership), then teaches a five-step search routine (define what you need, identify the likely source, search with keywords, verify currency, record or share).',
      'Section 2, Check: explains why unverified information causes mistakes, then teaches a four-step verification process (assess accuracy, confirm currency, evaluate relevance, check approval status), reinforced with an activity sorting files that are safe to use from files that need further checking.',
      'Section 3, Organise: teaches folder-structure and file-naming conventions (broadest category first, narrowed by year or phase, subdivided by type, with a clear "approved" folder), plus a practice activity sorting realistic files into the correct folders.',
      'Section 4, Share: covers identifying recipients, clarifying what they need, choosing an appropriate channel, checking access and providing context, with an activity sorting appropriate from inappropriate sharing scenarios.',
      'A closing scenario, three similarly named files, one of which is the current approved version, brings all four steps together, followed by a scored quiz mixing multiple-choice, multiple-response and fill-in-the-blank questions.',
    ],
    interactions: [
      'Click-to-reveal cards explaining common information-management problems',
      'Step-by-step process walkthroughs for searching, checking, organising and sharing',
      'Sorting activities (safe to use vs. needs checking, appropriate vs. inappropriate sharing, file-to-folder matching)',
      'Realistic file-naming and version-labelling examples drawn directly from the source material',
    ],
    assessment: [
      'Knowledge checks are placed after each of the four sections and use realistic workplace situations (a document with an ambiguous name, an outdated procedure, a report requested by a manager) rather than definitional questions.',
      'The closing quiz combines multiple-choice, multiple-response and fill-in-the-blank formats built around the Find, Check, Organise, Share framework.',
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
  // 5. Write Better Workplace Emails (redesign)
  // ---------------------------------------------------------------
  {
    slug: 'write-better-workplace-emails',
    title: 'Write Better Workplace Emails',
    shortDescription:
      'A redesign of a deliberately weak, text-heavy email-writing course into a short, practice-oriented learning experience.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    projectType: 'eLearning Course Redesign',
    category: 'Redesign & Evaluation',
    framework: {
      steps: [
        { label: 'Problem' },
        { label: 'Principle' },
        { label: 'Example' },
        { label: 'Practice' },
        { label: 'Feedback' },
        { label: 'Application' },
      ],
    },
    overview: [
      'This project starts from a deliberately weak source course on professional email communication: nine sections of plain instructional text (subject lines, greetings, structure, tone, attachments, proofreading) followed by a three-question recall quiz. The brief was to evaluate that course the way an instructional designer would evaluate any inherited course, then redesign it.',
      'The goal of the redesign was never to add more information. The original content was already reasonably accurate. The problem was that it gave learners nothing to do with it. The redesign keeps the same subject matter and turns it into something learners can practise, not just read.',
    ],
    redesign: {
      before: [
        'The original course presented email guidance as nine short sections of plain text (subject lines, greetings, message content, tone, attachments, proofreading and general tips) with no worked examples, no practice, and a three-question recall quiz at the end (for example: "What should a subject line do?").',
      ],
      analysis: [
        'Weak learning objectives: the course did not state what a learner should be able to do differently afterward, only what topics it covered.',
        'Too much information presented as text, so learners were reading rather than actively working with the material.',
        'Weak content structure: the course moved topic to topic without building toward application.',
        'Generic examples: example phrases were isolated statements rather than realistic workplace emails, so learners could understand a rule without being able to apply it.',
        'Limited interactivity: there was essentially no meaningful interaction before the final quiz.',
        'Assessment measured recall: the quiz tested whether learners remembered the rules, not whether they could write or improve an email.',
        'Limited feedback: correct answers were shown without explaining why they were correct.',
      ],
      redesignStrategy: [
        'New instructional flow: Problem, Principle, Example, Practice, Feedback, Application, replacing the original’s topic-by-topic list.',
        'Contrastive learning: learners compare two versions of the same email, or the same sentence, and identify what makes one more effective, rather than being told the rule directly.',
        'Content strategy: long, combined instructions ("use clear subject lines, appropriate greetings, professional tone...") were broken into one practical decision per screen.',
        'Assessment strategy shifted from recall to recognition, selection, improvement and application, including an email-improvement activity rather than a definition quiz.',
        'Feedback strategy: every practice question explains why the chosen response works, not simply whether it was correct.',
      ],
      resultingExperience: [
        'Lesson 1, Start With the Purpose: what makes an email effective (clear, concise, professional, actionable), and identifying the purpose before writing.',
        'Lesson 2, Make the Message Easy to Follow: writing a useful subject line, getting to the point, a simple four-part structure (purpose, relevant information, action, next step), and a side-by-side comparison of a weak and a strong version of the same email.',
        'Lesson 3, Consider Your Tone: how the same request can escalate or de-escalate a situation depending on wording, with practice rewriting a blunt or frustrated message professionally.',
        'Lesson 4, Check Before You Send: attachments and links, proofreading, and a pre-send checklist, closing with a knowledge check.',
        'Lesson 5, Put It Into Practice: a scenario requiring the learner to make four linked decisions on one email (subject, message, tone and final check) before a closing checklist and course summary.',
      ],
    },
    audience: [
      'Employees who use email as a routine part of their work and already know how to use email mechanically (sending, replying, attaching files). The gap this course targets is the quality of professional communication, not technical email literacy.',
    ],
    objectives: [
      'Identify the essential elements of an effective workplace email.',
      'Apply appropriate structure and tone to workplace email messages.',
      'Identify common email communication problems.',
      'Improve a poorly written workplace email.',
      'Apply effective email practices to a realistic workplace situation.',
    ],
    scriptExample: {
      scene: 'Screen 8, Compare Two Emails, from the redesigned script',
      text:
        'Email A. Subject: Update. "Hi, I wanted to send an update about the project. There have been some changes and I think we should probably discuss them when you have time. Thanks." Email B. Subject: Project Schedule Update, Review Needed. "Hi David, the project schedule has been updated following the latest requirements. Please review the attached schedule and confirm whether the proposed dates work for your team by Thursday. Thank you." Which email is easier to act on?',
      interaction: 'Multiple choice.',
      feedback:
        'Correct answer: Email B. It gives the reader a specific subject, relevant context, a clear action and a deadline.',
    },
    designTakeaway:
      'Redesign work is a different skill from building from scratch. The job is to diagnose precisely why an existing course is not working, then change only what is needed to fix it, rather than starting over.',
  },

  // ---------------------------------------------------------------
  // 6. Energy in Action (curriculum transformation)
  // ---------------------------------------------------------------
  {
    slug: 'energy-in-action',
    title: 'Energy in Action: Forms, Transfer, and Transformation in Everyday Life',
    shortDescription:
      'A lower-secondary science curriculum on energy, turned from classroom content into a structured, self-paced digital course.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    projectType: 'Curriculum-to-Digital-Learning Project',
    category: 'Curriculum Transformation',
    embed: {
      src: '/courses/energy-in-action/index.html',
      title: 'Energy in Action: Forms, Transfer, and Transformation in Everyday Life (Articulate Rise 360 course)',
      aspectRatio: '16 / 10',
    },
    overview: [
      'This project takes a lower-secondary science curriculum topic, energy, its forms, transfer and transformation, and turns it from content traditionally delivered through classroom instruction into a structured, self-paced digital learning experience. The brief was not to put textbook content online, but to interpret curriculum expectations and rebuild them as something a learner could work through independently.',
      'The subject matter stayed within its curriculum boundaries. The course introduces forms of energy, transfer and transformation through everyday examples, without moving into quantitative calculations or advanced physics that belong to later learning.',
    ],
    learningNeed: [
      'Curriculum documents establish what learners should know, but a curriculum statement is not, on its own, a learning experience. It has to be translated into learner-friendly explanations, examples drawn from things learners already encounter, guided practice, and assessment. That translation is what this project demonstrates.',
    ],
    audience: [
      'Lower-secondary learners, approximately ages 12 to 14, who have encountered everyday examples of energy (batteries, moving objects, heating, food and exercise) but do not yet have a structured scientific understanding of the concept. The course assumes varying levels of prior knowledge and works as independent study, pre-class preparation, revision or homework.',
    ],
    objectives: [
      'Identify common forms of energy in familiar situations.',
      'Distinguish between energy transfer and energy transformation.',
      'Explain how energy changes form in everyday systems (for example, a torch, a fan, or a person running).',
      'Apply an understanding of energy changes to real-world examples.',
    ],
    approach: [
      'Content was sorted by what learners need to recall (names of energy forms), understand (the difference between transfer and transformation) and apply (identifying energy changes in unfamiliar situations), with equations and advanced physics deliberately left for later learning.',
      'The course anticipates specific misconceptions found during content analysis (that energy is the same as electricity, that energy is "used up" and disappears, that an object only has one form of energy at a time) and addresses them directly through examples and knowledge-check feedback, rather than leaving them to be inferred.',
      'Every abstract concept is introduced through a concrete, everyday example before any formal explanation: a bicycle in motion, a raised book, hot water, a battery, so learners have something familiar to reason from.',
    ],
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
    experience: [
      'Section 1, What Is Energy?: introduces energy as the ability to cause change, using flashcards and everyday examples (a moving car, a raised book, hot water, a battery, a speaker) before a knowledge check.',
      'Section 2, Forms of Energy: introduces kinetic, gravitational potential, elastic potential, chemical, thermal, electrical, light and sound energy through short explanations and matching flashcards, then contrasts kinetic and potential energy directly.',
      'Section 3, Energy Transfer and Transformation: distinguishes energy moving between objects (transfer) from energy changing form (transformation), using everyday systems such as a torch (chemical, to electrical, to light and thermal) and a running person (chemical, to kinetic and thermal).',
      'Section 4, Application: learners identify the energy forms and changes involved in unfamiliar everyday situations, closing with a scored quiz.',
    ],
    interactions: [
      'Flashcard interactions for energy definitions and energy-form matching',
      'Click-to-reveal cards of everyday energy examples',
      'Compare and contrast interactions (kinetic vs. potential energy)',
      'Knowledge checks addressing specific, anticipated misconceptions',
    ],
    assessment: [
      'Knowledge checks are placed after each concept and written to target the misconceptions identified during content analysis directly (for example, testing whether energy "disappears" rather than simply asking learners to define energy).',
      'A closing quiz assesses recognition of energy forms, transfer and transformation using everyday scenarios rather than recall of definitions.',
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
  // 7. Taming the Chaos
  // ---------------------------------------------------------------
  {
    slug: 'taming-the-chaos',
    title: 'Taming the Chaos: Mastering Task Prioritisation with the Eisenhower Matrix',
    shortDescription:
      'A practical microlearning course that helps professionals apply the Eisenhower Matrix to a genuinely competing set of daily tasks.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    projectType: 'Portfolio Project',
    category: 'Corporate Microlearning',
    embed: {
      src: '/courses/taming-the-chaos/index.html',
      title: 'Taming the Chaos: Mastering Task Prioritization with the Eisenhower Matrix (Articulate Rise 360 course)',
      aspectRatio: '16 / 10',
    },
    framework: {
      steps: [
        { label: 'Urgent + Important', description: 'Do' },
        { label: 'Important, Not Urgent', description: 'Schedule' },
        { label: 'Urgent, Not Important', description: 'Delegate' },
        { label: 'Not Urgent, Not Important', description: 'Eliminate' },
      ],
    },
    overview: [
      'Employees regularly face multiple tasks that all appear important. Without a shared way to prioritise them, the most urgent-seeming task usually wins, even when it is not the most valuable one. This microlearning course teaches the Eisenhower Matrix as a simple, repeatable prioritisation method, built around one central distinction: urgency and importance are not the same thing.',
      'This is an existing, completed portfolio project. The process notes and script example below document the finished course rather than a plan that was written and approved before development began.',
    ],
    audience: [
      'Employees, professionals and emerging managers who manage multiple competing responsibilities and already use some informal prioritisation method (to-do lists, calendars, reminders) without a consistent framework behind it.',
    ],
    objectives: [
      'Distinguish between urgent and important tasks.',
      'Classify workplace tasks using the four quadrants of the Eisenhower Matrix.',
      'Prioritise competing tasks based on urgency and importance.',
      'Apply the matrix to a realistic, busy workday.',
    ],
    approach: [
      'The course follows Recognise, Understand, Classify, Practise, Prioritise, Apply. Urgency and importance are introduced separately before being combined, and every concept is demonstrated with a worked example before learners classify one themselves.',
      'The central idea, that urgent does not automatically mean important, is repeated through flashcards, sorting activities and a running "busy workday" scenario, rather than stated once and left to the final quiz.',
    ],
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
        detail: 'The course outline sequenced the material into three lessons plus a final challenge, following Recognise, Understand, Classify, Practise, Prioritise, Apply.',
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
    experience: [
      'Opens with a realistic busy-workday scenario (an email marked "urgent," a report due tomorrow, a meeting in two hours, routine requests and a project deadline next week) that frames the whole course as a genuine prioritisation problem rather than an abstract one.',
      'Lesson 1, Urgent vs. Important: separates the two concepts with flashcards and contrasting examples, then a knowledge check built on a genuinely ambiguous case (an "urgent" email about a minor issue versus a major project deadline).',
      'Lesson 2, The Four Quadrants: introduces Do, Schedule, Delegate and Eliminate with worked examples for each quadrant, then a sorting activity classifying new tasks into the matrix.',
      'Lesson 3, Put It Into Practice: applies the matrix to the original busy-workday scenario, requiring the learner to prioritise several competing tasks at once.',
      'Final Challenge, The Inbox Challenge: a closing prioritisation exercise followed by a scored knowledge check and a reflection prompt asking learners to state their own prioritisation rule.',
    ],
    interactions: [
      'Flashcard interactions distinguishing urgent from important tasks',
      'Drag-and-drop and click-to-sort quadrant classification activities',
      'A running scenario (the busy workday and inbox challenge) used consistently across lessons',
      'Accordion and tab-based exploration of each matrix quadrant',
    ],
    assessment: [
      'Knowledge checks use deliberately ambiguous situations (an urgent-looking task that is not actually important) rather than clear-cut examples, so learners have to apply the distinction rather than pattern-match a keyword.',
      'A final knowledge check and reflection prompt close the course, asking learners to state the prioritisation rule they will personally apply.',
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
