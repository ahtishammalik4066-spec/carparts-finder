interface YearSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function YearSelect({ value, onChange, disabled }: YearSelectProps) {
  return (
    <select
      className="year-select"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
    >
      <option value="">Select Year</option>
      {/* Years will be loaded from API based on selected model */}
    </select>
  );
}