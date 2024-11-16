import Button from "./Button";
interface OptionsProps {
  options: string[];
}
function Options({ options }: OptionsProps) {
  return (
    <div className="mt-10 gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 bg-background rounded-2xl p-4 customShadow">
      {options.map((option, index) => (
        <Button key={index} text={option} />
      ))}
    </div>
  );
}

export default Options;
