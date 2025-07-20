import { BannerSectionComponent } from "./banner-section/banner-section-component"
import { ComboSectionComponents } from "./combo-section/combo-section-component"
import { TestimonialsSectionComponent } from "./testimonials-section/testimonial-section-component"

export const MainComponent = () => {
    return (
        <main className="bg-[#f6f7f2]">
            <BannerSectionComponent />
            <TestimonialsSectionComponent />
            <ComboSectionComponents />

        </main>
    )
}