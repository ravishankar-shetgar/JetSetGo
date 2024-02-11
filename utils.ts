import moment from 'moment';

/** converts text like '2h 20m' into
 * duration in seconds.
 */
export const textToSeconds = (text: string) => {
  const parts = text.split(' ');
  let seconds = 0;

  for (const part of parts) {
    if (part.includes('h')) {
      seconds += moment
        .duration(parseInt(part.replace('h', '')), 'hours')
        .asSeconds();
    } else if (part.includes('m')) {
      seconds += moment
        .duration(parseInt(part.replace('m', '')), 'minutes')
        .asSeconds();
    }
  }
  return seconds;
};
