// // REVIEWED - 01
import path from "path";
import { fileURLToPath } from "url";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
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
import { TrackCategories } from "./collections/TracksCategory";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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
    TrackCategories,
    Articles,
    Posts,
    Notes,
    Resources,
    FavouriteTracks,
    SavedPosts,
    SavedArticles,
  ],
  sharp,
  plugins: [],
});
