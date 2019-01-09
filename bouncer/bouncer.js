function bouncer(args) {
  return args.filter(item => !!item);
}

export { bouncer };
