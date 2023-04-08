import { Request } from './Models/Request';

export const CreateRequest = async (request: Request) => {
    console.log(request);
    const response = await fetch('http://localhost:5161/api/Request/CreateRequest', {
        method: 'Post',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": 'application/json',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE'
        },
        body: JSON.stringify(request)
    });
}