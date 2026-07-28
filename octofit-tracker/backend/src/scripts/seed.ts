import { connectDatabase, disconnectDatabase } from '../config/database';
import { UserModel } from '../models/User';
import { TeamModel } from '../models/Team';
import { ActivityModel } from '../models/Activity';
import { LeaderboardEntryModel } from '../models/LeaderboardEntry';
import { WorkoutModel } from '../models/Workout';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();
    console.log('Connected to octofit_db');

    await Promise.all([
      UserModel.deleteMany({}),
      TeamModel.deleteMany({}),
      ActivityModel.deleteMany({}),
      LeaderboardEntryModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    const users = await UserModel.insertMany([
      {
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        role: 'admin',
        fitnessGoal: 'Improve endurance',
      },
      {
        name: 'Grace Hopper',
        email: 'grace@example.com',
        role: 'member',
        fitnessGoal: 'Build strength',
      },
      {
        name: 'Katherine Johnson',
        email: 'katherine@example.com',
        role: 'member',
        fitnessGoal: 'Stay consistent',
      },
    ]);

    const teams = await TeamModel.insertMany([
      {
        name: 'Rocket Squad',
        sport: 'Running',
        members: [users[0]._id, users[1]._id],
      },
      {
        name: 'Orbit Crew',
        sport: 'Cycling',
        members: [users[2]._id],
      },
    ]);

    await ActivityModel.insertMany([
      {
        user: users[0]._id,
        type: 'run',
        durationMinutes: 35,
        distanceKm: 5.4,
        date: '2026-07-28',
      },
      {
        user: users[1]._id,
        type: 'strength',
        durationMinutes: 45,
        distanceKm: 0,
        date: '2026-07-27',
      },
      {
        user: users[2]._id,
        type: 'ride',
        durationMinutes: 60,
        distanceKm: 18.2,
        date: '2026-07-26',
      },
    ]);

    await LeaderboardEntryModel.insertMany([
      {
        user: users[0]._id,
        points: 320,
        streak: 7,
      },
      {
        user: users[1]._id,
        points: 280,
        streak: 4,
      },
      {
        user: users[2]._id,
        points: 260,
        streak: 3,
      },
    ]);

    await WorkoutModel.insertMany([
      {
        name: 'HIIT Cardio',
        difficulty: 'medium',
        durationMinutes: 30,
        focus: 'endurance',
      },
      {
        name: 'Strength Builder',
        difficulty: 'hard',
        durationMinutes: 45,
        focus: 'muscle',
      },
    ]);

    console.log('Database seeding complete');
    await disconnectDatabase();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
