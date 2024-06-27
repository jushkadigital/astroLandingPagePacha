
exports.handler = async (event,context) => {
 console.log("aoeaoe") 
// const fields = await parseMultipartForm(event)
  // console.log(fields)
  
  console.log(JSON.parse(event.body))
  return {
    statusCode:200,
    body: JSON.stringify({message: `gaa`})
  }
};

