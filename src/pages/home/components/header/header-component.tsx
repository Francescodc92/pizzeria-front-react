import { NavBarComponent } from "./navbar/navbar-component";
import { SliderComponent } from "./slider/slider-component";

export const HeaderComponent = () => {
    return (
        <header className="bg-cielo bg-center bg-cover bg-no-repeat relative">
            <NavBarComponent />
            <div className="mt-10 relative overflow-x-hidden py-3">
                <SliderComponent />
            </div>
            {/* end container */}

            {/* <LoginModalComponent
        @closeLoginModal="toggleLoginModal"
        @openRegisterModal="toggleRegisterModal"
      />
      <!--login modal-->
      <RegisterFormComponent
        @closeRegisterModal="toggleRegisterModal"
        @openLoginModal="toggleLoginModal"
      /> */}
        </header>
    );
}