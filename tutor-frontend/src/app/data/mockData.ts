export interface Profile {
  id: string;
  name: string;
  type: "student" | "teacher";
  skills: string[];
  bio: string;
  rating: number;
  reviewCount: number;
  avatar: string;
  achievements?: string[];
  reviews?: Review[];
}

export interface Review {
  id: string;
  familyName: string;
  rating: number;
  comment: string;
  date: string;
}

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Emma Johnson",
    type: "student",
    skills: ["Mathematics", "Piano", "Chess"],
    bio: "Passionate about learning and helping others. I enjoy tutoring younger students in math and playing piano in my free time.",
    rating: 4.8,
    reviewCount: 15,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    achievements: ["Math Olympiad Winner 2024", "Piano Grade 8", "Chess Club President"],
    reviews: [
      {
        id: "r1",
        familyName: "Smith Family",
        rating: 5,
        comment: "Emma is an excellent tutor! Our daughter's math grades improved significantly.",
        date: "2024-01-15"
      },
      {
        id: "r2",
        familyName: "Brown Family",
        rating: 5,
        comment: "Very patient and explains concepts clearly.",
        date: "2024-01-10"
      }
    ]
  },
  {
    id: "2",
    name: "Michael Chen",
    type: "teacher",
    skills: ["Science", "Programming", "Robotics"],
    bio: "Experienced educator with 10+ years teaching STEM subjects. I believe in making learning fun and engaging through hands-on projects.",
    rating: 4.9,
    reviewCount: 32,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    achievements: ["Best Teacher Award 2023", "Published Author", "Robotics Coach"],
    reviews: [
      {
        id: "r3",
        familyName: "Johnson Family",
        rating: 5,
        comment: "Mr. Chen makes science come alive! Our son is now fascinated with robotics.",
        date: "2024-01-20"
      }
    ]
  },
  {
    id: "3",
    name: "Sofia Martinez",
    type: "student",
    skills: ["Art", "Spanish", "Dance"],
    bio: "Creative student who loves art and cultural exchange. I offer Spanish tutoring and enjoy teaching traditional dances.",
    rating: 4.7,
    reviewCount: 12,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    achievements: ["Art Competition Winner", "Bilingual Certificate", "Dance Troupe Member"],
    reviews: [
      {
        id: "r4",
        familyName: "Davis Family",
        rating: 5,
        comment: "Sofia is wonderful! Our kids love learning Spanish with her.",
        date: "2024-01-18"
      }
    ]
  },
  {
    id: "4",
    name: "Dr. Amanda Lee",
    type: "teacher",
    skills: ["English Literature", "Writing", "Public Speaking"],
    bio: "PhD in English Literature with a passion for nurturing young writers. I help students find their voice and express themselves confidently.",
    rating: 5.0,
    reviewCount: 28,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    achievements: ["PhD in Literature", "Published Poet", "TED Speaker"],
    reviews: [
      {
        id: "r5",
        familyName: "Wilson Family",
        rating: 5,
        comment: "Dr. Lee transformed our daughter's writing skills. Highly recommended!",
        date: "2024-01-22"
      }
    ]
  },
  {
    id: "5",
    name: "Alex Thompson",
    type: "student",
    skills: ["Sports", "Fitness", "Nutrition"],
    bio: "Athlete and fitness enthusiast. I enjoy helping others achieve their health and fitness goals while maintaining academic excellence.",
    rating: 4.6,
    reviewCount: 8,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    achievements: ["State Champion Swimmer", "Certified Personal Trainer", "Nutrition Course Graduate"],
    reviews: []
  },
  {
    id: "6",
    name: "Ms. Rachel Green",
    type: "teacher",
    skills: ["Music", "Violin", "Music Theory"],
    bio: "Professional violinist and music educator. I believe music education develops creativity, discipline, and emotional intelligence.",
    rating: 4.8,
    reviewCount: 20,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    achievements: ["Juilliard Graduate", "Orchestra Principal", "Award-Winning Educator"],
    reviews: [
      {
        id: "r6",
        familyName: "Miller Family",
        rating: 5,
        comment: "Ms. Green is an amazing violin teacher. Our son has made incredible progress!",
        date: "2024-01-12"
      }
    ]
  }
];
