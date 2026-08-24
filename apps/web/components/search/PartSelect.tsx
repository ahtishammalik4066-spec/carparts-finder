interface PartSelectProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function PartSelect({ value, onChange }: PartSelectProps) {
  return (
    <select
      className="part-select"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="">Select Part</option>
      {/* Parts will be loaded from API */}
    </select>
  );
}