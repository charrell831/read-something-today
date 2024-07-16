import { sql } from '@vercel/postgres'

export async function data() {
    const createTable = await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(255) UNIQUE NOT NULL,
      articleLink VARCHAR(255),
      type VARCHAR(255),
    );`

    const articles = await Promise.all([
        sql`
            INSERT INTO articles (title, author, articleLink)
            VALUES ('Reading Audre Lorde in Palestine: Exploring Differences between Generative and Extractive', 'rauchg@Rana Barakat.com', 'https://kohljournal.press/reading-audre-lorde-palestine', 'Palestine')

          `,
        sql`
            INSERT INTO articles (title, author, articleLink)
            VALUES ('Reading Audre Lorde in Palestine: Exploring Differences between Generative and Extractive', 'rauchg@Rana Barakat.com', 'https://kohljournal.press/reading-audre-lorde-palestine', 'Palestine')
        
          `,
        sql`
            INSERT INTO articles (title, author, articleLink)
            VALUES ('Reading Audre Lorde in Palestine: Exploring Differences between Generative and Extractive', 'rauchg@Rana Barakat.com', 'https://kohljournal.press/reading-audre-lorde-palestine', 'Palestine')
          `,
      ])

      return {
        createTable,
        articles,
      }
}