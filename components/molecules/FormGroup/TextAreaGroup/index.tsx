import TextArea, { TextAreaProps } from "components/atoms/Form/Textarea";
import Label from "components/atoms/Label";
import { useEffect, useState } from "react";
import randomString from "utils/randomString";

interface TextAreaGroupProps extends TextAreaProps {
  label: string;
  name: string;
}
const TextAreaGroup = ({
  label,
  defaultValue,
  name,
  onChange,
  onSubmit,
  required,
  rows,
  placeholder,
}: TextAreaGroupProps) => {
  const [randomId, setRandomId] = useState<string>("");
  useEffect(() => {
    setRandomId(randomString(64));
  }, []);
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={randomId} />
      <TextArea
        defaultValue={defaultValue}
        name={name}
        id={randomId}
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </div>
  );
};

export default TextAreaGroup;
