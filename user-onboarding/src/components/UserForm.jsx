import React from "react";

function UserForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
    onCheckboxChange,
    disabled,
    errors,
  } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2> Add an User</h2>

        <h4>Required Information:</h4>

        <div>
          <label>
            Name&nbsp;
            <input
              type="text"
              value={values.name}
              onChange={onInputChange}
              name="name"
            />
          </label>

          <label>
            Email&nbsp;
            <input
              type="email"
              value={values.email}
              onChange={onInputChange}
              name="email"
            />
          </label>

          <label>
            Password&nbsp;
            <input
              type="password"
              value={values.password}
              onChange={onInputChange}
              name="password"
            />
          </label>

          <label>
            Terms of Service&nbsp;
            <input
              type="checkbox"
              checked={values.termsOfService}
              onChange={onCheckboxChange}
              name="termsOfService"
            />
          </label>
        </div>

        <div>
          <div>{errors.name}</div>
          <div>{errors.password}</div>
          <div>{errors.termsOfService}</div>
        </div>

        <button disabled={disabled}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
