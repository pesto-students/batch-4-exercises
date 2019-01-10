import {
  zip
} from "rxjs";

function curry(func) {
  return (...x) => {
    if (x.length == 1){
      return x[0]
    }
    return (...y) => {
      if (y.length == 0) {
        return func(x)
      }
      return (...z) => {
        if (z.length == 0) {
          const final_arg_list = x.concat(y)
          return func(final_arg_list)
        }
        const final_arg_list = z.concat(x.concat(y))
        return func(final_arg_list)
      }
    }
  }
}

export {
  curry,
};
