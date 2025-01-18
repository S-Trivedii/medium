import { ChangeEvent } from "react";

interface LabelledInput {
  label: string;
  placeholder?: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const LabelledInput = ({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInput) => {
  return (
    <div className="mb-2 px-2">
      <label className="block font-bold text-lg" htmlFor="name">
        {label}
      </label>
      <input
        type={type}
        id="name"
        placeholder={placeholder}
        onChange={onChange}
        className="bg-slate-50 border border-gray-400 rounded px-4 py-2 placeholder:text-lg focus:border-blue-100"
        required
      />
    </div>
  );
};
