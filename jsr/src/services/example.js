import request from '../utils/request';

export function query(data) {
  return request('/api/users',{
    method:'POST',
    data
  });
}
