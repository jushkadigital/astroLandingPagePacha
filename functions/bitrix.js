const axios = require("axios")
const qs = require('qs')

exports.handler = async (event,context) => {
 console.log("aoeaoe") 
// const fields = await parseMultipartForm(event)
  // console.log(fields)
  
  console.log(`${import.meta.env.PUBLIC_BITRIX}crm.lead.add.json`)
  const data = JSON.parse(event.body)


  try{
  const currentDateTime = new Date()
  const formatedDateTime = currentDateTime.toISOString()
    const params = {

    }
    
  params['FIELDS[TITLE]']  = "Formulario Landing Page Pachas"
  params['FIELDS[UF_CRM_LEAD_1712673755506]'] = data.month
  params['FIELDS[DATE_CREATE]'] = formatedDateTime
  // params.append('FIELDS[ADDRESS_COUNTRY]',rawFormData.country)
  params['FIELDS[NAME]']  = data.nombres
  params['FIELDS[LAST_NAME]'] = data.apellidos
  params['FIELDS[EMAIL][0][VALUE]'] = data.correo
  params['FIELDS[EMAIL][0][VALUE_TYPE]'] ='Work'
  params['FIELDS[PHONE][0][VALUE]'] = `+`+data.phoneCode +' '+data.telefono
  params['FIELDS[PHONE][0][VALUE_TYPE]'] = 'Work'

  const res = await axios.post(`${import.meta.env.PUBLIC_BITRIX}crm.lead.add.json`,qs.stringify(params) , { headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    } })
  
  console.log(res)

    return {
    statusCode:200,
    body: JSON.stringify({message: `gaa`})
  }
  }
  catch{
    
    return {
      statusCode: 400
    }
  }


};

