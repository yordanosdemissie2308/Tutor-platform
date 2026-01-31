export interface Post {
  id: string;
  userId: string;
  userName: string;
  userRole: "student" | "teacher";
  userAvatar: string;
  userSkills: string[];
  content: string;
  images?: string[];
  link?: {
    url: string;
    title: string;
    description: string;
  };
  certificate?: {
    title: string;
    issuer: string;
    imageUrl: string;
  };
  tags: string[];
  visibility: "public" | "tutors-only" | "students-only";
  likes: number;
  likedByCurrentUser: boolean;
  comments: Comment[];
  shares: number;
  timestamp: string;
  achievement?: {
    type: "milestone" | "certification" | "streak" | "completion";
    badge: string;
    title: string;
  };
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
}

export const mockPosts: Post[] = [
  {
    id: "p1",
    userId: "1",
    userName: "Emma Johnson",
    userRole: "student",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    userSkills: ["Mathematics", "Piano", "Chess"],
    content: "🎉 Just completed React Basics course! Feeling accomplished and ready to build my first web application. Thanks to all the amazing tutors who helped me along the way!",
    images: ["https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"],
    tags: ["Learning", "React", "WebDevelopment", "Milestone"],
    visibility: "public",
    likes: 24,
    likedByCurrentUser: true,
    comments: [
      {
        id: "c1",
        userId: "2",
        userName: "Michael Chen",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        content: "Congratulations Emma! Keep up the great work! 🚀",
        timestamp: "2024-01-28T10:30:00Z",
        likes: 3
      },
      {
        id: "c2",
        userId: "4",
        userName: "Dr. Amanda Lee",
        userAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
        content: "Well done! Excited to see what you'll build!",
        timestamp: "2024-01-28T11:15:00Z",
        likes: 2
      }
    ],
    shares: 3,
    timestamp: "2024-01-28T09:00:00Z",
    achievement: {
      type: "completion",
      badge: "🎓",
      title: "Course Completed"
    }
  },
  {
    id: "p2",
    userId: "2",
    userName: "Michael Chen",
    userRole: "teacher",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    userSkills: ["Science", "Programming", "Robotics"],
    content: "Proud moment! 🌟 Reached a milestone of 50 tutoring sessions this month. Seeing my students grow and succeed in STEM subjects makes every session worth it. Here's to continuous learning and teaching!",
    tags: ["Teaching", "Milestone", "STEM", "Tutoring"],
    visibility: "public",
    likes: 45,
    likedByCurrentUser: false,
    comments: [
      {
        id: "c3",
        userId: "1",
        userName: "Emma Johnson",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        content: "You're an inspiration! Thank you for all you do! 🙌",
        timestamp: "2024-01-27T15:45:00Z",
        likes: 5
      }
    ],
    shares: 7,
    timestamp: "2024-01-27T14:30:00Z",
    achievement: {
      type: "milestone",
      badge: "⭐",
      title: "50 Sessions Milestone"
    }
  },
  {
    id: "p3",
    userId: "3",
    userName: "Sofia Martinez",
    userRole: "student",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    userSkills: ["Art", "Spanish", "Dance"],
    content: "Thrilled to share that I've earned my Spanish Language Proficiency Certificate! 🇪🇸 From beginner to fluent in 8 months. Grateful to my tutors and study partners for the constant support!",
    certificate: {
      title: "Spanish Language Proficiency - Advanced Level",
      issuer: "Instituto Cervantes",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800"
    },
    tags: ["Certification", "Spanish", "LanguageLearning", "Achievement"],
    visibility: "public",
    likes: 67,
    likedByCurrentUser: true,
    comments: [
      {
        id: "c4",
        userId: "4",
        userName: "Dr. Amanda Lee",
        userAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
        content: "¡Felicidades! What an amazing achievement! 🎊",
        timestamp: "2024-01-26T16:20:00Z",
        likes: 4
      },
      {
        id: "c5",
        userId: "2",
        userName: "Michael Chen",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        content: "Incredible dedication! Congratulations Sofia! 👏",
        timestamp: "2024-01-26T17:00:00Z",
        likes: 3
      }
    ],
    shares: 12,
    timestamp: "2024-01-26T15:00:00Z",
    achievement: {
      type: "certification",
      badge: "🏆",
      title: "New Certification"
    }
  },
  {
    id: "p4",
    userId: "4",
    userName: "Dr. Amanda Lee",
    userRole: "teacher",
    userAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    userSkills: ["English Literature", "Writing", "Public Speaking"],
    content: "Excited to announce my new online workshop series: 'Creative Writing Essentials'! 📚✍️ Starting next month. Perfect for students looking to enhance their storytelling skills. Limited spots available - DM for details!",
    link: {
      url: "https://example.com/workshop",
      title: "Creative Writing Essentials Workshop",
      description: "Master the art of storytelling with expert guidance. 6-week intensive program."
    },
    tags: ["Teaching", "Workshop", "CreativeWriting", "OnlineLearning"],
    visibility: "public",
    likes: 89,
    likedByCurrentUser: false,
    comments: [
      {
        id: "c6",
        userId: "1",
        userName: "Emma Johnson",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        content: "This sounds amazing! How do I sign up? 📝",
        timestamp: "2024-01-25T11:30:00Z",
        likes: 6
      },
      {
        id: "c7",
        userId: "5",
        userName: "Alex Thompson",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        content: "Count me in! I've been waiting for something like this!",
        timestamp: "2024-01-25T12:00:00Z",
        likes: 2
      }
    ],
    shares: 15,
    timestamp: "2024-01-25T10:00:00Z"
  },
  {
    id: "p5",
    userId: "5",
    userName: "Alex Thompson",
    userRole: "student",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    userSkills: ["Sports", "Fitness", "Nutrition"],
    content: "30-day learning streak! 🔥 Committed to daily study sessions and it's paying off. Consistency is key! Who else is on a learning streak? Let's motivate each other!",
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800"
    ],
    tags: ["Learning", "Consistency", "Motivation", "StudyStreak"],
    visibility: "public",
    likes: 56,
    likedByCurrentUser: true,
    comments: [],
    shares: 4,
    timestamp: "2024-01-24T08:00:00Z",
    achievement: {
      type: "streak",
      badge: "🔥",
      title: "30-Day Streak"
    }
  },
  {
    id: "p6",
    userName: "Ms. Rachel Green",
    userId: "6",
    userRole: "teacher",
    userAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    userSkills: ["Music", "Violin", "Music Theory"],
    content: "Just wrapped up an incredible recital with my advanced violin students! 🎻 The dedication and progress they've shown over the past semester is truly inspiring. Music education transforms lives!",
    images: ["https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800"],
    tags: ["Teaching", "Music", "Violin", "StudentSuccess"],
    visibility: "public",
    likes: 78,
    likedByCurrentUser: false,
    comments: [
      {
        id: "c8",
        userId: "3",
        userName: "Sofia Martinez",
        userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
        content: "Beautiful! Music truly brings people together! 🎵",
        timestamp: "2024-01-23T19:30:00Z",
        likes: 4
      }
    ],
    shares: 9,
    timestamp: "2024-01-23T18:00:00Z"
  }
];
