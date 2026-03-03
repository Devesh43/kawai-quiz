export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
  anime: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What is the real name of Historia Reiss before she revealed her identity?",
    options: ["Frieda Reiss", "Annie Leonhart", "Carla Yeager", "Krista Lenz"],
    correctAnswer: "Krista Lenz",
    hint: "She used this name while hiding her royal identity in the Survey Corps.",
    anime: "Attack on Titan",
  },
  {
    id: 2,
    question: "Which titan power allows the user to control other titans?",
    options: ["Beast Titan", "Founding Titan", "War Hammer Titan", "Cart Titan"],
    correctAnswer: "Founding Titan",
    hint: "Only people with royal blood can fully use its power.",
    anime: "Attack on Titan",
  },
  {
    id: 3,
    question: "Who originally possessed the Beast Titan before Zeke Yeager?",
    options: ["Uri Reiss", "Willy Tybur", "Tom Ksaver", "Grisha Yeager"],
    correctAnswer: "Tom Ksaver",
    hint: "He was a Titan researcher who later mentored Zeke.",
    anime: "Attack on Titan",
  },
  {
    id: 4,
    question: "What is the name of the nation outside the walls that oppressed the Eldians?",
    options: ["Marley", "Hizuru", "Paradis", "Mid-East Alliance"],
    correctAnswer: "Marley",
    hint: "They use Eldians as Titan soldiers in their military.",
    anime: "Attack on Titan",
  },
  {
    id: 5,
    question: "What is the name of the Titan power used by the Tybur family?",
    options: ["Jaw Titan", "Founding Titan", "Armored Titan", "War Hammer Titan"],
    correctAnswer: "War Hammer Titan",
    hint: "This titan can create weapons and structures from hardened Titan material.",
    anime: "Attack on Titan",
  },
  {
    id: 6,
    question: "Who was the Fourth Hokage?",
    options: ["Tobirama Senju", "Hashirama Senju", "Minato Namikaze", "Hiruzen Sarutobi"],
    correctAnswer: "Minato Namikaze",
    hint: "He is also Naruto's father.",
    anime: "Naruto",
  },
  {
    id: 7,
    question: "What is the name of the forbidden technique used by Minato to seal the Nine-Tails?",
    options: ["Shadow Clone Jutsu", "Reaper Death Seal", "Izanagi", "Edo Tensei"],
    correctAnswer: "Reaper Death Seal",
    hint: "This technique summons the Shinigami.",
    anime: "Naruto",
  },
  {
    id: 8,
    question: "Which member of the Akatsuki wields the Samehada sword?",
    options: ["Pain", "Deidara", "Itachi Uchiha", "Kisame Hoshigaki"],
    correctAnswer: "Kisame Hoshigaki",
    hint: 'He is often called the "tailless tailed beast."',
    anime: "Naruto",
  },
  {
    id: 9,
    question: "What was the name of Itachi Uchiha's Susanoo sword?",
    options: ["Kusanagi Blade", "Kiba Blades", "Totsuka Blade", "Samehada"],
    correctAnswer: "Totsuka Blade",
    hint: "It seals anyone it pierces forever.",
    anime: "Naruto",
  },
  {
    id: 10,
    question: "Who was the first jinchūriki of the Nine-Tailed Fox in Konoha?",
    options: ["Tsunade", "Mito Uzumaki", "Hinata Hyuga", "Kushina Uzumaki"],
    correctAnswer: "Mito Uzumaki",
    hint: "She was the wife of the First Hokage.",
    anime: "Naruto",
  },
];
