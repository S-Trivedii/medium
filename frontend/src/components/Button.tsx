// interface also works 
// interface Button {
//   btnType: "Sign up" | "Sign in";
//   onClick: () => void;
// }

export const Button = ({
  btnType,
  onClick,
}: {
  btnType: "Sign up" | "Sign in";
  onClick: () => void;
}) => {
  return (
    <div className="">
      <button
        className="block px-3 py-2 text-md bg-slate-600 text-white rounded hover:bg-slate-700"
        type="submit"
        onClick={onClick}
      >
        {btnType}
      </button>
    </div>
  );
};
