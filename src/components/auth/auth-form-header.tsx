import { FormType, formTitles } from "@/lib/constants";

type AuthFormHeaderProps = {
  formType: FormType;
};

export default function AuthFormHeader({ formType }: AuthFormHeaderProps) {
  const { title, subtitle } = formTitles[formType as FormType];

  return (
    <div className="text-primary inline-block mb-9">
      <h1 className="text-3xl font-medium mb-4">{title}</h1>
      <p className="font-medium text-2xl text-[#878787] text-pretty">
        {subtitle}
      </p>
    </div>
  );
}