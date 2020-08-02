import Request from '../../request/index';

export const getIndexList = data => Request.get('home/index', data)
