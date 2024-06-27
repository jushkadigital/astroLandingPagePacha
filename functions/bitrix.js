const axios = require("axios")
const qs = require('qs')

exports.handler = async (event,context) => {
 console.log("aoeaoe") 
// const fields = await parseMultipartForm(event)
  // console.log(fields)
  
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

  axios.post('https://pdscorporation.bitrix24.es/rest/108335/vfbji7p1qmfx0m7d/crm.lead.add.json',qs.stringify(params) , { headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    } })
  .then(response => {
    console.log(response.data);
  })
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

