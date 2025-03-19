interface ISubjectCheckbox {
  value: string;
}

export const SubjectCheckbox = ({ value }: ISubjectCheckbox) => {
  const handleCheckboxClick = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      const { firstChild } = e.currentTarget;
      if (firstChild && firstChild instanceof HTMLInputElement) {
        firstChild.checked = !firstChild.checked;
      }
    }
  };

  return (
    <label
      className="subject-checkbox-container"
      tabIndex={0}
      onKeyDown={handleCheckboxClick}
    >
      <input type="checkbox" name="subject" value={value} />
      <div className="checkmark" />
      <span>{value}</span>
    </label>
  );
};
