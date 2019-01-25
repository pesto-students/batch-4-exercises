import { not } from '../utils';

function reject(conditon, list) {
  return list.filter(el => not(conditon(el)));
}

export { reject };
