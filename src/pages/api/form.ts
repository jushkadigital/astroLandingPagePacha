import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();


const rawFormData ={
      mesViaje:formData.get("mesViaje")!.toString(),
      country:formData.get("country")!.toString(),
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

  const currentDateTime = new Date()
  const formatedDateTime = currentDateTime.toISOString()
  const params = new URLSearchParams()
  params.append('FIELDS[TITLE]',"Formulario Landing Page Pachas")
  // params.append('FIELDS[UF_CRM_LEAD_1712673755506]',rawFormData.mesViaje)
  params.append('FIELDS[DATE_CREATE]',formatedDateTime)
  params.append('FIELDS[ADDRESS_COUNTRY]',rawFormData.country)
  params.append('FIELDS[NAME]',rawFormData.nombres)
  params.append('FIELDS[LAST_NAME]',rawFormData.apellidos)
  params.append('FIELDS[EMAIL][0][VALUE]',rawFormData.correo)
  params.append('FIELDS[EMAIL][0][VALUE_TYPE]','Work')
  params.append('FIELDS[PHONE][0][VALUE]',rawFormData.telefono)
  params.append('FIELDS[PHONE][0][VALUE_TYPE]','Work')
  
  const res = await fetch('https://jushka.bitrix24.es/rest/307/4ndowpagdqsiu0z7/crm.lead.add.json', {
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
