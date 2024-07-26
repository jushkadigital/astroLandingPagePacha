const fetch = require("node-fetch")


exports.handler = async (event,context) => {
  try {
const response = await fetch('https://graph.facebook.com/v20.0/1430985167621653/events?access_token='+accessToken, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [obj],
    }),
  });

  const result = await response.json();

     return {
    statusCode:200,
    body: JSON.stringify({message: result})
  }   

  } catch (error) {
    return {
      statusCode: 400
    }
    
  }
}

