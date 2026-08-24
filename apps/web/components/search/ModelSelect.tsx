interface ModelSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function ModelSelect({ value, onChange, disabled }: ModelSelectProps) {
  return (
    <select
      className="model-select"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
    >
      <option value="">Select Model</option>
      {/* Models will be loaded from API based on selected make */}
    </select>
  );
}