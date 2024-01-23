export default function Input({ label, value, keyValue, handleChange }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        defaultValue={value}
        onChange={(event) => handleChange(keyValue, event.target.value)}
      ></input>
    </p>
  );
}
