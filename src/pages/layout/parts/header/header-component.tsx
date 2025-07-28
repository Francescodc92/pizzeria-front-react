import { useToggleModalStore } from "@/store/modal-login";
import { useToggleRegisterModalStore } from "@/store/modal-register";
import { useLocation } from "react-router-dom";
import { LoginModalComponent } from "./auth/login-modal-component";
import { NavBarComponent } from "./navbar/navbar-component";
import { SliderComponent } from "./slider/slider-component";

export const HeaderComponent = () => {
  const isModalLoginOpen = useToggleModalStore((state) => state.isModalLoginOpen)
  const isModalRegisterOpen = useToggleRegisterModalStore((state) => state.isModalRegisterOpen)
  const location = useLocation()
  return (
    <header className="bg-cielo bg-center bg-cover bg-no-repeat">
      <NavBarComponent />

      {
        location.pathname == "/" && (
          <div className="mt-10 relative overflow-x-hidden py-3">
            <SliderComponent />
          </div>

        )
      }
      {isModalLoginOpen && <LoginModalComponent />}
      {isModalRegisterOpen && <p className="bg-red-500 text-5xl">is Open</p>}

      {/* <!--login modal-->
      <RegisterFormComponent
        @closeRegisterModal="toggleRegisterModal"
        @openLoginModal="toggleLoginModal"
      /> */}
    </header>
  );
}