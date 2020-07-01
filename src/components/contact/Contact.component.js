import React from "react"
import { ContactSection, FormContainer, FormGroup, Field, Submit } from './Contact.styles'

const Contact = () => {

    return (
        <ContactSection>
            <FormContainer>
                <h3>get in touch</h3>

                <form action="" method="POST">
                    <FormGroup>
                        <Field>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                            />
                        </Field>
                        <Field>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                            />
                        </Field>
                        <Field>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="message"
                            ></textarea>
                        </Field>
                    </FormGroup>
                    <Submit type="submit" className="submit-btn btn">
                        submit here
                    </Submit>
                </form>
            </FormContainer>
        </ContactSection>
    )
}

export default Contact