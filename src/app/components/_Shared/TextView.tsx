import { ReactNode } from "react";
import { Text, useColorScheme } from "react-native";

interface TextProps {
  children: ReactNode;
  className?: string;
}

const TextView: React.FC<TextProps> = ({ children, className = "" }) => {
  const theme = useColorScheme();
  const dynamicTheme = theme === "dark" ? "text-white" : "text-black";

  //if custom text colours are added do not theme
  const isColorClass = /text-[^-]+-\d+$/.test(className);

  const classNameThemed = isColorClass
    ? className
    : `${className} ${dynamicTheme}`.trim();

  return <Text className={classNameThemed}>{children}</Text>;
};

export default TextView;
