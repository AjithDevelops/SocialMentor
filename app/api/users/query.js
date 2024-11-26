export async function getAllUserDetails(db) {
    return await db.collection('users').findOne({}, { projection: { _id: 0 } });
  }
  
export async function createUser(db,userData) {
 return await db.collection('users').insertOne(userData);
}
  
export async function findUserByEmail(db, email) {
    return await db.collection('users').findOne({ email });
}
  