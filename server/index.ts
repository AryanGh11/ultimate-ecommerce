import * as schema from "@/server/schema";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Throw error if the POSTGRES_URL is not found
if (!process.env.POSTGRES_URL) throw new Error("POSTGRES_URL is not found");

const sql = neon(process.env.POSTGRES_URL);
export const db = drizzle(sql, { schema, logger: true });
