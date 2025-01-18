import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signup = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2">
      <div>
        <Auth authType="signup" />
      </div>
      <div className="hidden md:block">
        <Quote />
      </div>
    </div>
  );
};
