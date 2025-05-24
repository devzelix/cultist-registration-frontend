export default function Loader() {
  return (
    <>
      {/* Spinner with responsive size and border thickness */}
      <span
        className="size-16 border-8 border-solid border-input loading md:size-22 md:border-[0.625rem] xl:size-25 xl:border-[0.825rem]"
        role="status"
        aria-label="Loading"
      ></span>
    </>
  );
}
