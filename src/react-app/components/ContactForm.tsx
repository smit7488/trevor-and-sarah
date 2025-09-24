import { useForm } from "react-hook-form";
import { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  service: string;
  venue: string;
  hearAboutUs: string;
  importance: string;
  additionalInfo: string;
  "g-recaptcha-response": string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key as keyof ContactFormData] ?? "");
      }

      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
      });

      if (res.ok) setSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card className="shadow-sm rounded border-0 p-4 p-md-5">
              {success ? (
                <h3 className="text-center text-success">Thank you! Your message has been sent.</h3>
              ) : (
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <h2 className="mb-4 text-center">Contact Us</h2>

                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your name here"
                      {...register("fullName", { required: true })}
                      isInvalid={!!errors.fullName}
                    />
                    <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="E.g. myemail@email.com"
                      {...register("email", { required: true })}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">Valid email required</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number *</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="E.g. 541 444 0755"
                      {...register("phone", { required: true })}
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="eventDate">
                    <Form.Label>Event Date *</Form.Label>
                    <Form.Control
                      type="date"
                      {...register("eventDate", { required: true })}
                      isInvalid={!!errors.eventDate}
                    />
                    <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="service">
                    <Form.Label>Service *</Form.Label>
                    <Form.Select {...register("service", { required: true })} isInvalid={!!errors.service}>
                      <option value="">Select an option</option>
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="family">Family</option>
                      <option value="portrait">Portrait</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="venue">
                    <Form.Label>Venue *</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("venue", { required: true })}
                      isInvalid={!!errors.venue}
                    />
                    <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="hearAboutUs">
                    <Form.Label>How did you hear about us? *</Form.Label>
                    <Form.Select {...register("hearAboutUs", { required: true })} isInvalid={!!errors.hearAboutUs}>
                      <option value="">Select an option</option>
                      <option value="instagram">Instagram</option>
                      <option value="friend">Friend</option>
                      <option value="google">Google</option>
                      <option value="other">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="importance">
                    <Form.Label>How important is capturing your wedding day? *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      {...register("importance", { required: true })}
                      isInvalid={!!errors.importance}
                    />
                    <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="additionalInfo">
                    <Form.Label>What else should we know? *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      {...register("additionalInfo", { required: true })}
                      isInvalid={!!errors.additionalInfo}
                    />
                    <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                  </Form.Group>

                  {/* reCAPTCHA */}
                  <div className="mb-3">
                    <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                  </div>

                  <small className="d-block mb-3 text-muted">
                    This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    Clicking SEND confirms you're okay with getting texts from Roc Focus. Message and/or data rates may apply.
                  </small>

                  <div className="d-grid">
                    <Button type="submit" variant="outline-dark" size="lg" disabled={isSubmitting}>
                      Send
                    </Button>
                  </div>
                </Form>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
