import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  Textarea
} from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
// @ts-ignore
import { useCountries } from "use-react-countries";


type Props = {
  // objRes: any
}

export const Formu = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setLoading] = useState(false)
  const [temp, setTemp] = useState("");
  const [country, setCountry] = useState("");
  async function submit(e: any) {
    e.preventDefault();
    setLoading(true)
    const finalCountry = country.split('+')
    console.log(finalCountry)
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("phoneCode", "+" + finalCountry[1]!!)
    formData.append("country", finalCountry[0]!!.trim())
    formData.append("month",temp)
    const response = await fetch("/netlify/functions/bitrix.mts", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data)
    window.location.href = 'https://pdsviajes.com/gracias-formulario/'
    setLoading(prev => false)
    if (data.message) {
      setResponseMessage(data.message);
    }
  }
  
  const handleChangeCountry = (e)=>{
    setCountry(e)
    console.log(e)
  }

  const handleChange = (e) => {
    setTemp(e);
  }
const { countries } = useCountries();

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-[#B65F00]  text-[15px] lg:text-2xl font-extrabold text-center lg:text-left  ">
        FORMULARIO DE CONTACTO
      </h2>
      {/* <form onSubmit={submit} className="mt-8 mx-auto mb-2 w-10/12"> */}
      {/*   <div className="mb-1 flex flex-col lg:gap-6 gap-3"> */}
      {/*     <div className="flex lg:flex-row lg:gap-x-3 flex-col gap-y-3"> */}
      {/*       <Typography */}
      {/*         variant="small" */}
      {/*         color="blue-gray" */}
      {/*         className="mb-2 font-medium" */}
      {/*       > */}
      {/*         Nombres */}
      {/*       </Typography> */}
      {/*       <Input */}
      {/*         size="lg" */}
      {/*         placeholder="Nombres" */}
      {/*         id="nombres" */}
      {/*         name="nombres" */}
      {/*         className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-xl  !font-bold" */}
      {/*         labelProps={{ */}
      {/*           className: "before:content-none after:content-none", */}
      {/*         }} */}
      {/*       /> */}
      {/*       <Input */}
      {/*         size="lg" */}
      {/*         placeholder="Apellidos" */}
      {/*         id="apellidos" */}
      {/*         name="apellidos" */}
      {/*         className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-xl !font-bold" */}
      {/*         labelProps={{ */}
      {/*           className: "before:content-none after:content-none", */}
      {/*         }} */}

      {/*       /> */}
      {/*     </div> */}
      {/*     <div className="flex lg:flex-row lg:gap-x-3 flex-col gap-y-3"> */}
      {/*       <Input */}
      {/*         size="lg" */}
      {/*         placeholder="Telefono" */}
      {/*         id="telefono" */}
      {/*         name="telefono" */}
      {/*         className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-xl !font-bold" */}
      {/*         labelProps={{ */}
      {/*           className: "before:content-none after:content-none", */}
      {/*         }} */}
      {/*       /> */}
      {/*       <Input */}
      {/*         size="lg" */}
      {/*         placeholder="Correo" */}
      {/*         id="correo" */}
      {/*         name="correo" */}
      {/*         className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-xl !font-bold" */}
      {/*         labelProps={{ */}
      {/*           className: "before:content-none after:content-none", */}
      {/*         }} */}
      {/*       /> */}
      {/*     </div> */}
      {/*     <div className="flex lg:flex-row lg:gap-x-3 flex-col gap-y-3"> */}
      {/*       <Input */}
      {/*         size="lg" */}
      {/*         placeholder="¿En que MES planeas tu viaje?" */}
      {/*         id="mesViaje" */}
      {/*         name="mesViaje" */}
      {/*         className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-xl !font-bold" */}
      {/*         labelProps={{ */}
      {/*           className: "before:content-none after:content-none", */}
      {/*         }} */}
      {/*       /> */}


      {/*     </div> */}
      {/*           {/*     <Button type="submit" disabled={responseMessage == "Success"} className="mt-6 text-white bg-[#B65F00] lg:text-xl text-sm" > */}
      {/*        */}
      {/*       {isLoading ? <Spinner /> : responseMessage == "Success" ? "Enviado!!" : "Enviar"} */}
      {/*     </Button> */}
      {/*   </div> */}
      {/* </form> */}

      <form id="juanca" className="mt-12 flex flex-col gap-4" onSubmit={submit}>
        <div className="my-4 flex items-center gap-4">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Nombres *
            </Typography>
            <Input
              // maxLength={5}
              // value={formatExpires(cardExpires)}
              // onChange={(event) => setCardExpires(event.target.value)}
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="Nombres"
              id="nombres"
              required
              name="nombres"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Apellidos *
            </Typography>
            <Input
              // maxLength={4}
              containerProps={{ className: "min-w-[72px]" }}
              id="apellidos"
              name="apellidos"
              required
              placeholder="apellidos"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:contenr-none",
              }}
            />
          </div>
        </div>
<div className="w-72">
      <Select
        size="lg"
        label="Selecciona tu pais"
        onChange={handleChangeCountry}
        
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
          })
        }
      >
        {countries.filter(({name})=>['Peru','Mexico','Panama','Guatemala','Honduras','Costa Rica','Nicaragua','Colombia','Chile','Uruguay','Spain','United States','Dominican Republic'].includes(name)).map(({ name, flags,countryCallingCode }) => (
          <Option key={name} value={name+countryCallingCode} className="flex items-center gap-2">
            <img
              src={flags.svg}
              alt={name}
              className="h-5 w-5 rounded-full object-cover"
            />
            {name} {countryCallingCode}
          </Option>
        ))}
      </Select>
    </div>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Telefono *
          </Typography>
          <Input
            type="number"
            placeholder="Telefono"
            id="telefono"
            name="telefono"
            required
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Correo
          </Typography>
          <Input
            type="email"
            id="correo"
            name="correo"
            placeholder="Correo"
            required
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div>
          <Select label="Selecione el MES en que desea viajar?" onChange={handleChange}>
            <Option>Enero</Option>
            <Option>Febrero</Option>
            <Option>Marzo</Option>
            <Option>Abril</Option>
            <Option>Mayo</Option>
            <Option>Junio</Option>
            <Option>Julio</Option>
            <Option>Agosto</Option>
            <Option>Septiembre</Option>
            <Option>Octubre</Option>
            <Option>Noviembre</Option>
            <Option>Diciembre</Option>
          </Select>
        </div>
              <Button type="submit" disabled={responseMessage == "Success"} className="mt-6 text-white bg-[#B65F00] lg:text-xl text-sm" >
            
            {isLoading ? <Spinner /> : responseMessage == "Success" ? "Enviado!!" : "Enviar"}
          </Button>


              </form>

    </div>
  );
}
