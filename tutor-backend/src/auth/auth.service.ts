import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: any) {
    const { email, password, name, role, profileData } = dto;

    // Ensure tutor subjects are stored as a string in the SQLite-backed schema.
    const subjectsString =
      role === 'TUTOR' && Array.isArray(profileData?.subjects)
        ? profileData.subjects.join(',')
        : typeof profileData?.subjects === 'string'
        ? profileData.subjects
        : null;

    return this.prisma.user.create({
      data: {
        email,
        password, // In production: hash with bcrypt!
        name,
        role,
        ...(role === 'FAMILY' && {
          familyProfile: {
            create: {
              studentName: profileData.studentName,
              studentGrade: profileData.studentGrade,
            },
          },
        }),
        ...(role === 'TUTOR' && {
          tutorProfile: {
            create: {
              bio: profileData.bio,
              subjects: subjectsString,
              hourlyRate: profileData.hourlyRate,
            },
          },
        }),
      },
      include: { familyProfile: true, tutorProfile: true },
    });
  }
}