import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signin = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2">
      <div>
        <Auth authType="signin" />
      </div>
      <div className="hidden md:block">
        <Quote />
      </div>
    </div>
  );
};
