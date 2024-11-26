import clientPromise from '../../../lib/mongodb';
import { getAllUserDetails, createUser, findUserByEmail } from './query'; // Import the new function

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const qandaDetails = await getAllUserDetails(db);

    if (!qandaDetails) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(qandaDetails), { status: 200 });
  } catch (error) { 
    console.error('Error fetching User details:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch User details' }), { status: 500 });
  }
}

// export async function GetUserDetails(request) {
  
// }

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    const userData = await request.json(); // Parse the incoming JSON data

    // Check if the user already exists by email using the new function
    const existingUser = await findUserByEmail(db, userData.email);

    if (existingUser) {
        // Update the lastLogin field for the existing user
        await db.collection('users').updateOne(
            { email: userData.email },
            { $set: { lastLogin: new Date() } } // Update lastLogin to the current date
        );
        return new Response(JSON.stringify({ message: "User lastLogin updated successfully" }), { status: 200 });
    } else {
        const result = await createUser(db, userData); // Call the createUser function

        if (result.insertedId) {
            return new Response(JSON.stringify({ message: "User created successfully", id: result.insertedId }), { status: 201 });
        } else {
            return new Response(JSON.stringify({ error: "Failed to create user" }), { status: 500 });
        }
    }
}


