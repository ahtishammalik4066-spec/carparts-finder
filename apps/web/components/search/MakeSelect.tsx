interface MakeSelectProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function MakeSelect({ value, onChange }: MakeSelectProps) {
  return (
    <select
      className="make-select"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="">Select Make</option>
      {/* Makes will be loaded from API */}
    </select>
  );
}