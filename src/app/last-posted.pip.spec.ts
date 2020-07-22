import { LastPostedPipe } from './last-posted.pipe';

describe('LastPostedPipe', () => {
  it('create an instance', () => {
    const pipe = new LastPostedPipe();
    expect(pipe).toBeTruthy();
  });
});