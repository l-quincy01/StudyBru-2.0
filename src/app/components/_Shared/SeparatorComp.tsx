import { View } from "react-native";

interface SeparatorCompProps {
  vertical?: boolean;
}

const SeparatorComp: React.FC<SeparatorCompProps> = ({ vertical = false }) => {
  const orientation = vertical ? `border-r-hairline` : `border-b-hairline`;

  const classNameThemed = ` ${"border-gray-500"} ${orientation}`.trim();

  return <View className={classNameThemed}></View>;
};

export default SeparatorComp;
