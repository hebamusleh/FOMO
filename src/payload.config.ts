// // REVIEWED - 01
import path from "path";
import { fileURLToPath } from "url";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { Endpoint } from 'payload';


import sharp from "sharp";

import { Articles } from "./collections/Articles";
import { FavouriteTracks } from "./collections/FavouriteTracks";
import { Feedback } from "./collections/Feedback";
import { Media } from "./collections/Media";
import { Mentors } from "./collections/Mentors";
import { Notes } from "./collections/Notes";
import { Posts } from "./collections/Posts";
import { Resources } from "./collections/Resources";
import { SavedArticles } from "./collections/SavedArticles";
import { SavedPosts } from "./collections/SavedPosts";
import { Sections } from "./collections/Sections";
import { Students } from "./collections/Students";
import { Tracks } from "./collections/Tracks";
import { TracksCategory } from "./collections/TracksCategory";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const customEndpoints: Endpoint[] = [
  {
    path: '/api/users/signup',
    method: 'post',
    handler: async (req, res) => {
      const { firstName, lastName, email, password, role, dateOfBirth, pronoun, major, avatar, goals, bio, linkedin, track, skills, message, yearOfExperience } = req.body;

      try {
        // Create user in Users collection
        const user = await req.payload.create({
          collection: 'users',
          data: {
            email,
            password,
            firstName,
            lastName,
            role,
            profilePhoto: avatar,
          },
        });

        // Create corresponding Student or Mentor record
        if (role === 'student') {
          await req.payload.create({
            collection: 'students',
            data: {
              userId: user.id,
              goal: goals,
              bio,
              birthday: dateOfBirth,
              major,
              pronoun,
              urlLinkedin: linkedin,
              isAgree: true,
            },
          });
        } else if (role === 'mentor') {
          await req.payload.create({
            collection: 'mentors',
            data: {
              userId: user.id,
              bio,
              birthday: dateOfBirth,
              major,
              pronoun,
              yearOfExpe: yearOfExperience,
              skills,
              profilePhoto: avatar,
              urlLinkedin: linkedin,
              welcomeStatement: message,
              expertTrackId: track,
              isAgree: true,
            },
          });
        }

        // Log the user in and generate JWT
        const loginResult = await req.payload.login({
          collection: 'users',
          data: { email, password },
          req,
        });

        res.status(200).json({
          success: true,
          user: loginResult.user,
          token: loginResult.token,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message || 'Signup failed',
        });
      }
    },
  },
];


export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({ url: process.env.DATABASE_URI || "" }),
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  editor: lexicalEditor(),
  admin: { user: Users.slug, importMap: { baseDir: path.resolve(dirname) } },
  collections: [
    Users,
    Media,
    Mentors,
    Students,
    Feedback,
    Sections,
    Tracks,
    TracksCategory,
    Articles,
    Posts,
    Notes,
    Resources,
    FavouriteTracks,
    SavedPosts,
    SavedArticles,
  ],
  sharp,
  plugins: [
    
  ],
  endpoints: customEndpoints,

});

