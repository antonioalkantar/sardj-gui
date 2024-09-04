import { FileCountPipe } from './file-count.pipe';

describe('FileCountPipe', () => {
  it('create an instance', () => {
    const pipe = new FileCountPipe();
    expect(pipe).toBeTruthy();
  });
});
