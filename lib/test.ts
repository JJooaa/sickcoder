export const doSomething = async (body: { name: string; lastName: string }) => {
  const { name, lastName } = body;
  return `Hello, ${name} ${lastName}`;
};
