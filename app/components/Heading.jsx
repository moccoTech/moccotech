function Heading({ children, type }) {
  if (type === 'h2') {
    return (
      <h2 className="font-heading text-3xl sm:text-4xl font-medium sm:font-semibold text-center text-gray-800">
        {children}
      </h2>
    );
  }
  if (!type) {
    return (
      <h1 className="font-heading text-3xl sm:text-4xl font-medium sm:font-semibold text-center text-gray-800">
        {children}
      </h1>
    );
  }
}

export default Heading;
