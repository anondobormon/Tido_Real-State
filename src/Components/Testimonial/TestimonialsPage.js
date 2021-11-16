import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBTestimonial,
} from "mdbreact";
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

const TestimonialsPage = () => {
  return (
    <MDBContainer>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">Testimonials</h2>

        <MDBCarousel
          activeItem={1}
          length={3}
          testimonial
          interval={false}
          showIndicators={false}
          className="no-flex"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBTestimonial>
                <TestimonialCard />
              </MDBTestimonial>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBTestimonial>
                <TestimonialCard />
              </MDBTestimonial>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBTestimonial>
                <TestimonialCard />
              </MDBTestimonial>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
};

export default TestimonialsPage;
