function throwReferenceError() {
  let errorName;
  try {
    throw new ReferenceError();
  } catch (error) {
    errorName = error.name;
  }
  return errorName;
}

export const errorName = throwReferenceError();
