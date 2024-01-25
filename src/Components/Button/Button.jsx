function Button({ fromSubmit }) {
  return (
    <>
      <button
        type="submit"
        className="border-2 border-stone-900  font-bold px-4 py-2 rounded-3xl"
        onClick={fromSubmit}
      >
        Submit
      </button>
    </>
  );
}

export default Button;
