import React from "react"
import Title from "../Title"
import services from "../../constants/services"
import { ServicesCenter, Service } from './Services.styles'

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <ServicesCenter>
        {services.map(service => {
          const { id, icon, title, text } = service

          return (
            <Service key={id}>
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </Service>
          )
        })}
      </ServicesCenter>
    </section>
  )
}

export default Services
