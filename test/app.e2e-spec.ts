import { describeAPI, field, HttpMethod, HttpStatus, itDoc } from 'itdoc';

describeAPI(
  HttpMethod.GET,
  '/',
  {
    summary: 'Hello World',
    description: 'Hello World',
    tag: 'hello',
  },
  globalThis.__APP__,
  (apiDoc) => {
    itDoc('그냥 접속하면 Hello World를 출력한다', (): any => {
      return apiDoc
        .test()
        .req()
        .res()
        .status(HttpStatus.OK)
        .body({
          message: field('this is message field', 'Hello World!'),
        });
    });
  },
);
