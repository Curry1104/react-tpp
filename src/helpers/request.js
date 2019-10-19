export default async function (path, opt) {
  const url = '/json' + path + '.json';
  const options = Object.assign({
    method: 'GET'
  }, opt);

  try {
    const response = await fetch(url, options);
    const {data, status} = await response.json();

    if(status === 0) {
      return data;
    } else {
      // 错误处理
    }
  } catch (e) {
    // 错误处理
  }
}