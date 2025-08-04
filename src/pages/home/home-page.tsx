import { BannerSectionComponent } from "./components/main/banner-section/banner-section-component"
import { ComboSectionComponent } from "./components/main/combo-section/combo-section-component"
import { EmployeeSectionComponent } from "./components/main/employee-section/employee-section-component"
import { EventSectionComponent } from "./components/main/events-section/event-section-component"
import { ImageSectionComponent } from "./components/main/image-section/image-section-component"
import { PizzasSectionComponent } from "./components/main/pizzas-section/pizzas-section"
import { ReservationsSectionComponent } from "./components/main/reservation-section/reservation-section"
import { SponsorsSectionComponent } from "./components/main/sponsors-section/sponsors-section-component"
import { TestimonialsSectionComponent } from "./components/main/testimonials-section/testimonial-section-component"

export const HomePage = () => {
    return (
        <main className="bg-[#f6f7f2]">
            <BannerSectionComponent />
            <TestimonialsSectionComponent />
            <ComboSectionComponent />
            <ImageSectionComponent />
            <EmployeeSectionComponent />
            <SponsorsSectionComponent />
            <PizzasSectionComponent />
            <EventSectionComponent />
            <ReservationsSectionComponent />
        </main>
    )
}