import React from "react"
import Title from "../title/Title.component"
import services from "../../constants/services"
import { Service } from './Services.styles'

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
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
      </div>
    </section>
  )
}

export default Services
