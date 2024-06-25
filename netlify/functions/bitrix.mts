export default async ({req,context}) => {

    console.log("LA TOCOO!!")
  return {
    statusCode:200,
    body: JSON.stringify({message: `gaa`})
  }
};

