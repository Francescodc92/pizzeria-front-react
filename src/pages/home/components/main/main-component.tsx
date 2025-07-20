import { BannerSectionComponent } from "./banner-section/banner-section-component"
import { ComboSectionComponents } from "./combo-section/combo-section-component"
import { EmployeeSectionComponent } from "./employee-section/employee-section-component"
import { ImageSectionComponent } from "./image-section/image-section-component"
import { SponsorsSectionComponent } from "./sponsors-section/sponsors-section-component"
import { TestimonialsSectionComponent } from "./testimonials-section/testimonial-section-component"

export const MainComponent = () => {
    return (
        <main className="bg-[#f6f7f2]">
            <BannerSectionComponent />
            <TestimonialsSectionComponent />
            <ComboSectionComponents />
            <ImageSectionComponent />
            <EmployeeSectionComponent />
            <SponsorsSectionComponent />
        </main>
    )
}