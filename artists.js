
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getArtists() {
  // Query the database and return all resource ones
  try {
    const artists = await pool.query(`
    SELECT * FROM artists;
    `);
    console.log("Data load successful!");
    return artists.rows;
  } catch(error) {
    console.error("Database load failed!", error);
  }
}

export async function getArtistById(id) {
  // Query the database and return the resource with a matching id or null
  try {
    const queryText = `SELECT * FROM artists WHERE id = $1`
    const result = await pool.query(queryText, [id]);
    console.log("Data load successful!");
      return result.rows;
    } catch(error) {
      console.error("Database load failed!", error);
    }
}

export async function createArtist(data) {
  // Query the database to create an resource and return the newly created resource
  const {name} = data;
  try {
    const queryText = `INSERT INTO artists (name) VALUES ($1) RETURNING *`;
    const result = await pool.query(queryText, [name]);
    console.log("Data load successful!", result);
      return result.rows;
    } catch(error) {
      console.error("Database load failed!", error);
    }
}

// CHAT GPT ONE:
// export async function createArtist(data) {
//   const { name } = data;

//   try {
//     const queryText = `INSERT INTO artists (name) VALUES ($1) RETURNING *`;
//     const result = await pool.query(queryText, [name]);

//     if (result.rows.length > 0) {
//       console.log("Data load successful!", result.rows[0]);
//       return result.rows[0]; // Return the first row from the result
//     } else {
//       console.log("No rows returned.");
//       return {}; // Return an empty object if no rows are returned
//     }
//   } catch (error) {
//     console.error("Database load failed!", error);
//     throw error; // Re-throw error for handling in the route
//   }
// }










export async function updateArtistById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteArtistById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}