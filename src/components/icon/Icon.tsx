import { icons } from "lucide-react";
import { memo } from "react";

export type IconProps = {
  name: keyof typeof icons;
  className?: string;
  strokeWidth?: number;
};

export const Icon = memo(({ name, className, strokeWidth }: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      style={{ width: "1.75rem", height: "1.75rem" }}
      className={className}
      strokeWidth={strokeWidth || 2.5}
    />
  );
});

Icon.displayName = "Icon";
