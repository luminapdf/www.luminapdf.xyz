import dayjs from 'dayjs';

export const formatFullDate = (date: string) => dayjs(date).format('MMMM D, YYYY');

export const formatShortDate = (date: string) => dayjs(date).format('MMM D, YYYY');

export const formatFullDateTime = (date: string) => dayjs(date).format('MMMM D, YYYY h:mm A');
