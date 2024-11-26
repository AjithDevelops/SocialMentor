import clientPromise from '../../../lib/mongodb';
import { getAllOrderDetails, createOrder, findOrderById, getNextOrderID } from './query'; // Import the new functions

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const orderDetails = await getAllOrderDetails(db);

    if (!orderDetails) {
      return new Response(JSON.stringify({ error: "Order not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(orderDetails), { status: 200 });
  } catch (error) { 
    console.error('Error fetching Order details:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch Order details' }), { status: 500 });
  }
}

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    const orderData = await request.json(); // Parse the incoming JSON data
    const orderID = await getNextOrderID(db); 
    const newOrderData = { ...orderData, orderID }; //
    const result = await createOrder(db, newOrderData); // Call the createOrder function

    if (result.insertedId) {
        return new Response(JSON.stringify({ message: "Order created successfully", id: result.insertedId, orderID:orderID }), { status: 201 });
    } else {
        return new Response(JSON.stringify({ error: "Failed to create order" }), { status: 500 });
    }
}
