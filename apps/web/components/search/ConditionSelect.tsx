import { PART_CONDITIONS } from "@partfinder/shared";

interface ConditionSelectProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function ConditionSelect({ value, onChange }: ConditionSelectProps) {
  return (
    <select
      className="condition-select"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="">Any Condition</option>
      {Object.values(PART_CONDITIONS).map((condition) => (
        <option key={condition} value={condition}>
          {condition.charAt(0).toUpperCase() + condition.slice(1)}
        </option>
      ))}
    </select>
  );
}