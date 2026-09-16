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
  experience?: string[];
  interactions?: string[];
  assessment?: string[];
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
      title: 'Effective Workplace Communication: Giving and Receiving Feedback — Articulate Rise 360 course',
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
      'Effective feedback is central to workplace performance, collaboration and professional development, but it is easy to get wrong — vague, overly personal, badly timed feedback tends to create defensiveness rather than change. This course gives employees and emerging team leaders a practical, repeatable way to give feedback that is specific and actionable, and to receive feedback without becoming defensive.',
      'Rather than presenting feedback as a list of dos and don’ts, the course moves learners from recognising the difference between constructive feedback and criticism, to structuring their own feedback, to practising how they respond when they are on the receiving end.',
    ],
    learningNeed: [
      'Learners generally understand that feedback matters, but often cannot translate that into practice. Specifically, they may struggle to separate a person’s behaviour from their character, keep feedback specific and actionable rather than vague, and respond to feedback they receive without becoming defensive or dismissive.',
    ],
    audience: [
      'Employees and emerging team leaders who take part in workplace communication, collaboration and performance conversations. Learners are assumed to already understand workplace communication in general terms, so the course spends its time on application rather than on defining what feedback is.',
    ],
    objectives: [
      'Differentiate constructive feedback from personal criticism.',
      'Identify the characteristics of effective workplace feedback.',
      'Structure feedback using a clear, repeatable framework.',
      'Apply effective feedback techniques to realistic workplace situations.',
      'Respond constructively when receiving feedback, including feedback the learner disagrees with.',
    ],
    approach: [
      'The course uses microlearning, scenario-based decisions, retrieval practice and immediate, explanatory feedback rather than long explanations. Each major section is built around a simple test: what do I need to know, what do I need to do, and how do I know I can do it.',
      'Content is introduced through short explanations and worked examples, then immediately tested through sorting activities (for example, classifying statements as useful or unhelpful, constructive or unhelpful, well-structured or poorly structured) before learners are asked to apply the same judgement to a new, unseen situation.',
    ],
    experience: [
      'Lesson 1 — The Power of Feedback in the Workplace: establishes why feedback fails when it is vague, personal, one-sided or badly timed, then has learners sort real example statements into useful and unhelpful feedback.',
      'Lesson 2 — Structuring and Delivering Feedback: introduces two frameworks for giving feedback — a four-step Describe → Explain → Improve → Move Forward sequence, and the more detailed Situation → Behaviour → Impact → Next Step structure — and has learners compare weak, partial and strong examples of feedback built on the same structure.',
      'Lesson 3 — Responding to Feedback Professionally: teaches a five-step response process (Listen → Understand → Clarify → Consider → Respond), including how to respond professionally to feedback the learner disagrees with, using paired defensive-versus-constructive response comparisons.',
      'The course closes with a scored quiz that mixes multiple-choice, multiple-response and fill-in-the-blank questions built around realistic workplace situations rather than definitions.',
    ],
    interactions: [
      'Click-to-reveal cards contrasting effective and ineffective feedback examples',
      'Sort/classification activities (useful vs. unhelpful, constructive vs. unhelpful, well-structured vs. poorly-structured)',
      'Step-by-step process interactions for the feedback-giving and feedback-receiving frameworks',
      'Knowledge checks with answer-specific explanatory feedback after each major concept',
    ],
    assessment: [
      'Formative knowledge checks appear after each concept and explain the reasoning behind the correct answer rather than simply marking a response right or wrong.',
      'The final quiz combines multiple-choice, multiple-response and fill-in-the-blank questions that require learners to apply the Situation-Behaviour-Impact-Next Step structure to a new workplace scenario, rather than recall its steps from memory.',
    ],
    designTakeaway:
      'Giving learners two compatible frameworks — one for the giver, one for the receiver of feedback — makes the course useful from both sides of a real conversation, without turning it into two separate courses.',
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
      title: 'Handling Difficult Customer Conversations — Articulate Storyline scenario',
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
      'Customer-facing employees generally know what good service looks like in principle. The harder problem is knowing what to say in the moment, while a customer is frustrated. This course puts the learner directly into that moment: they take the role of a customer support representative handling a customer whose issue has not been resolved despite previous contact, and they have to decide, in real time, how to respond.',
      'The course is built around a single developing conversation rather than a series of unconnected quiz questions, so the consequences of an early decision — a defensive opening, for instance — carry through to how the rest of the conversation plays out.',
    ],
    learningNeed: [
      'Employees may understand general customer-service principles but struggle to apply them under pressure: staying calm, listening instead of interrupting, and clarifying the actual issue before jumping to a solution. The gap is not knowledge, it is judgement in the moment — which is why the course is built as a scenario rather than a set of guidelines.',
    ],
    audience: [
      'Customer-facing employees and support teams — customer support, helpdesk, account support and similar roles — who already have a basic understanding of their organisation’s products and enquiry procedures, but may not have a structured way to handle a conversation once it becomes emotionally charged.',
    ],
    objectives: [
      'Identify communication approaches that can either escalate or reduce tension in a difficult customer conversation.',
      'Choose communication strategies for listening to, acknowledging and clarifying a customer’s concern.',
      'Apply a structured approach to move a difficult conversation toward an appropriate resolution.',
    ],
    approach: [
      'The course follows Context → Decision → Consequence → Feedback → Reflection → Application. Learners are shown realistic customer dialogue, then asked to choose how the representative responds; the customer’s tone and the information available to the learner change depending on that choice.',
      'Branching is controlled rather than exhaustive: each decision point offers a small number of realistic response options rather than a fully separate storyline per choice, which keeps the scenario focused while still demonstrating genuine consequence-based branching.',
      'Feedback is written to explain the underlying communication principle rather than simply marking a choice right or wrong — for example, why acknowledging a customer’s frustration before offering a solution keeps the conversation moving toward resolution.',
    ],
    experience: [
      'The learner opens on a title scene, then is placed directly into a difficult conversation as “the representative.”',
      'Decision Point 1 — Initial Response: the customer opens by expressing frustration at having to make contact again. The learner chooses how to respond; an acknowledging, calm response keeps the customer open to the conversation, while a defensive or dismissive one makes the customer more frustrated.',
      'Decision Point 2 — Clarifying the Issue: the customer explains that the problem has already been reported. The learner chooses how to gather the information needed — focused questions and listening produce useful information; assumptions or interruptions produce confusion.',
      'Decision Point 3 — Moving Toward Resolution: with enough information gathered, the learner chooses how to communicate the next step. A clear, realistic next step with confirmed understanding moves the conversation toward resolution; a vague answer or an unrealistic promise does not.',
      'Each decision opens a feedback layer explaining why the chosen response was, or was not, effective, before the learner continues.',
      'The course closes with a short multiple-choice practice challenge and a summary reinforcing the Listen → Acknowledge → Clarify → Respond → Confirm framework.',
    ],
    interactions: [
      'Realistic customer dialogue presented through slide layers',
      'Multiple-choice decision points with three response options each',
      'Answer-specific feedback layers explaining the communication principle behind each response',
      'A final multiple-choice practice challenge built on the same scenario',
    ],
    assessment: [
      'Assessment is built into the scenario itself: the learner’s choices at each decision point are the primary evidence of whether they can apply the framework, supported by a final practice challenge (multiple choice, one attempt, with feedback explaining why the correct response acknowledges the customer’s experience without making commitments the representative cannot control).',
    ],
    designTakeaway:
      'Placing the learner inside one continuous, developing conversation — rather than a set of disconnected questions — is what makes the practice feel like the real thing rather than a quiz about the real thing.',
  },

  // ---------------------------------------------------------------
  // 3. Professional Genially Learning Experiences (Soteria — placeholder)
  // ---------------------------------------------------------------
  {
    slug: 'professional-genially-learning-experiences',
    title: 'Professional Genially Learning Experiences',
    shortDescription:
      'Interactive learning experiences developed as part of professional learning design work with Soteria Learning.',
    tool: 'Genially',
    tools: ['Genially'],
    projectType: 'Professional Work — Soteria Learning',
    category: 'Interactive Learning',
    isPlaceholder: true,
    placeholderNote: 'Selected professional work — approved screenshots to be added.',
    overview: [
      'Alongside personal portfolio projects, this work was developed as part of professional learning design work with Soteria Learning, using Genially to build interactive learning experiences beyond traditional slide-based eLearning.',
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
      'A course that turns general SME guidance on information management into a structured, practice-based workplace course.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    projectType: 'Personal Portfolio Project',
    category: 'Content Transformation',
    embed: {
      src: '/courses/managing-workplace-information/index.html',
      title: 'Managing Workplace Information: Find, Organise, Check, and Share with Confidence — Articulate Rise 360 course',
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
      'This project started from raw subject-matter guidance on managing workplace information — general instructions about organising files, naming conventions, storage and sharing, written as a list of instructions rather than a learning experience. The instructional design task was to analyse that material, decide what was genuinely worth teaching, and rebuild it around the decisions employees actually have to make.',
      'The source content was accurate but flat: useful information with no learning structure, no practice and no way to check whether someone could apply it. The finished course keeps the same subject-matter accuracy while adding a decision-oriented structure, realistic examples and graded practice.',
    ],
    learningNeed: [
      'Employees create, store and share information every day, and when it is poorly organised or shared without care, the result is wasted time searching for documents, work built on outdated versions, and information reaching people who did not need or were not authorised to receive it. The learning need was to turn general advice into practical, applied habits — not to teach new software or new terminology.',
    ],
    audience: [
      'Employees and team members who regularly create, store, retrieve or share workplace information — documents, spreadsheets, reports and similar files — at varying levels of digital confidence, which is why the course avoids technical jargon in favour of plain, practical language.',
    ],
    objectives: [
      'Identify common problems caused by poorly managed workplace information.',
      'Apply practical methods for organising and naming workplace files.',
      'Select an appropriate approach for storing and sharing information.',
      'Apply information-management principles to realistic workplace situations.',
    ],
    approach: [
      'The redesign moved the material from understanding → recognising → applying: short explanations are followed immediately by click-to-reveal interactions and scenario decisions, rather than being presented as one long block of instructions.',
      'Each of the four sections (Find, Check, Organise, Share) follows the same pattern — explain the problem the behaviour prevents, walk through a short step-by-step process, then test the judgement with a realistic knowledge check.',
    ],
    experience: [
      'Section 1 — Find: explains common information-management problems (version confusion, lost documents, inconsistent storage, unclear ownership), then teaches a five-step search routine (define what you need, identify the likely source, search with keywords, verify currency, record or share).',
      'Section 2 — Check: explains why unverified information causes mistakes, then teaches a four-step verification process (assess accuracy, confirm currency, evaluate relevance, check approval status), reinforced with a sorting activity distinguishing files that are safe to use from files that need further checking.',
      'Section 3 — Organise: teaches folder-structure and file-naming conventions (broadest category first, narrowed by year or phase, subdivided by type, with a clear “approved” folder), plus a practice activity sorting realistic files into the correct folders.',
      'Section 4 — Share: covers identifying recipients, clarifying what they need, choosing an appropriate channel, checking access and providing context, with a sorting activity distinguishing appropriate from inappropriate sharing scenarios.',
      'A closing scenario — three similarly named files, one of which is the current approved version — brings all four steps together, followed by a scored quiz mixing multiple-choice, multiple-response and fill-in-the-blank questions.',
    ],
    interactions: [
      'Click-to-reveal cards explaining common information-management problems',
      'Step-by-step process walkthroughs for searching, checking, organising and sharing',
      'Sorting/classification activities (safe to use vs. needs checking; appropriate vs. inappropriate sharing; file-to-folder matching)',
      'Realistic file-naming and version-labelling examples drawn directly from the source material',
    ],
    assessment: [
      'Knowledge checks are placed after each of the four sections and use realistic workplace situations (a document with an ambiguous name, an outdated procedure, a report requested by a manager) rather than definitional questions.',
      'The closing quiz combines multiple-choice, multiple-response and fill-in-the-blank formats built around the Find-Check-Organise-Share framework.',
    ],
    designTakeaway:
      'The instructional value here was almost entirely in restructuring, not rewriting: the underlying guidance did not need to change, but the order it was taught in, and the decisions it was tied to, did.',
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
      'This project starts from a deliberately weak source course on professional email communication — nine sections of plain instructional text (subject lines, greetings, structure, tone, attachments, proofreading) followed by a three-question recall quiz. The brief was to evaluate that course as an instructional designer would evaluate any inherited course, and redesign it.',
      'The goal of the redesign was never to add more information. The original content was already reasonably accurate; the problem was that it gave learners nothing to do with it. The redesign keeps the same subject matter and makes it something learners can practise, not just read.',
    ],
    redesign: {
      before: [
        'The original course presented email guidance as nine short sections of plain text — subject lines, greetings, message content, tone, attachments, proofreading and general tips — with no worked examples, no practice, and a three-question recall quiz at the end (for example: “What should a subject line do?”).',
      ],
      analysis: [
        'Weak learning objectives — the course did not state what a learner should be able to do differently afterward, only what topics it covered.',
        'Excessive information presentation — nearly all content was text, so learners were reading rather than actively processing the material.',
        'Weak content structure — the course moved topic to topic without a learning progression that built toward application.',
        'Generic examples — example phrases were isolated statements rather than realistic workplace emails, so learners could understand a rule without being able to apply it.',
        'Limited interactivity — there was essentially no meaningful interaction before the final quiz.',
        'Assessment measured recall — the quiz tested whether learners remembered the rules, not whether they could write or improve an email.',
        'Limited feedback — correct answers were shown without an explanation of why they were correct.',
      ],
      redesignStrategy: [
        'New instructional flow: Problem → Principle → Example → Practice → Feedback → Application, replacing the original’s topic-by-topic list.',
        'Contrastive learning: learners compare two versions of the same email (or the same sentence) and identify what makes one more effective, rather than being told the rule directly.',
        'Content strategy: long, combined instructions (“use clear subject lines, appropriate greetings, professional tone…”) were broken into one practical decision per screen.',
        'Assessment strategy shifted from Recall to Recognition → Selection → Improvement → Application, including an email-improvement activity rather than a defintion quiz.',
        'Feedback strategy: every practice question explains why the chosen response works, not simply whether it was correct.',
      ],
      resultingExperience: [
        'Lesson 1 — Start With the Purpose: what makes an email effective (clear, concise, professional, actionable), and identifying the purpose before writing.',
        'Lesson 2 — Make the Message Easy to Follow: writing a useful subject line, getting to the point, a simple four-part structure (purpose → relevant information → action → next step), and a side-by-side comparison of a weak and a strong version of the same email.',
        'Lesson 3 — Consider Your Tone: how the same request can escalate or de-escalate a situation depending on wording, with practice rewriting a blunt or frustrated message professionally.',
        'Lesson 4 — Check Before You Send: attachments and links, proofreading, and a pre-send checklist, closing with a knowledge check.',
        'Lesson 5 — Put It Into Practice: a scenario requiring the learner to make four linked decisions on one email — subject, message, tone and final check — before a closing checklist and course summary.',
      ],
    },
    audience: [
      'Employees who use email as a routine part of their work and already know how to use email mechanically (sending, replying, attaching files); the gap the course targets is professional communication quality, not technical email literacy.',
    ],
    objectives: [
      'Identify the essential elements of an effective workplace email.',
      'Apply appropriate structure and tone to workplace email messages.',
      'Identify common email communication problems.',
      'Improve a poorly written workplace email.',
      'Apply effective email practices to a realistic workplace situation.',
    ],
    designTakeaway:
      'Redesign work is a different skill from building from scratch: the job is to diagnose precisely why an existing course is not working, and change only what is needed to fix it, rather than starting over.',
  },

  // ---------------------------------------------------------------
  // 6. Energy in Action (curriculum transformation)
  // ---------------------------------------------------------------
  {
    slug: 'energy-in-action',
    title: 'Energy in Action: Forms, Transfer, and Transformation in Everyday Life',
    shortDescription:
      'A lower-secondary science curriculum on energy, transformed from classroom content into a structured, self-paced digital course.',
    tool: 'Articulate Rise 360',
    tools: ['Articulate Rise 360'],
    projectType: 'Curriculum-to-Digital-Learning Project',
    category: 'Curriculum Transformation',
    embed: {
      src: '/courses/energy-in-action/index.html',
      title: 'Energy in Action: Forms, Transfer, and Transformation in Everyday Life — Articulate Rise 360 course',
      aspectRatio: '16 / 10',
    },
    overview: [
      'This project takes a lower-secondary science curriculum topic — energy, its forms, transfer and transformation — and transforms it from content traditionally delivered through classroom instruction into a structured, self-paced digital learning experience. The brief was not to place textbook content online, but to interpret curriculum expectations and rebuild them as something a learner could work through independently.',
      'The subject matter was deliberately kept within its curriculum boundaries: the course introduces forms of energy, transfer and transformation through everyday examples, without moving into quantitative calculations or advanced physics that belong to later learning.',
    ],
    learningNeed: [
      'Curriculum documents establish what learners should know, but a curriculum statement is not, on its own, a learning experience. It has to be translated into learner-friendly explanations, examples drawn from things learners already encounter, guided practice, and assessment — which is the transformation this project demonstrates.',
    ],
    audience: [
      'Lower-secondary learners, approximately ages 12–14, who have encountered everyday examples of energy (batteries, moving objects, heating, food and exercise) but do not yet have a structured scientific understanding of the concept. The course assumes varying levels of prior knowledge and is designed to work as independent study, pre-class preparation, revision or homework.',
    ],
    objectives: [
      'Identify common forms of energy in familiar situations.',
      'Distinguish between energy transfer and energy transformation.',
      'Explain how energy changes form in everyday systems (for example, a torch, a fan, or a person running).',
      'Apply an understanding of energy changes to real-world examples.',
    ],
    approach: [
      'Content was analysed and classified by what learners need to recall (names of energy forms), understand (the difference between transfer and transformation) and apply (identifying energy changes in unfamiliar situations) — with equations and advanced physics deliberately deferred to later learning.',
      'The course anticipates specific misconceptions identified during content analysis (that energy is the same as electricity, that energy is “used up” and disappears, that an object only has one form of energy at a time) and addresses them directly through examples and knowledge-check feedback rather than leaving them to be inferred.',
      'Every abstract concept is introduced through a concrete, everyday example before any formal explanation — a bicycle in motion, a raised book, hot water, a battery — so learners have something familiar to reason from.',
    ],
    experience: [
      'Section 1 — What Is Energy?: introduces energy as the ability to cause change, using flashcards and everyday examples (a moving car, a raised book, hot water, a battery, a speaker) before a knowledge check.',
      'Section 2 — Forms of Energy: introduces kinetic, gravitational potential, elastic potential, chemical, thermal, electrical, light and sound energy through short explanations and matching flashcards, then contrasts kinetic and potential energy directly.',
      'Section 3 — Energy Transfer and Transformation: distinguishes energy moving between objects (transfer) from energy changing form (transformation), using everyday systems such as a torch (chemical → electrical → light and thermal) and a running person (chemical → kinetic and thermal).',
      'Section 4 — Application: learners identify the energy forms and changes involved in unfamiliar everyday situations, closing with a scored quiz.',
    ],
    interactions: [
      'Flashcard interactions for energy definitions and energy-form matching',
      'Click-to-reveal cards of everyday energy examples',
      'Compare/contrast interactions (kinetic vs. potential energy)',
      'Knowledge checks addressing specific, anticipated misconceptions',
    ],
    assessment: [
      'Knowledge checks are placed after each concept and are written to target the misconceptions identified during content analysis directly (for example, testing whether energy “disappears” rather than simply asking learners to define energy).',
      'A closing quiz assesses recognition of energy forms, transfer, and transformation using everyday scenarios rather than recall of definitions.',
    ],
    designTakeaway:
      'Working from curriculum standards rather than a blank brief meant the real instructional design task was less about inventing content and more about sequencing it — deciding what a 12–14-year-old needs to see and do, in what order, before the underlying science makes sense.',
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
      title: 'Taming the Chaos: Mastering Task Prioritization with the Eisenhower Matrix — Articulate Rise 360 course',
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
      'Employees regularly face multiple tasks that all appear important, and without a shared way to prioritise them, the most urgent-seeming task usually wins even when it is not the most valuable one. This microlearning course teaches the Eisenhower Matrix as a simple, repeatable prioritisation method, built around one central distinction: urgency and importance are not the same thing.',
      'This is an existing, completed portfolio project. It is documented here based on what was actually built, rather than reconstructed retrospectively — no script or storyboard was produced ahead of development, so none is presented as though it existed beforehand.',
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
      'The course follows Recognise → Understand → Classify → Practise → Prioritise → Apply: urgency and importance are introduced separately before being combined, and every concept is demonstrated with a worked example before learners classify one themselves.',
      'The central idea — that urgent does not automatically mean important — is reinforced repeatedly through flashcards, sorting activities and a running “busy workday” scenario, rather than stated once and left to the final quiz.',
    ],
    experience: [
      'Opens with a realistic busy-workday scenario (an email marked “urgent,” a report due tomorrow, a meeting in two hours, routine requests and a project deadline next week) that frames the entire course as a genuine prioritisation problem rather than an abstract one.',
      'Lesson 1 — Urgent vs. Important: separates the two concepts with flashcards and contrasting examples, then a knowledge check built on a genuinely ambiguous case (an “urgent” email about a minor issue versus a major project deadline).',
      'Lesson 2 — The Four Quadrants: introduces Do, Schedule, Delegate and Eliminate with worked examples for each quadrant, then a sorting activity classifying new tasks into the matrix.',
      'Lesson 3 — Put It Into Practice: applies the matrix to the original busy-workday scenario, requiring the learner to prioritise several competing tasks at once.',
      'Final Challenge — The Inbox Challenge: a closing prioritisation exercise followed by a scored knowledge check and a reflection prompt asking learners to identify their own prioritisation rule.',
    ],
    interactions: [
      'Flashcard interactions distinguishing urgent from important tasks',
      'Drag-and-drop and click-to-sort quadrant classification activities',
      'A running scenario (the busy workday / inbox challenge) used consistently across lessons',
      'Accordion and tab-based exploration of each matrix quadrant',
    ],
    assessment: [
      'Knowledge checks use deliberately ambiguous situations (an urgent-looking task that is not actually important) rather than clear-cut examples, so learners have to apply the distinction rather than pattern-match a keyword.',
      'A final knowledge check and reflection prompt close the course, asking learners to state the prioritisation rule they will personally apply.',
    ],
    designTakeaway:
      'The single idea worth teaching here — urgency and importance are independent, not the same thing — is reinforced in nearly every activity in the course, which is what makes a very simple framework actually stick.',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
