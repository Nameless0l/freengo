
export const FormField = ({
  label,
  type = "text",
  name,
}: {
  name: string;
  label: string;
  type?: string;
}) => {
  const id = `form${Math.round(Math.random() * 1000)}field`;
  return (
    <div className="mb-2">
      <div data-mdb-input-init className="form-outline">
        <input
          type={type}
          id={id}
          name={name}
          className="border form-control"
        />
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};
