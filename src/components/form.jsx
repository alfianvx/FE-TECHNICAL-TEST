export default function Form({ title, children, onSubmit }) {
  return (
    <div className="w-auto">
      <h1 className="mb-4 text-2xl font-semibold dark:text-white">{title}</h1>
      <form onSubmit={onSubmit} method="POST">
        {children}
      </form>
    </div>
  );
}
