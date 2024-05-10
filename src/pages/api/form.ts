import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();


const rawFormData ={
      statusId:formData.get("statusId")!.toString(),
      title:formData.get("title")!.toString(),
      nombres:formData.get("nombres")!.toString(),
      apellidos:formData.get("apellidos")!.toString(),
      telefono:formData.get("telefono")!.toString(),
      correo:formData.get("correo")!.toString(),
    }
      
  console.log(rawFormData)
 
  // Validate the data - you'll probably want to do more than this
  if (!rawFormData.nombres || !rawFormData.correo ) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  
  try{
  const params = new URLSearchParams()
  params.append('FIELDS[STATUS_ID]','NEW')
  params.append('FIELDS[ADDRESS_COUNTRY]',rawFormData.country)
  params.append('FIELDS[TITLE]',rawFormData.title)
  params.append('FIELDS[NAME]',rawFormData.nombres)
  params.append('FIELDS[LAST_NAME]',rawFormData.apellidos)
  params.append('FIELDS[EMAIL][0][VALUE]',rawFormData.correo)
  params.append('FIELDS[EMAIL][0][VALUE_TYPE]','Work')
  params.append('FIELDS[PHONE][0][VALUE]',rawFormData.telefono)
  params.append('FIELDS[PHONE][0][VALUE_TYPE]','Work')
  
  const res = await fetch('https://jushka.bitrix24.es/rest/307/38vukgi2zayzr54s/crm.lead.add.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    body:params
  })

const data = await res.json()
console.log(data)

     return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  )
  }
  catch{
       return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  )
  }


};
