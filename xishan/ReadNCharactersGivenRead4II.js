/**
The API: int read4(char *buf) reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

Note:
The read function may be called multiple times.
*/

let buffPtr = 0;
let buffCnt = 0;
let buff = Array(4).fill('');
const read = (buf, n) => {
  let ptr = 0;
  while (ptr < n) {
    if (buffPtr === 0) {
      buffCnt = read4(buff);
    }
    if (buffCnt == 0) break;
    while (ptr < n && buffPtr < buffCnt) {
      buf[ptr++] = buff[buffPtr++];
    }
    if (buffPtr == buffCnt) buffPtr = 0;
  }
  return ptr;
}
