function objectDefaults(obj, defaults) {
  return { ...defaults, ...obj };
}

export { objectDefaults };
