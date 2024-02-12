import moment from 'moment';
import uuid from 'react-native-uuid';

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

export const getRandomUuid = (): string => {
  return uuid.v4().toString();
};

export const truncateStringInTheEnd = (
  str: string,
  maxStringLength: number,
) => {
  if (str && str.length > maxStringLength) {
    return str.slice(0, maxStringLength) + '..';
  } else {
    return str;
  }
};
