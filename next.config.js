/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/reservation",
        destination:"https://map.naver.com/v5/entry/place/37759905?c=14097593.4105503,4492637.4728378,13,0,0,0,dh&placePath=%2Fbooking%3FbookingRedirectUrl=https:%2F%2Fm.booking.naver.com%2Fbooking%2F13%2Fbizes%2F657106%26entry=plt",
        permanent: false,
      },
    ];
  },
};
